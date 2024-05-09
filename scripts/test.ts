import { ethers } from "hardhat";

async function main() {

  const DegenStore = await ethers.deployContract("DegenStore");
  await DegenStore.waitForDeployment();

  console.log( `DegenStore deployed to ${DegenStore.target}`);

  //Interact with the contract
    const [deployer, user1, user2] = await ethers.getSigners();
    console.log("Deployer address is", deployer.address);
    
    const degenstore = await ethers.getContractAt("DegenStore", DegenStore.target);

    //get total supply of the token
    const totalSupply = await degenstore.totalSupply();
    console.log("Total supply is", ethers.formatEther(totalSupply));

    // get name of the token
    const name = await degenstore.name();
    console.log("Token name is", name);

    //get symbol of the token
    const symbol = await degenstore.symbol();
    console.log("Token symbol is", symbol);

    // get decimals of the token
    const decimals = await degenstore.decimals();
    console.log("Token decimals is", decimals);

    //mint tokens to user1
    const mint = await degenstore.connect(deployer).mint(user1.address, 100);
    await mint.wait();
    console.log("Minted 100 tokens to user1");

    //get balance of user1
    const balance = await degenstore.balanceOf(user1.address);
    console.log("User1 balance is", ethers.formatEther(balance));

    //transfer tokens from user1 to user2
    const transfer = await degenstore.connect(user1).TransferToken(user2.address, 10);
    await transfer.wait();
    console.log("Transferred 10 tokens from user1 to user2");

    //get balance of user2
    const balance2 = await degenstore.balanceOf(user2.address);
    console.log("User2 balance is", ethers.formatEther(balance2));

    //get balance of user1
    const balance3 = await degenstore.balanceOf(user1.address);
    console.log("User1 balance is", ethers.formatEther(balance3));

    //burn the tokens
    const burn = await degenstore.connect(user1).burn(5);
    await burn.wait();
    console.log("Burned 5 tokens from user1");

    //check balance after burn
    const balance4 = await degenstore.connect(user1).checkBalance();
    console.log("User1 balance is", ethers.formatEther(balance4));

    //redeemToken for user1
    const redeem = await degenstore.connect(user1).redeemToken(2);
    await redeem.wait();
    console.log("Redeemed 2 tokens for user1");

    //check balance after redeem
    const balance5 = await degenstore.connect(user1).checkBalance();
    console.log("User1 balance is", ethers.formatEther(balance5));

    //withdraw Store Funds
    const storeFunds = await degenstore.connect(deployer).withdrawStoreFunds();
    await storeFunds.wait();
    console.log("Store funds withdrawn");
  
    //get balance of deployer
    const balance6 = await degenstore.connect(deployer).checkBalance();
    console.log("Deployer balance is", ethers.formatEther(balance6));


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
