const { default: getWeb3 } = require("../client/src/getWeb3");

var token = artifacts.require("./Token.sol");
var tokenSale = artifacts.require('./TokenSale.sol')

module.exports = async function(deployer) {
    let addr = await web3.eth.getAccounts();
    await deployer.deploy(token, 1000);
    //token price 0.001 ether
    await deployer.deploy(tokenSale, 1000000000000000, addr[0], token.address);
    let instance = await token.deployed();
    await instance.transfer(tokenSale.address, 1000);
};
