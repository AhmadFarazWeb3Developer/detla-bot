// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

import {DeltaExecutor} from "../contracts/DeltaExecutor.sol";

contract DeltaExecutorTest {
    DeltaExecutor public deltaExecutor;
    address bot = address(0x1);
    address profitReceiver = address(0x2);

    function setUp() public {
        deltaExecutor = new DeltaExecutor(bot, profitReceiver, 1000000, 100);
    }

    function test_Deployment() public view {
        assert(address(deltaExecutor) != address(0));
        assert(deltaExecutor.owner() == address(this));
        assert(deltaExecutor.bot() == bot);
        assert(deltaExecutor.profitReceiver() == profitReceiver);
    }

    function testFail_UnauthorizedBot() public {
        deltaExecutor.executeTrade(
            address(0x3),
            address(0x4),
            address(0x5),
            address(0x6),
            100,
            90
        );
        // Should revert because msg.sender is not the bot
    }
}
