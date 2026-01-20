import { Wallet, Contract } from "ethers";
import abis from "../onchain-protocol/scripts/helper/abis.js";
// import { CONFIG } from "./config.js";

const tradeOnLiquidity = async ({ router, pairAddress, signer }: any) => {
  console.log("Executing trade on:", pairAddress);

  // Example: simple swapExactETHForTokens
  //   await router.swapExactETHForTokens(
  //     0,
  //     [], // path (fill later)
  //     signer.address,
  //     Math.floor(Date.now() / 1000) + 60,
  //     { value: CONFIG.tradeAmountETH },
  //   );
};
export default tradeOnLiquidity;
