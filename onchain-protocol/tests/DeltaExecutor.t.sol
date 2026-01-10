// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {DeltaExecutor} from "../contracts/DeltaExecutor.sol";
import {Test} from "hardhat/Test.sol";

contract DeltaExecutorTest is Test {
    DeltaExecutor deltaExecutor;

    function setUp() public {
        deltaExecutor = new DeltaExecutor();
    }

    function test_Deployment() public view {
        assertEq(
            address(deltaExecutor) != address(0),
            true,
            "Deployment failed"
        );
    }
}
