require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks:{
    baseSepolia:{
      url: "https://base-sepolia.blockpi.network/v1/rpc/public",
      chainId: 84532,
      accounts: [process.env.PRIVATE_KEY]
    },
  }
};
