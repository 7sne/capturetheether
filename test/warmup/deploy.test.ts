import { expect } from "earljs";
import { Contract } from "ethers";
import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0x0000000000000000000000000000000000000001";

let contract: Contract;

describe("Deploy", async () => {
  beforeEach(async () => {
    contract = (await ethers.getContractFactory("DeployChallenge")).attach(
      CONTRACT_ADDRESS
    );
  });

  it("solution", async () => {
    expect(contract.address).toEqual(CONTRACT_ADDRESS);
  });
});
