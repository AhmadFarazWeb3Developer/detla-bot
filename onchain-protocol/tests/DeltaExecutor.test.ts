import { expect } from "chai";
import { network } from "hardhat";
const { ethers } = await network.connect();

describe("DeltaExecutor", function () {
  async function deployFixture() {
    const [owner, bot, profitReceiver, attacker] = await ethers.getSigners();

    const DeltaExecutor = await ethers.getContractFactory("DeltaExecutor");
    const deltaExecutor = await DeltaExecutor.deploy(
      bot.address,
      profitReceiver.address,
      1_000_000,
      100
    );

    return {
      deltaExecutor,
      owner,
      bot,
      profitReceiver,
      attacker,
    };
  }

  describe("Deployment", function () {
    it("should deploy correctly", async function () {
      const { deltaExecutor, owner, bot, profitReceiver } =
        await deployFixture();

      expect(await deltaExecutor.owner()).to.equal(owner.address);
      expect(await deltaExecutor.bot()).to.equal(bot.address);
      expect(await deltaExecutor.profitReceiver()).to.equal(
        profitReceiver.address
      );
    });
  });

  describe("Access control", function () {
    it("should revert when non-bot calls executeTrade", async function () {
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
            90
          )
      ).to.be.reverted;
    });

    it("should allow bot to call executeTrade", async function () {
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
            90
          )
      ).to.not.be.reverted;
    });
  });
});
