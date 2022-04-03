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
const INITIAL_STRING = "Heyy Bro!!";

beforeEach(async () => {
  // Get a list of all accounts
  // we are dealing with ethereum
  accounts = await web3.eth.getAccounts();

  //Use one of those accounts to deploy our contract

  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: [INITIAL_STRING],
    })
    .send({ from: accounts[0], gas: "1000000" });
  //through send I am doing a transaction
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    assert.ok(inbox.options.address); //ok i seeing is inbox.options.address defined value
  });

  it("has an default message", async () => {
    // calling a method becoz i only want a data , if i need to change any data of a
    //  contrasct information then I would have made a transaction to a contract

    const message = await inbox.methods.message().call();
    // if i had any paramters then i would have used it like in message()
    // if it was a transcation then my call() would contain a object about who would pay and how uch gas we would have used

    assert.equal(message, INITIAL_STRING);
  });

  it("setting the message", async () => {
    // here we are modifying our contracts data
    await inbox.methods.setMessage("Welcome All!!").send({ from: accounts[0] });

    const message = await inbox.methods.message().call();
    assert.equal(message, "Welcome All!!");
  });
});
