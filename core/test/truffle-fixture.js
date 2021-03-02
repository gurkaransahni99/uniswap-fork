const Factory = artifacts.require('UniswapV2Factory.sol');
const Token1 = artifacts.require('Token1.sol');
const Token2 = artifacts.require('Token2.sol');

module.exports = async function (deployer) {
    let accounts = await web3.eth.getAccounts()
    // const m = await Migrations.new()
    // Migrations.setAsDeployed(m)
    let bcD = await Factory.new(accounts[0])
    Factory.setAsDeployed(bcD)
}