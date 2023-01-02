// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract NftMarketplace {
    struct Nft {
        address owner;
        string title;
        string description;
        string image;
        uint256 price;
        uint256 deadline;
    }

    mapping (uint256 => Nft) nfts;
    uint256 public numberOfNfts = 0;
    
    function createNft(address _owner, string memory _title, string memory _description, string memory _image, uint256 _price, uint256 _deadline) public returns (uint256) {
        Nft storage nft = nfts[numberOfNfts];
        require(nft.deadline < block.timestamp, 'The deadline should be a date in future!');

        nft.owner = _owner;
        nft.title = _title;
        nft.description = _description;
        nft.image = _image;
        nft.price = _price;
        nft.deadline = _deadline;

        numberOfNfts++;

        return numberOfNfts - 1;
    }

    function getNfts() public view returns (Nft[] memory) {
        Nft[] memory allNfts = new Nft[](numberOfNfts);

        for (uint i = 0; i < numberOfNfts; i++) {
            Nft storage item = nfts[i];
            allNfts[i] = item;
        }

        return allNfts;
    }
}