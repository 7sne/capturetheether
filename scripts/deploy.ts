import { ethers } from "hardhat";

async function main() {
  const DeployChallenge = await ethers.getContractFactory("DeployChallenge");
  const deployChallenge = await DeployChallenge.deploy();
  await deployChallenge.deployed();
  const isComplete = await deployChallenge.isComplete();
  if (isComplete) {
    console.info(
      "DeployChallenge is complete, tx address: " + deployChallenge.address
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
