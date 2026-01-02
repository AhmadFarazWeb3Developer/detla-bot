import { existsSync, mkdirSync, writeFile, writeFileSync } from "fs";
import { network } from "hardhat";

const { ethers } = await network.connect({
  network: "localhost",
});

const deployDexes = async () => {
  const INITIAL_SUPPLY = ethers.parseUnits("1000000", 18); // 1M

  //  DEX A contracts ---------------------------------------
  const DexA_Factory = await ethers.getContractFactory(
    "contracts/DEX-A/UniswapV2Factory.sol:UniswapV2Factory"
  );

  const DexA_ERC20 = await ethers.getContractFactory(
    "contracts/DEX-A/UniswapV2ERC20.sol:UniswapV2ERC20"
  );

  const DexA_Pair = await ethers.getContractFactory(
    "contracts/DEX-A/UniswapV2Pair.sol:UniswapV2Pair"
  );

  const DexA_Router = await ethers.getContractFactory(
    "contracts/DEX-A/mocks/router/UniswapV2Router02Mock.sol:UniswapV2Router02Mock"
  );

  const a_AvalancheMock = await ethers.getContractFactory(
    "contracts/DEX-A/mocks/tokens/AvalancheMock.sol:AvalancheMock"
  );

  const a_BnbMock = await ethers.getContractFactory(
    "contracts/DEX-A/mocks/tokens/BnbMock.sol:BnbMock"
  );

  const a_ChainlinkMock = await ethers.getContractFactory(
    "contracts/DEX-A/mocks/tokens/ChainlinkMock.sol:ChainlinkMock"
  );
  const a_DaiMock = await ethers.getContractFactory(
    "contracts/DEX-A/mocks/tokens/DaiMock.sol:DaiMock"
  );
  const a_PolkadotMock = await ethers.getContractFactory(
    "contracts/DEX-A/mocks/tokens/PolkadotMock.sol:PolkadotMock"
  );
  const a_PolygonMock = await ethers.getContractFactory(
    "contracts/DEX-A/mocks/tokens/PolygonMock.sol:PolygonMock"
  );

  const a_UsdcMock = await ethers.getContractFactory(
    "contracts/DEX-A/mocks/tokens/UsdcMock.sol:UsdcMock"
  );
  const a_UsdtMock = await ethers.getContractFactory(
    "contracts/DEX-A/mocks/tokens/UsdtMock.sol:UsdtMock"
  );
  const a_WethMock = await ethers.getContractFactory(
    "contracts/DEX-A/mocks/tokens/WethMock.sol:WethMock"
  );

  const dexA_factory = await DexA_Factory.deploy(
    "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"
  );

  await dexA_factory.waitForDeployment();

  const dexA_erc20 = await DexA_ERC20.deploy();
  await dexA_erc20.waitForDeployment();

  const dexA_pair = await DexA_Pair.deploy();
  await dexA_pair.waitForDeployment();

  const a_avalancheMock = await a_AvalancheMock.deploy(INITIAL_SUPPLY);
  await a_avalancheMock.waitForDeployment();

  const a_bnbMock = await a_BnbMock.deploy(INITIAL_SUPPLY);
  await a_bnbMock.waitForDeployment();

  const a_chainlinkMock = await a_ChainlinkMock.deploy(INITIAL_SUPPLY);
  await a_chainlinkMock.waitForDeployment();

  const a_daiMock = await a_DaiMock.deploy(INITIAL_SUPPLY);
  await a_daiMock.waitForDeployment();

  const a_polkadotMock = await a_PolkadotMock.deploy(INITIAL_SUPPLY);
  await a_polkadotMock.waitForDeployment();

  const a_polygonMock = await a_PolygonMock.deploy(INITIAL_SUPPLY);
  await a_polygonMock.waitForDeployment();

  const a_usdcMock = await a_UsdcMock.deploy(INITIAL_SUPPLY);
  await a_usdcMock.waitForDeployment();

  const a_usdtMock = await a_UsdtMock.deploy(INITIAL_SUPPLY);
  await a_usdtMock.waitForDeployment();

  const a_wethMock = await a_WethMock.deploy(INITIAL_SUPPLY);
  await a_wethMock.waitForDeployment();

  const dexA_router = await DexA_Router.deploy(
    dexA_factory.target,
    a_wethMock.target
  );

  await dexA_router.waitForDeployment();

  // DEX B contracts ---------------------------------------
  const DexB_Factory = await ethers.getContractFactory(
    "contracts/DEX-B/UniswapV2Factory.sol:UniswapV2Factory"
  );

  const DexB_ERC20 = await ethers.getContractFactory(
    "contracts/DEX-B/UniswapV2ERC20.sol:UniswapV2ERC20"
  );

  const DexB_Pair = await ethers.getContractFactory(
    "contracts/DEX-B/UniswapV2Pair.sol:UniswapV2Pair"
  );

  const DexB_Router = await ethers.getContractFactory(
    "contracts/DEX-B/mocks/router/UniswapV2Router02Mock.sol:UniswapV2Router02Mock"
  );

  const b_AvalancheMock = await ethers.getContractFactory(
    "contracts/DEX-B/mocks/tokens/AvalancheMock.sol:AvalancheMock"
  );

  const b_BnbMock = await ethers.getContractFactory(
    "contracts/DEX-B/mocks/tokens/BnbMock.sol:BnbMock"
  );

  const b_ChainlinkMock = await ethers.getContractFactory(
    "contracts/DEX-B/mocks/tokens/ChainlinkMock.sol:ChainlinkMock"
  );
  const b_DaiMock = await ethers.getContractFactory(
    "contracts/DEX-B/mocks/tokens/DaiMock.sol:DaiMock"
  );
  const b_PolkadotMock = await ethers.getContractFactory(
    "contracts/DEX-B/mocks/tokens/PolkadotMock.sol:PolkadotMock"
  );
  const b_PolygonMock = await ethers.getContractFactory(
    "contracts/DEX-B/mocks/tokens/PolygonMock.sol:PolygonMock"
  );

  const b_UsdcMock = await ethers.getContractFactory(
    "contracts/DEX-B/mocks/tokens/UsdcMock.sol:UsdcMock"
  );

  const b_UsdtMock = await ethers.getContractFactory(
    "contracts/DEX-B/mocks/tokens/UsdtMock.sol:UsdtMock"
  );
  const b_WethMock = await ethers.getContractFactory(
    "contracts/DEX-B/mocks/tokens/WethMock.sol:WethMock"
  );

  const dexB_factory = await DexB_Factory.deploy(
    "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"
  );
  await dexB_factory.waitForDeployment();

  const dexB_erc20 = await DexB_ERC20.deploy();
  await dexB_erc20.waitForDeployment();

  const dexB_pair = await DexB_Pair.deploy();
  await dexB_pair.waitForDeployment();

  const b_avalancheMock = await b_AvalancheMock.deploy(INITIAL_SUPPLY);
  await b_avalancheMock.waitForDeployment();

  const b_bnbMock = await b_BnbMock.deploy(INITIAL_SUPPLY);
  await b_bnbMock.waitForDeployment();

  const b_chainlinkMock = await b_ChainlinkMock.deploy(INITIAL_SUPPLY);
  await b_chainlinkMock.waitForDeployment();

  const b_daiMock = await b_DaiMock.deploy(INITIAL_SUPPLY);
  await b_daiMock.waitForDeployment();

  const b_polkadotMock = await b_PolkadotMock.deploy(INITIAL_SUPPLY);
  await b_polkadotMock.waitForDeployment();

  const b_polygonMock = await b_PolygonMock.deploy(INITIAL_SUPPLY);
  await b_polygonMock.waitForDeployment();

  const b_usdcMock = await b_UsdcMock.deploy(INITIAL_SUPPLY);
  await b_usdcMock.waitForDeployment();

  const b_usdtMock = await b_UsdtMock.deploy(INITIAL_SUPPLY);
  await b_usdtMock.waitForDeployment();

  const b_wethMock = await b_WethMock.deploy(INITIAL_SUPPLY);
  await b_wethMock.waitForDeployment();

  const dexB_router = await DexB_Router.deploy(
    dexB_factory.target,
    b_wethMock.target
  );

  // Store deployed contract addresses ---------------------------

  const deploymentFolder = "./deployments";

  const file = "deployedDexes.json";
  const path = `${deploymentFolder}/${file}`;

  const exist = existsSync(deploymentFolder);

  const deployment = {
    dexA: {
      a_factory: dexA_factory.target,
      a_erc20: dexA_erc20.target,
      a_pair: dexA_pair.target,
      a_router: dexA_router.target,
      a_avalanche: a_avalancheMock.target,
      a_bnb: a_bnbMock.target,
      a_chainlink: a_chainlinkMock.target,
      a_dai: a_daiMock.target,
      a_polkadot: a_polkadotMock.target,
      a_polygon: a_polygonMock.target,
      a_usdc: a_usdcMock.target,
      a_usdt: a_usdtMock.target,
      a_weth: a_wethMock.target,
    },
    dexB: {
      b_factory: dexB_factory.target,
      b_erc20: dexB_erc20.target,
      b_pair: dexB_pair.target,
      b_router: dexB_router.target,
      b_avalanche: b_avalancheMock.target,
      b_bnb: b_bnbMock.target,
      b_chainlink: b_chainlinkMock.target,
      b_dai: b_daiMock.target,
      b_polkadot: b_polkadotMock.target,
      b_polygon: b_polygonMock.target,
      b_usdc: b_usdcMock.target,
      b_usdt: b_usdtMock.target,
      b_weth: b_wethMock.target,
    },
  };

  if (!exist) {
    mkdirSync(deploymentFolder);
  } else {
    writeFileSync(
      path,
      JSON.stringify({
        deployment,
      })
    );
  }
};

deployDexes()
  .then(async () => {
    process.exit(0);
  })
  .catch(async (error) => {
    console.error(error);
    process.exit(1);
  });
