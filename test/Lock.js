const { ethers } = require("ethers");
const { expect } = require("chai");
const hre = require("hardhat");

const address = "0x3B79bda90db2AF622FB698baB594D7843E660f0e";
const ABI = require("../artifacts/contracts/Hurricane.sol/Hurricane.json");
const Contract_Address = "0xAa812B73F250952e7BDd8bA63F16C509b986326c";

describe("Hurricane Token Contract", function () {
  let instance;
  let balance_before;

  before(async function () {
    const [signer] = await hre.ethers.getSigners();
    instance = new hre.ethers.Contract(Contract_Address, ABI.abi, signer);
    balance_before = await instance.balanceOf(address);
  });

  it("should mint 1000 tokens to the provided address", async function () {
    const amount =1000;
    const mintAmount = ethers.parseUnits(amount.toString(),18);
    const tx = await instance.mintTokens(address, mintAmount);
    await tx.wait();

    const balance_after = await instance.balanceOf(address);
    const expected_balance = balance_before+mintAmount;

    expect(balance_after).to.equal(expected_balance);
  });
});
