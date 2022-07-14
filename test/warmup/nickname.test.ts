import { expect } from "earljs";
import { Contract, utils } from "ethers";
import { ethers } from "hardhat";

let contract: Contract;

const DEPLOYED_CTE_CONTRACT = "0x71c46ed333c35e4e6c62d32dc7c8f00d125b4fee";

describe("Nickname", async () => {
  beforeEach(async () => {
    const factory = await ethers.getContractFactory("CaptureTheEther");
    contract = factory.attach(DEPLOYED_CTE_CONTRACT);
  });

  it("solution", async () => {
    const tx = await contract.setNickname(utils.formatBytes32String("7sne"));
    expect(tx.hash).toBeDefined();
  });
});
