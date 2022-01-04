// writing tests which calls the functions

const assert = require("assert");
//nodejs runtime built in library to check whether this some value equal to another value
const ganache = require("ganache-cli");
const Web3 = require("web3");
// Web3 is a constructor which provides a instance =s of its library so capital Web3
//one instance is for one network

const web3 = new Web3(ganache.provider()); //making a instance with a provider along with ganache ( a network we are connecting)

class Student {
  study() {
    return "Keep it up";
  }
  lazy() {
    return "Don't be lazy";
  }
}

let student1;
beforeEach(() => {
  student1 = new Student(); // prevent writing multiple same lines codes of car
});
// for checking more it's i am using describe function of testing here
describe("Car class", () => {
  it("study function returns compliment", () => {
    assert.equal(student1.study(), "Keep it up"); // if both are equal then our test will pass otherwise it will fail
  });

  it("lazy student", () => {
    const student1 = new Student();
    assert.equal(student1.lazy(), "Don't be lazy"); // if both are equal then our test will pass otherwise it will fail
  });
});
