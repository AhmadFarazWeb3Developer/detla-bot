import { existsSync, mkdirSync, writeFileSync } from "fs";
import { network } from "hardhat";

const deployDeltaExecutor = async () => {
  const { ethers } = await network.connect({
    network: "localhost",
  });

  const DeltaExecutor = await ethers.getContractFactory("DeltaExecutor");

  const [deployer] = await ethers.getSigners();

  const deltaExecutor = await DeltaExecutor.deploy(
    deployer.address,
    deployer.address,
    1000,
    10,
  );

  const deploymentFolder = "./deployments";

  const file = "deployedDeltaExecutor.json";
  const path = `${deploymentFolder}/${file}`;

  const exist = existsSync(deploymentFolder);

  const deployment = { deltaExecutor: deltaExecutor.target };

  if (!exist) {
    mkdirSync(deploymentFolder);
  } else {
    writeFileSync(
      path,
      JSON.stringify({
        deployment,
      }),
    );
  }
};

deployDeltaExecutor().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
