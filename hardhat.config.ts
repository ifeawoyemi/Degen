import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config();

const FORK_FUJI = false
const FORK_MAINNET = false
let forkingData = undefined;

const PRIVATE_KEY = process.env.PRIVATE_KEY as string;
const PRIVATE_KEY2 = process.env.PRIVATE_KEY2 as string;
const PRIVATE_KEY3 = process.env.PRIVATE_KEY3 as string;
const AVAX_APIKEY = process.env.AVAX_APIKEY as string;

if (FORK_MAINNET) {
  forkingData = {
    url: 'https://api.avax.network/ext/bc/C/rpcc',
  }
}
if (FORK_FUJI) {
  forkingData = {
    url: 'https://api.avax-test.network/ext/bc/C/rpc',
  }
}

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    hardhat: {
      gasPrice: 225000000000,
      // chainId: !forkingData ? 43112 : undefined, //Only specify a chainId if we are not forking
      // forking: forkingData
    },
    fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [PRIVATE_KEY, PRIVATE_KEY2, PRIVATE_KEY3]
    },
    mainnet: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43114,
      accounts: [PRIVATE_KEY, PRIVATE_KEY2, PRIVATE_KEY3]
    }
  },
  etherscan: {
    apiKey: "snowtrace",
  },
};

export default config;
