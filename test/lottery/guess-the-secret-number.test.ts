import { expect } from "earljs";
import { Contract, Signer } from "ethers";
import { ethers } from "hardhat";

const ONE_ETH = ethers.utils.parseEther("1");
const TARGET_HEX =
  "0xdb81b4d58595fbbbb592d3661a34cdca14d7ab379441400cbfa1b78bc447c365";

let contract: Contract;
let signers: Signer[];

function keccakByNumber(): number {
  let n = 0;
  while (true) {
    if (
      TARGET_HEX.includes(
        ethers.utils.keccak256(ethers.utils.arrayify(ethers.utils.hexValue(n)))
      )
    ) {
      return n;
    } else {
      n += 1;
    }
  }
}

describe.only("Guess the number", async () => {
  beforeEach(async () => {
    signers = await ethers.getSigners();
    const factory = await ethers.getContractFactory(
      "GuessTheSecretNumberChallenge"
    );
    contract = await factory.deploy({
      gasLimit: 1e6,
      value: ONE_ETH,
    });
  });

  it("solution", async () => {
    const correctNumber = keccakByNumber();
    const tx = await contract.guess(correctNumber, {
      value: ONE_ETH,
      gasLimit: 1e5,
    });
    expect(tx.hash).toBeDefined();
  });
});
