// writing tests which calls the functions
//assert is a nodejs runtime built in library to check whether this some value equal to another value
// Web3 is a constructor which provides a instance =s of its library so capital Web3
//one instance is for one network

const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider()); //making a instance with a provider along with ganache ( a network we are connecting)
