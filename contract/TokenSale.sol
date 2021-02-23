pragma solidity ^0.7.4;
import './Token.sol';
import './Crowdsale.sol';

contract TokenSale is Crowdsale {
    constructor(
        uint256 rate,    // rate in TKNbits
        address payable wallet,
        IERC20 token
    )
        Crowdsale(rate, wallet, token)
        public
    {

    }
}







