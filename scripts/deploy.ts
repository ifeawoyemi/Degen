import { ethers } from "hardhat";

async function main() {
  const [owner, user1] = await ethers.getSigners();

  const DegenStore = await ethers.deployContract("DegenStore");
  await DegenStore.waitForDeployment();
  console.log(`DegenStore deployed to ${DegenStore.target}`);

  let mintToContract = await DegenStore.mint(owner.address, "1000");
  mintToContract.wait()
  // console.log(mintToContract);

  let ownerBalBefore = await DegenStore.balanceOf(owner.address);
  console.log({ ownerBalBefore });
  let userBalBefore = await DegenStore.balanceOf(user1.address);
  console.log({ userBalBefore });

  // transfer token
  const transfer = await DegenStore.TransferToken(user1.address, "10");
  transfer.wait()
  // console.log(transfer);

  let ownerBalAfter = await DegenStore.balanceOf(owner.address);
  console.log({ ownerBalAfter });
  let userBalAfter = await DegenStore.balanceOf(user1.address);
  console.log({ userBalAfter });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
