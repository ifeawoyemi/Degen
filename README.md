# Project Title
DegenStore

## Description
DegenStore is an ERC20 token smart contract with extra functionality deployed on the Avalanche network for Degen Gaming. The smart contract have the following functionality:

Minting new tokens: The platform should be able to create new tokens and distribute them to players as rewards. Only the owner can mint tokens.
Transferring tokens: Players should be able to transfer their tokens to others.
Redeeming tokens: Players should be able to redeem their tokens for items in the in-game store.
Checking token balance: Players should be able to check their token balance at any time.
Burning tokens: Anyone should be able to burn tokens, that they own, that are no longer needed.

 * ERC-20 Details:
 * - Symbol: DGN
 * - Name: Degen
 * - Decimals: 18

## Getting Started
- Proficiency in [Hardhat](https://hardhat.org/): It is essential to have a good grasp of using Hardhat, a development environment designed for writing, testing, and deploying smart contracts. 
- Understanding of [Solidity](https://soliditylang.org/): It is important to have a strong understanding of Solidity as it is the main programming language used for creating smart contracts in this codebase.
- Command line proficiency: Basic familiarity with using command line tools such as the terminal or Command Prompt is necessary for running commands and scripts.

### Installing
- A text editor: For running the code [Visual Studio Code](https://code.visualstudio.com/).
- You will need to have [Node.js](https://nodejs.org/en) installed on your system, with version V10. or higher.
- Node Package Manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) used for installing and managing dependencies.
* run this command in your terminal `git clone https://github.com/ifeawoyemi/degenstore` to clone this repository

### Executing program

After cloning the github, you will want to do the following to get the code running on your computer.
 1. cd to the project directory, in the terminal type: `npm i`
 2. In the terminal type: `npx hardhat node`
 3. Open a second terminal
 4. In the second terminal, type: `npx hardhat run --network localhost scripts/deploy.ts` to deploy the token.
 5. You can also run the test.ts file, type `npx hardhat run --network localhost scripts/test.ts` to see the how each function works 

## Help

Any advise for common problems or issues.
[hardhat tutorial](https://hardhat.org/tutorial)

[Guide](./GUIDES.md)


##
Degen store deployed to fuji "0xE32B27CC965B88fCdF5325df57d2D18387126e46"
[link](https://testnet.snowtrace.io/address/0xE32B27CC965B88fCdF5325df57d2D18387126e46)


## Authors
  [@codeAngel_](https://twitter.com/codeAngel_)

## License

This project is licensed under the [IFEOLUWA] License.