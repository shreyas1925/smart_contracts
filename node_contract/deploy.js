const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "involve parade furnace allow gloom insect phone analyst correct gentle awesome odor",
  "https://rinkeby.infura.io/v3/30283e336d434130aafb8c9479e59768"
);

const web3 = new Web3(provider);
