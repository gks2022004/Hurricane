// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Hurricane is ERC20, Ownable {
    constructor() ERC20("Startup", "STAR") Ownable(msg.sender) {}

    function mintTokens(address receiver, uint256 amount) public onlyOwner {
        _mint(receiver, amount);
    }
}


