import { network } from "hardhat";
import abis from "./helper/abis.js";
import DexA_addresses from "./helper/DexA/addresses.js";
import createPairAndAddLiquidity from "./createPairAndAddLiquidity.js";
import { formatUnits } from "ethers";

const createDexAPairs = async () => {
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
    a_avalanche,
    a_bnb,
    a_chainlink,
    a_dai,
    a_polkadot,
    a_polygon,
    a_usdc,
    a_weth,
    a_router,
    a_factory,
  } = DexA_addresses;

  const router = new ethers.Contract(
    a_router,
    UniswapV2Router02MockAbi,
    deployer,
  );

  const factory = new ethers.Contract(a_factory, UniswapV2FactoryAbi, deployer);

  const pairs = [
    {
      tokenA: a_avalanche,
      tokenB: a_bnb,
      abiA: AvalancheMockAbi,
      abiB: BnbMockAbi,
      amtA: "500",
      amtB: "300",
    },
    {
      tokenA: a_dai,
      tokenB: a_usdc,
      abiA: DaiMockAbi,
      abiB: UsdcMockAbi,
      amtA: "400",
      amtB: "400",
    },
    {
      tokenA: a_chainlink,
      tokenB: a_weth,
      abiA: ChainlinkMockAbi,
      abiB: WethMockAbi,
      amtA: "200",
      amtB: "100",
    },
    {
      tokenA: a_polygon,
      tokenB: a_polkadot,
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

createDexAPairs().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
