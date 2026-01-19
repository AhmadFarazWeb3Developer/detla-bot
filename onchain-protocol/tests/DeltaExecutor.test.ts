import { expect } from "chai";
import { network } from "hardhat";
const { ethers } = await network.connect();

describe("DeltaExecutor", () => {
  const deployFixture = async () => {
    const [owner, bot, profitReceiver, attacker] = await ethers.getSigners();

    const DeltaExecutor = await ethers.getContractFactory("DeltaExecutor");
    const deltaExecutor = await DeltaExecutor.deploy(
      bot.address,
      profitReceiver.address,
      1_000_000,
      100,
    );

    return {
      deltaExecutor,
      owner,
      bot,
      profitReceiver,
      attacker,
    };
  };

  describe("Deployment", () => {
    it("should deploy correctly", async () => {
      const { deltaExecutor, owner, bot, profitReceiver } =
        await deployFixture();

      expect(await deltaExecutor.owner()).to.equal(owner.address);
      expect(await deltaExecutor.bot()).to.equal(bot.address);
      expect(await deltaExecutor.profitReceiver()).to.equal(
        profitReceiver.address,
      );
    });
  });

  describe("Access control", () => {
    it("should revert when non-bot calls executeTrade", async () => {
      const { deltaExecutor, attacker } = await deployFixture();

      await expect(
        deltaExecutor
          .connect(attacker)
          .executeTrade(
            ethers.ZeroAddress,
            ethers.ZeroAddress,
            ethers.ZeroAddress,
            ethers.ZeroAddress,
            100,
            90,
          ),
      ).to.be.revertedWith("NOT_BOT");
    });

    it("should allow bot to call executeTrade", async () => {
      const { deltaExecutor, bot } = await deployFixture();

      await expect(
        deltaExecutor
          .connect(bot)
          .executeTrade(
            ethers.ZeroAddress,
            ethers.ZeroAddress,
            ethers.ZeroAddress,
            ethers.ZeroAddress,
            100,
            90,
          ),
      ).not.to.be.revertedWithoutReason(ethers);
    });
  });

  describe("Withdrawals", () => {
    it("should allow owner to withdraw tokens", async () => {
      const { deltaExecutor, owner } = await deployFixture();

      await expect(
        deltaExecutor.connect(owner).withdraw(ethers.ZeroAddress),
      ).not.to.be.revertedWithoutReason(ethers);
    });

    it("should revert when non-owner tries to withdraw tokens", async () => {
      const { deltaExecutor, attacker } = await deployFixture();
      await expect(
        deltaExecutor.connect(attacker).withdraw(ethers.ZeroAddress),
      ).to.be.revertedWith("NOT_OWNER");
    });
  });

  describe("Router management", () => {
    it("should allow owner to set allowed routers", async () => {
      const { deltaExecutor, owner } = await deployFixture();
      await expect(
        deltaExecutor.connect(owner).setAllowedRouter(ethers.ZeroAddress, true),
      ).not.to.be.revertedWithoutReason(ethers);
    });

    it("should revert when non-owner tries to set allowed routers", async () => {
      const { deltaExecutor, attacker } = await deployFixture();
      await expect(
        deltaExecutor
          .connect(attacker)
          .setAllowedRouter(ethers.ZeroAddress, true),
      ).to.be.revertedWith("NOT_OWNER");
    });
  });
});
