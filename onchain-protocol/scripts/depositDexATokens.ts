import { network } from "hardhat";

import abis from "./helper/abis.js";
import DexA_addresses from "./helper/DexA/addresses.js";

import { parseUnits } from "ethers";

const deposit_Dex_A_Tokens = async () => {
  const { ethers } = await network.connect({
    network: "localhost",
  });

  const [deployer] = await ethers.getSigners();

  const a_avalanche = new ethers.Contract(
    DexA_addresses.a_avalanche,
    abis.AvalancheMockAbi,
    deployer,
  );

  const a_bnb = new ethers.Contract(
    DexA_addresses.a_bnb,
    abis.BnbMockAbi,
    deployer,
  );

  const a_chainlink = new ethers.Contract(
    DexA_addresses.a_chainlink,
    abis.ChainlinkMockAbi,
    deployer,
  );

  const a_dai = new ethers.Contract(
    DexA_addresses.a_dai,
    abis.DaiMockAbi,
    deployer,
  );
  const a_polkadot = new ethers.Contract(
    DexA_addresses.a_polkadot,
    abis.PolkadotMockAbi,
    deployer,
  );
  const a_polygon = new ethers.Contract(
    DexA_addresses.a_polygon,
    abis.PolygonMockAbi,
    deployer,
  );
  const a_usdc = new ethers.Contract(
    DexA_addresses.a_usdc,
    abis.UsdcMockAbi,
    deployer,
  );

  const a_usdt = new ethers.Contract(
    DexA_addresses.a_usdt,
    abis.UsdtMockAbi,
    deployer,
  );

  const a_weth = new ethers.Contract(
    DexA_addresses.a_weth,
    abis.WethMockAbi,
    deployer,
  );

  const depositAmount = parseUnits("1000", 18);

  const tx1 = await a_avalanche.transferTokens(deployer.address, depositAmount);
  const tx2 = await a_bnb.transferTokens(deployer.address, depositAmount);
  const tx3 = await a_chainlink.transferTokens(deployer.address, depositAmount);
  const tx4 = await a_dai.transferTokens(deployer.address, depositAmount);
  const tx5 = await a_polkadot.transferTokens(deployer.address, depositAmount);
  const tx6 = await a_polygon.transferTokens(deployer.address, depositAmount);
  const tx7 = await a_usdc.transferTokens(deployer.address, depositAmount);
  const tx8 = await a_usdt.transferTokens(deployer.address, depositAmount);
  const tx9 = await a_weth.transferTokens(deployer.address, depositAmount);
  await Promise.all([
    tx1.wait(),
    tx2.wait(),
    tx3.wait(),
    tx4.wait(),
    tx5.wait(),
    tx6.wait(),
    tx7.wait(),
    tx8.wait(),
    tx9.wait(),
  ]);

  const routerA = new ethers.Contract(
    DexA_addresses.a_router,
    abis.UniswapV2Router02MockAbi,
    deployer,
  );

  await a_avalanche.approve(routerA.target, depositAmount);
  await a_bnb.approve(routerA.target, depositAmount);
  await a_chainlink.approve(routerA.target, depositAmount);
  await a_dai.approve(routerA.target, depositAmount);
  await a_polkadot.approve(routerA.target, depositAmount);
  await a_polygon.approve(routerA.target, depositAmount);
  await a_usdc.approve(routerA.target, depositAmount);
  await a_usdt.approve(routerA.target, depositAmount);
  await a_weth.approve(routerA.target, depositAmount);
};

deposit_Dex_A_Tokens().catch((err) => {
  console.error(err);
  process.exit(1);
});
