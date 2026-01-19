import deployment from "../../../deployments/deployedDexes.json";

const DEX_A_ADDRESS = deployment.deployment.dexA;
const addresses = {
  a_factory: DEX_A_ADDRESS.factory,
  a_erc20: DEX_A_ADDRESS.erc20,
  a_pair: DEX_A_ADDRESS.pair,
  a_router: DEX_A_ADDRESS.router  ,


  a_avalanche: DEX_A_ADDRESS
  
  "0x36b58F5C1969B7b6591D752ea6F5486D069010AB",
  a_bnb: "0x8198f5d8F8CfFE8f9C413d98a0A55aEB8ab9FbB7",
  a_chainlink: "0x0355B7B8cb128fA5692729Ab3AAa199C1753f726",
  a_dai: "0x202CCe504e04bEd6fC0521238dDf04Bc9E8E15aB",
  a_polkadot: "0xf4B146FbA71F41E0592668ffbF264F1D186b2Ca8",
  a_polygon: "0x172076E0166D1F9Cc711C77Adf8488051744980C",
  a_usdc: "0x4EE6eCAD1c2Dae9f525404De8555724e3c35d07B",
  a_usdt: "0xBEc49fA140aCaA83533fB00A2BB19bDdd0290f25",
  a_weth: "0xD84379CEae14AA33C123Af12424A37803F885889",
};
export default addresses;
