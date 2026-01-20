import { Contract } from "ethers";
import provider from "./provider.js";
import abis from "../onchain-protocol/scripts/helper/abis.js";

const listenToPair = (pairAddress: string, onLiquidity: Function) => {
  const pair = new Contract(pairAddress, abis.UniswapV2PairAbi, provider);

  pair.on("Mint", async (sender, amount0, amount1) => {
    console.log("Liquidity added:", pairAddress);
    await onLiquidity(pairAddress, amount0, amount1);
  });
};

export default listenToPair;
