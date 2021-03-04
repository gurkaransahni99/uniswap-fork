const Router = artifacts.require('UniswapV2Router02.sol');
const WETH = artifacts.require('WETH.sol');

// const json = require('../uniswapRouterBuild.json')
// const contract = require('@truffle/contract');
// const Web3 = require('web3');

// let bytecode = json.bytecode
// let abi = json.abi

// const UniswapV2Router = contract(json);
// const provider = new Web3.providers.HttpProvider("http://127.0.0.1:8545");
// UniswapV2Router.setProvider(provider);

// UniswapV2Router.setProvider(this.web3._provider);

module.exports = async function (deployer, _network, addresses) {
  let weth;
  const FACTORY_ADDRESS = '0x79063341A914c3308C63a3F6D187Fe54286d6CcB';

  if(_network === 'mainnet') {
    weth = await WETH.at('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');
  } else {
    await deployer.deploy(WETH);
    weth = await WETH.deployed();
  }
  await deployer.deploy(Router, FACTORY_ADDRESS, weth.address, {from: addresses[0]});

  // await deployer.deploy({data: bytecode, arguments: [FACTORY_ADDRESS, weth.address]}, {from: addresses[0]});
  // const contract = new web3.eth.Contract(abi);
  // const options = {data: "0x"+bytecode, arguments: [FACTORY_ADDRESS, weth.address]};
  // const transaction = await contract.deploy(options);
  // console.log(transaction)
  // console.log(transaction._parent.options.address)
  // contract.deploy({
  //   data: bytecode,
  //   arguments: [FACTORY_ADDRESS, weth.address] 
  // }).send({
  //     from: addresses[0],
  // }).then((instance) => {
  //     console.log("Contract mined at " + instance.options.address);
  // });
};
