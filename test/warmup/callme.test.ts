import { expect } from "earljs";
import { Contract } from "ethers";
import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0x0000000000000000000000000000000000000001";

let contract: Contract;

describe("Call me", async () => {
  beforeEach(async () => {
    const factory = await ethers.getContractFactory("CallMeChallenge");
    contract = factory.attach(CONTRACT_ADDRESS);
    const isComplete = await contract.getIsComplete();
    expect(isComplete).not.toBeDefined();
  });

  it("solution", async () => {
    contract.callme();
  });
});
