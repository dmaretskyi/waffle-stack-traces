pragma solidity ^0.5.0;

contract HelloContract {
  event LogHello(uint param);

  function method(uint param) external {
    emit LogHello(param);
  }
}
