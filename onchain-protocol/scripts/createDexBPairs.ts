import { network } from "hardhat";
import abis from "./helper/abis.js";
import DexB_addresses from "./helper/DexB/addresses.js";
import createPairAndAddLiquidity from "./createPairAndAddLiquidity.js";
import { formatUnits } from "ethers";

const createDexBPairs = async () => {
  const { ethers } = await network.connect({ network: "localhost" });
  const [deployer] = await ethers.getSigners();

  const {
    AvalancheMockAbi,
    BnbMockAbi,
    DaiMockAbi,
    UsdcMockAbi,
    WethMockAbi,
    PolygonMockAbi,
    PolkadotMockAbi,
    ChainlinkMockAbi,
    UniswapV2Router02MockAbi,
    UniswapV2FactoryAbi,
  } = abis;
  const {
    b_avalanche,
    b_bnb,
    b_chainlink,
    b_dai,
    b_polkadot,
    b_polygon,
    b_usdc,
    b_weth,
    b_router,
    b_factory,
  } = DexB_addresses;

  const router = new ethers.Contract(
    b_router,
    UniswapV2Router02MockAbi,
    deployer,
  );

  const factory = new ethers.Contract(b_factory, UniswapV2FactoryAbi, deployer);

  const pairs = [
    {
      tokenA: b_avalanche,
      tokenB: b_bnb,
      abiA: AvalancheMockAbi,
      abiB: BnbMockAbi,
      amtA: "500",
      amtB: "300",
    },
    {
      tokenA: b_dai,
      tokenB: b_usdc,
      abiA: DaiMockAbi,
      abiB: UsdcMockAbi,
      amtA: "400",
      amtB: "400",
    },
    {
      tokenA: b_chainlink,
      tokenB: b_weth,
      abiA: ChainlinkMockAbi,
      abiB: WethMockAbi,
      amtA: "200",
      amtB: "100",
    },
    {
      tokenA: b_polygon,
      tokenB: b_polkadot,
      abiA: PolygonMockAbi,
      abiB: PolkadotMockAbi,
      amtA: "350",
      amtB: "250",
    },
  ];

  for (const p of pairs) {
    const pairAddress = await createPairAndAddLiquidity({
      ethers,
      router,
      factory,
      tokenA: p.tokenA,
      tokenB: p.tokenB,
      tokenAAbi: p.abiA,
      tokenBAbi: p.abiB,
      signer: deployer,
      amountA: p.amtA,
      amountB: p.amtB,
    });

    console.log("Pair created:", pairAddress);
    const pair = new ethers.Contract(
      pairAddress,
      abis.UniswapV2PairAbi,
      deployer,
    );

    const reserves = await pair.getReserves();
    console.log(
      `Reserves: ${formatUnits(reserves._reserve0, 18)} - ${formatUnits(
        reserves._reserve1,
        18,
      )}`,
    );
  }
};

createDexBPairs().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
