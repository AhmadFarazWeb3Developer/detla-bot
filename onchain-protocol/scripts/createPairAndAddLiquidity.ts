import { parseUnits } from "ethers";

const createPairAndAddLiquidity = async ({
  ethers,
  router,
  factory,
  tokenA,
  tokenB,
  tokenAAbi,
  tokenBAbi,
  signer,
  amountA,
  amountB,
}: {
  ethers: any;
  router: any;
  factory: any;
  tokenA: string;
  tokenB: string;
  tokenAAbi: any;
  tokenBAbi: any;
  signer: any;
  amountA: string;
  amountB: string;
}) => {
  // token contracts
  const tokenAContract = new ethers.Contract(tokenA, tokenAAbi, signer);
  const tokenBContract = new ethers.Contract(tokenB, tokenBAbi, signer);

  const amtA = parseUnits(amountA, 18);
  const amtB = parseUnits(amountB, 18);

  // approve router
  await tokenAContract.approve(router.target, amtA);
  await tokenBContract.approve(router.target, amtB);

  // create pair if needed
  let pairAddress = await factory.getPair(tokenA, tokenB);

  if (pairAddress === ethers.ZeroAddress) {
    const tx = await factory.createPair(tokenA, tokenB);
    await tx.wait();
    pairAddress = await factory.getPair(tokenA, tokenB);
  }

  // add liquidity
  await router.addLiquidity(
    tokenA,
    tokenB,
    amtA,
    amtB,
    0,
    0,
    signer.address,
    Math.floor(Date.now() / 1000) + 600,
  );

  return pairAddress;
};

export default createPairAndAddLiquidity;
