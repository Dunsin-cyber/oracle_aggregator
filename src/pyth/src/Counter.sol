// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@pythnetwork/pyth-sdk-solidity/IPyth.sol";
import "@pythnetwork/pyth-sdk-solidity/PythStructs.sol";
import "node_modules/@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";


contract Counter {
  IPyth pyth;
  AggregatorV3Interface internal ETHchainlinkPriceFeed;
  AggregatorV3Interface internal BTCchainlinkPriceFeed;

  /**
  * Network: Sepolia Eth (testnet)
  * Address: 0xDd24F84d36BF92C65F92307595335bdFab5Bbd21
  */
  constructor() {
    pyth = IPyth(0xDd24F84d36BF92C65F92307595335bdFab5Bbd21);
    ETHchainlinkPriceFeed = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);
    BTCchainlinkPriceFeed = AggregatorV3Interface(0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43);
  }

  function getLatestChainlinkETHPrice() public view returns (int256) {
        (
            ,
            int256 answer,
            ,
            ,
            
        ) = ETHchainlinkPriceFeed.latestRoundData();
        require(answer > 0, "Chainlink price is negative or zero");

        // Adjust Chainlink price to have 18 decimals in comparison to ptyh
        return answer * 10 ** 10;
    }

    function getLatestChainlinkBTCPrice() public view returns (int256) {
        (
            ,
            int256 answer,
            ,
            ,
            
        ) = BTCchainlinkPriceFeed.latestRoundData();
        require(answer > 0, "Chainlink price is negative or zero");

        // Adjust Chainlink price to have 18 decimals in comparison to ptyh
        return answer * 10 ** 10;
    }

  function getLatestETHPrice(
    bytes[] calldata priceUpdateData
  ) public payable returns (PythStructs.Price memory) {
    uint fee = pyth.getUpdateFee(priceUpdateData);
    pyth.updatePriceFeeds{ value: fee }(priceUpdateData);
    bytes32 priceID = 0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace;
    return pyth.getPrice(priceID);
  }

   function getLatestBNBPrice(
    bytes[] calldata priceUpdateData
  ) public payable returns (PythStructs.Price memory) {
    uint fee = pyth.getUpdateFee(priceUpdateData);
    pyth.updatePriceFeeds{ value: fee }(priceUpdateData);
    bytes32 priceID = 0x2f95862b045670cd22bee3114c39763a4a08beeb663b145d283c31d7d1101c4f;
    return pyth.getPrice(priceID);
  }

   function getLatestBTCPrice(
    bytes[] calldata priceUpdateData
  ) public payable returns (PythStructs.Price memory) {
    uint fee = pyth.getUpdateFee(priceUpdateData);
    pyth.updatePriceFeeds{ value: fee }(priceUpdateData);
    bytes32 priceID = 0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43;
    return pyth.getPrice(priceID);
  }


}


