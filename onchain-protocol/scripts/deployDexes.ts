import { network } from "hardhat";

const { ethers } = await network.connect({
  network: "localhost",
});

const deployDexes = async () => {
  console.log("Deploying DEXes on Optimism...");
};

deployDexes()
  .then(async () => {
    process.exit(0);
  })
  .catch(async (error) => {
    console.error(error);
    process.exit(1);
  });
