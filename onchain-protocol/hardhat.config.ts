import hardhatToolboxMochaEthersPlugin from "@nomicfoundation/hardhat-toolbox-mocha-ethers";
import { configVariable, defineConfig } from "hardhat/config";

export default defineConfig({
  plugins: [hardhatToolboxMochaEthersPlugin],
  solidity: {
    compilers: [
      { version: "0.4.26" },
      { version: "0.5.0" },
      { version: "0.5.16" },
      { version: "0.6.2" },
      { version: "0.6.6" },
      { version: "0.6.12" },
      { version: "0.7.6" },
      { version: "0.8.0" },
      { version: "0.8.13" },
      { version: "0.8.19" },
      { version: "0.8.20" },
      { version: "0.8.28" },
    ],
  },
  networks: {
    hardhatMainnet: {
      type: "edr-simulated",
      chainType: "l1",
    },
    hardhatOp: {
      type: "edr-simulated",
      chainType: "op",
    },
    sepolia: {
      type: "http",
      chainType: "l1",
      url: configVariable("SEPOLIA_RPC_URL"),
      accounts: [configVariable("SEPOLIA_PRIVATE_KEY")],
    },
  },

  paths: {
    sources: "contracts",
    tests: "tests",
  },
});
