// SPDX-License-Identifier: MIT

pragma solidity >=0.5.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IUniswapV2Router {
    function swapExactTokensForTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);
}

contract DeltaExecutor {
    address public bot;
    address public owner;
    address public profitReceiver;

    uint256 public maxTradeAmount; //
    uint256 public minProfit;

    mapping(address => bool) public allowedRouters;

    modifier onlyBot() {
        require(msg.sender == bot, "NOT_BOT");
        _;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "NOT_OWNER");
        _;
    }

    constructor(
        address _bot,
        address _profitReceiver,
        uint256 _maxTrade,
        uint256 _minProfit
    ) public {
        owner = msg.sender;
        bot = _bot;
        profitReceiver = _profitReceiver;
        maxTradeAmount = _maxTrade;
        minProfit = _minProfit;
    }

    function executeTrade(
        address routerSell, // i am selling on this router
        address routerBuy, // i am buying on this router
        address tokenIn, // token I am selling
        address tokenOut, // token I am buying
        uint256 amountIn, // amount I am selling
        uint256 minOut // min amount I want to receive
    ) external onlyBot {
        require(allowedRouters[routerBuy], "ROUTER_NOT_ALLOWED");
        require(allowedRouters[routerSell], "ROUTER_NOT_ALLOWED");
        require(amountIn <= maxTradeAmount, "LIMIT_EXCEEDED");

        uint256 balanceBefore = IERC20(tokenIn).balanceOf(address(this));

        uint256 deadline = block.timestamp + 300;

        // Approve routerBuy to spend tokenIn
        IERC20(tokenIn).approve(routerBuy, amountIn);

        // Swap on routerBuy: tokenIn -> tokenOut
        address[] memory pathBuy = new address[](2);
        pathBuy[0] = tokenIn;
        pathBuy[1] = tokenOut;
        IUniswapV2Router(routerBuy).swapExactTokensForTokens(
            amountIn,
            0,
            pathBuy,
            address(this),
            deadline
        );

        // Get the amount of tokenOut received
        uint256 tokenOutBalance = IERC20(tokenOut).balanceOf(address(this));

        // Approve routerSell to spend tokenOut
        IERC20(tokenOut).approve(routerSell, tokenOutBalance);

        // Swap on routerSell: tokenOut -> tokenIn
        address[] memory pathSell = new address[](2);
        pathSell[0] = tokenOut;
        pathSell[1] = tokenIn;
        IUniswapV2Router(routerSell).swapExactTokensForTokens(
            tokenOutBalance,
            minOut,
            pathSell,
            address(this),
            deadline
        );

        uint256 balanceAfter = IERC20(tokenIn).balanceOf(address(this));
        require(balanceAfter > balanceBefore + minProfit, "NO_PROFIT");

        IERC20(tokenIn).transfer(profitReceiver, balanceAfter - balanceBefore);
    }

    function withdraw(address token) external onlyOwner {
        IERC20(token).transfer(owner, IERC20(token).balanceOf(address(this)));
    }

    function setAllowedRouter(address router, bool allowed) external onlyOwner {
        allowedRouters[router] = allowed;
    }
}
