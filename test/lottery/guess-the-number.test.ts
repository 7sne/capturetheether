import { expect } from "earljs";
import { Contract, Signer } from "ethers";
import { ethers } from "hardhat";

const ONE_ETH = ethers.utils.parseEther("1");

let contract: Contract;

describe("Guess the number", async () => {
  beforeEach(async () => {
    const factory = await ethers.getContractFactory("GuessTheNumberChallenge");
    contract = await factory.deploy({
      gasLimit: 1e6,
      value: ONE_ETH,
    });
  });

  it("solution", async () => {
    const tx = await contract.guess(42, { value: ONE_ETH, gasLimit: 1e5 });
    expect(tx.hash).toBeDefined();
  });
});
