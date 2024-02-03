const hre = require("hardhat");

async function main() {
 
 const Contract = await hre.ethers.deployContract("Hurricane");
 await Contract.waitForDeployment();
 console.log("Contracts deployed successfully",Contract.target);

  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// contract deployed at: 0xAa812B73F250952e7BDd8bA63F16C509b986326c
// .env file is empty, because it should contain private key, so use your own key
// Author: Gaurav Kumar Singh
