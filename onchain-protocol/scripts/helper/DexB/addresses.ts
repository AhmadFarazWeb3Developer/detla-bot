import deployment from "../../../deployments/deployedDexes.json";

const DEX_A_ADDRESS = deployment.deployment.dexA;
const DexB_addresses = {
  a_factory: DEX_A_ADDRESS.a_factory,
  a_erc20: DEX_A_ADDRESS.a_erc20,
  a_pair: DEX_A_ADDRESS.a_pair,
  a_router: DEX_A_ADDRESS.a_router,

  a_avalanche: DEX_A_ADDRESS.a_avalanche,
  a_bnb: DEX_A_ADDRESS.a_bnb,
  a_chainlink: DEX_A_ADDRESS.a_chainlink,
  a_dai: DEX_A_ADDRESS.a_dai,
  a_polkadot: DEX_A_ADDRESS.a_polkadot,
  a_polygon: DEX_A_ADDRESS.a_polygon,
  a_usdc: DEX_A_ADDRESS.a_usdc,
  a_usdt: DEX_A_ADDRESS.a_usdt,
  a_weth: DEX_A_ADDRESS.a_weth,
};
export default DexB_addresses;
