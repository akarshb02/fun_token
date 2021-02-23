const token = artifacts.require('Token.sol');


const { expect, assert } = require("chai");
var chai = require("chai");
const BN = web3.utils.BN;
const chaiBN = require("chai-bn")(BN);
chai.use(chaiBN);

var chaiAsPromised = require("chai-as-promised");
const { describe } = require("yargs");
chai.use(chaiAsPromised);

contract('Token', async(accounts) => {


    it('has a correct name', async() => {
        let instance = await token.deployed();
        let tokenName = await instance.name();
        assert.equal(tokenName, "FUN TOKEN");
        console.log(tokenName);
    })


    it('all tokens should be in my account', async() => {
        let instance = await token.deployed();
        let tokenSupply = await instance.tokenSupply;
        expect(instance.balanceOf(accounts[0])).to.eventually.be.a.bignumber.equal(tokenSupply);
    })

    it('only admin should widthraw', async() => {
        let instance = await token.deployed();
        expect(instance.widthdraw(accounts[0], 1000000000000000));

    })
});
