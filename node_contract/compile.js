const path = require("path");
const fs = require("fs");

const inBoxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(inBoxPath, "utf8");

// writing compil statment using solidity compiler

console.log(solc.compile(source, 1)); // 1 is the number of contracts
