import { WebSocketProvider } from "ethers";

const provider = new WebSocketProvider("ws://localhost:8545", {
  name: "localhost",
  chainId: 31337,
});

export default provider;
