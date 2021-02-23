pragma solidity^0.7.4;

contract Token {

  string public name= "FUN TOKEN";
  string public symbol = "FUN";
  uint public totalSupply;
   mapping(address=>uint) public deposits;
   address admin;

    modifier onlyAdmin() {
    require(admin == msg.sender);
    _;

}

event Transfer(
   address indexed _from,
   address indexed _to,
   uint _price
  
 );



 
 mapping(address=>uint) public balanceOf;


 constructor(uint _initialSupply) public {
    balanceOf[msg.sender]=_initialSupply;
     totalSupply =  _initialSupply;
     admin = msg.sender;
  
}



function deposit(address pays) public payable{

    uint amount = msg.value;
    deposits[pays] = deposits[pays] + amount;

}

function widthdraw(address payable pays,uint _price) public onlyAdmin {
    
    uint payment = deposits[pays]-=_price;
        pays.transfer(payment);
}

function transfer(address _to,uint _price) public returns(bool success){

    require(balanceOf[msg.sender] >= _price);
    balanceOf[msg.sender] -= _price;
    balanceOf[_to] += _price; 
emit 
    Transfer(msg.sender, _to,_price);
       return true;
  }

}
