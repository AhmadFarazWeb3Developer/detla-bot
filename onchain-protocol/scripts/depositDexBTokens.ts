import { network } from "hardhat";

import abis from "./helper/abis.js";

import DexB_addresses from "./helper/DexB/addresses.js";

import { parseUnits } from "ethers";

const deposit_Dex_B_Tokens = async () => {
  const { ethers } = await network.connect({
    network: "localhost",
  });

  const [deployer] = await ethers.getSigners();

  const b_avalanche = new ethers.Contract(
    DexB_addresses.b_avalanche,
    abis.AvalancheMockAbi,
    deployer,
  );

  const b_bnb = new ethers.Contract(
    DexB_addresses.b_bnb,
    abis.BnbMockAbi,
    deployer,
  );

  const b_chainlink = new ethers.Contract(
    DexB_addresses.b_chainlink,
    abis.ChainlinkMockAbi,
    deployer,
  );

  const b_dai = new ethers.Contract(
    DexB_addresses.b_dai,
    abis.DaiMockAbi,
    deployer,
  );
  const b_polkadot = new ethers.Contract(
    DexB_addresses.b_polkadot,
    abis.PolkadotMockAbi,
    deployer,
  );
  const b_polygon = new ethers.Contract(
    DexB_addresses.b_polygon,
    abis.PolygonMockAbi,
    deployer,
  );
  const b_usdc = new ethers.Contract(
    DexB_addresses.b_usdc,
    abis.UsdcMockAbi,
    deployer,
  );

  const b_usdt = new ethers.Contract(
    DexB_addresses.b_usdt,
    abis.UsdtMockAbi,
    deployer,
  );

  const b_weth = new ethers.Contract(
    DexB_addresses.b_weth,
    abis.WethMockAbi,
    deployer,
  );

  const depositAmount = parseUnits("1000", 18);

  const tx1 = await b_avalanche.transferTokens(deployer.address, depositAmount);
  const tx2 = await b_bnb.transferTokens(deployer.address, depositAmount);
  const tx3 = await b_chainlink.transferTokens(deployer.address, depositAmount);
  const tx4 = await b_dai.transferTokens(deployer.address, depositAmount);
  const tx5 = await b_polkadot.transferTokens(deployer.address, depositAmount);
  const tx6 = await b_polygon.transferTokens(deployer.address, depositAmount);
  const tx7 = await b_usdc.transferTokens(deployer.address, depositAmount);
  const tx8 = await b_usdt.transferTokens(deployer.address, depositAmount);
  const tx9 = await b_weth.transferTokens(deployer.address, depositAmount);
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

  console.log("Dex B tokens deposited successfully");
};

deposit_Dex_B_Tokens().catch((err) => {
  console.error(err);
  process.exit(1);
});
