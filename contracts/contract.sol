pragma solidity ^0.4.17;

contract Inboxs {
    string public message;
    
    constructor(string initialMessage) public {
        message = initialMessage;
    }

    // function Inbox(string initialMessage) public {
    //     message = initialMessage;
    // }

    function setMessage(string newMessage) public {
        message = newMessage;
    }

    function getMessage() public view returns (string) {
        return message;
    }
}
