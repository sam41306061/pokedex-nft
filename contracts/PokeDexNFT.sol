// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @custom:security-contact schoenbergwebtools.com
contract PokeDexNFT is ERC721, Ownable {
    
    struct PokeDexNFT {
        string name;
        string image;
        uint rarity;
    }
    uint256 private _nextTokenId;

    constructor(address initialOwner)
        ERC721("PokeDexNFT", "PDK")
        Ownable(initialOwner)
    {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://localhost";
    }

    function safeMint(address to) public onlyOwner {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
    }
}
