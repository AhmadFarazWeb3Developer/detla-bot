// SPDX-License-Identifier: MIT

pragma solidity >=0.5.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract DeltaExecutor {
    address public bot;
    address public owner;
    address public profitReceiver;

    uint256 public maxTradeAmount;
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
        address routerBuy,
        address routerSell,
        address tokenIn,
        address tokenOut,
        uint256 amountIn,
        uint256 minOut
    ) external onlyBot {
        require(allowedRouters[routerBuy], "ROUTER_NOT_ALLOWED");
        require(allowedRouters[routerSell], "ROUTER_NOT_ALLOWED");
        require(amountIn <= maxTradeAmount, "LIMIT_EXCEEDED");

        uint256 balanceBefore = IERC20(tokenIn).balanceOf(address(this));

        // swap on routerBuy
        // swap on routerSell

        uint256 balanceAfter = IERC20(tokenIn).balanceOf(address(this));
        require(balanceAfter > balanceBefore + minProfit, "NO_PROFIT");

        IERC20(tokenIn).transfer(profitReceiver, balanceAfter - balanceBefore);
    }

    function withdraw(address token) external onlyOwner {
        IERC20(token).transfer(owner, IERC20(token).balanceOf(address(this)));
    }
}
