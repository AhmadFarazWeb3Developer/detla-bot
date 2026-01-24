import { Wallet, Contract } from "ethers";
import provider from "./provider.js";
import listenToPair from "./listener.js";
import tradeOnLiquidity from "./trader.js";
import abis from "../onchain-protocol/scripts/helper/abis.js";
import DexA_addresses from "../onchain-protocol/scripts/helper/DexA/addresses.js";
import readline from "readline";

import loadPrivateKey from "./encryption/decrypt.js";

const entryPoint = async () => {
  const password = await ask("Enter your encryption password: ");

  const privateKey = loadPrivateKey(password);

  const signer = new Wallet(privateKey, provider);

  const router = new Contract(
    DexA_addresses.a_router,
    abis.UniswapV2Router02MockAbi,
    signer,
  );

  const pairs = [
    DexA_addresses.a_pair, // add more
  ];

  for (const pair of pairs) {
    listenToPair(pair, async () => {
      await tradeOnLiquidity({
        router,
        pairAddress: pair,
        signer,
      });
    });
  }

  console.log("Bot listening...");
};

entryPoint().catch((error: any) => {
  console.error(error);
  process.exitCode = 1;
});

const ask = (question: string) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (ans: string) => {
      rl.close();
      resolve(ans);
    });
  });
};
