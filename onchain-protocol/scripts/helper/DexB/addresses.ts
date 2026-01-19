import deployment from "../../../deployments/deployedDexes.json";

const DEX_B_ADDRESS = deployment.deployment.dexB;

const DexB_addresses = {
  b_factory: DEX_B_ADDRESS.b_factory,
  b_erc20: DEX_B_ADDRESS.b_erc20,
  b_pair: DEX_B_ADDRESS.b_pair,
  b_router: DEX_B_ADDRESS.b_router,

  b_avalanche: DEX_B_ADDRESS.b_avalanche,
  b_bnb: DEX_B_ADDRESS.b_bnb,
  b_chainlink: DEX_B_ADDRESS.b_chainlink,
  b_dai: DEX_B_ADDRESS.b_dai,
  b_polkadot: DEX_B_ADDRESS.b_polkadot,
  b_polygon: DEX_B_ADDRESS.b_polygon,
  b_usdc: DEX_B_ADDRESS.b_usdc,
  b_usdt: DEX_B_ADDRESS.b_usdt,
  b_weth: DEX_B_ADDRESS.b_weth,
};
export default DexB_addresses;
