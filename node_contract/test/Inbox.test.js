// writing tests which calls the functions
//assert is a nodejs runtime built in library to check whether this some value equal to another value
// Web3 is a constructor which provides a instance =s of its library so capital Web3
//one instance is for one network

const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider()); //making a instance with a provider along with ganache ( a network we are connecting)
const { interface, bytecode } = require("../compile");
let accounts;
let inbox;
beforeEach(async () => {
  // Get a list of all accounts
  // we are dealing with ethereum
  accounts = await web3.eth.getAccounts();

  //Use one of those accounts to deploy our contract

  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Heyy !!"] })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    console.log(inbox);
  });
});
