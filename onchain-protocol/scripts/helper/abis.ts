import UniswapV2Factory from "../../artifacts/contracts/DEX-A/UniswapV2Factory.sol/UniswapV2Factory.json";
import UniswapV2Pair from "../../artifacts/contracts/DEX-A/UniswapV2Pair.sol/UniswapV2Pair.json";
import UniswapV2ERC20 from "../../artifacts/contracts/DEX-A/UniswapV2ERC20.sol/UniswapV2ERC20.json";
import UniswapV2Router02Mock from "../../artifacts/contracts/DEX-A/mocks/router/UniswapV2Router02Mock.sol/UniswapV2Router02Mock.json";

import AvalancheMock from "../../artifacts/contracts/DEX-A/mocks/tokens/AvalancheMock.sol/AvalancheMock.json";
import BnbMock from "../../artifacts/contracts/DEX-A/mocks/tokens/BnbMock.sol/BnbMock.json";
import ChainlinkMock from "../../artifacts/contracts/DEX-A/mocks/tokens/ChainlinkMock.sol/ChainlinkMock.json";
import DaiMock from "../../artifacts/contracts/DEX-A/mocks/tokens/DaiMock.sol/DaiMock.json";
import PolkadotMock from "../../artifacts/contracts/DEX-A/mocks/tokens/PolkadotMock.sol/PolkadotMock.json";
import UsdcMock from "../../artifacts/contracts/DEX-A/mocks/tokens/UsdcMock.sol/UsdcMock.json";
import UsdtMock from "../../artifacts/contracts/DEX-A/mocks/tokens/UsdtMock.sol/UsdtMock.json";
import WethMock from "../../artifacts/contracts/DEX-A/mocks/tokens/WethMock.sol/WethMock.json";
import PolygonMock from "../../artifacts/contracts/DEX-A/mocks/tokens/PolygonMock.sol/PolygonMock.json";

const abis = {
  UniswapV2FactoryAbi: UniswapV2Factory.abi,
  UniswapV2PairAbi: UniswapV2Pair.abi,
  UniswapV2ERC20Abi: UniswapV2ERC20.abi,
  UniswapV2Router02MockAbi: UniswapV2Router02Mock.abi,
  AvalancheMockAbi: AvalancheMock.abi,
  BnbMockAbi: BnbMock.abi,
  ChainlinkMockAbi: ChainlinkMock.abi,
  DaiMockAbi: DaiMock.abi,
  PolkadotMockAbi: PolkadotMock.abi,
  UsdcMockAbi: UsdcMock.abi,
  UsdtMockAbi: UsdtMock.abi,
  WethMockAbi: WethMock.abi,
  PolygonMockAbi: PolygonMock.abi,
};
export default abis;
