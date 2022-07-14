pragma solidity ^0.8.9;

contract CaptureTheEther {
    mapping(address => bytes32) public nicknameOf;

    function setNickname(bytes32 nickname) public {
        nicknameOf[msg.sender] = nickname;
    }
}

contract NicknameChallenge {
    CaptureTheEther cte = CaptureTheEther(msg.sender);
    address player;

    constructor(address _player) {
        player = _player;
    }

    function isComplete() public view returns (bool) {
        return cte.nicknameOf(player)[0] != 0;
    }
}
