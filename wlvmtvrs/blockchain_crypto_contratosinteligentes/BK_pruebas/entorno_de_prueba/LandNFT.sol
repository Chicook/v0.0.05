// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract LandNFT {
    string public name = "Minimal Land NFT";
    string public symbol = "MLN";
    uint256 public nextTokenId = 1;

    constructor() {
        // Un constructor mínimo para que compile
    }

    function mint() public returns (uint256) {
        uint256 newId = nextTokenId;
        nextTokenId++;
        return newId;
    }
}