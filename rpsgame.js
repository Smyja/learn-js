const getUserChoice=userInput=>{
  userInput=userInput.toLowerCase();
  if (userInput==="rock"||userInput==="paper"||userInput==="scissors"||userInput==="bomb"){
    return userInput;
  }else{
    console.log("not a valid choice");
    }
};



const getComputerChoice=()=>{
  randomNumber=Math.floor(Math.random()*3);
  switch (randomNumber){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}
console.log("The computer picked"+" "+getComputerChoice());

const determineWinner=(userChoice,computerChoice)=>{
  if (userChoice===computerChoice){
    return "The game was a tie";
  }
  if (userChoice==="rock"){
    if (computerChoice==="paper"){
      return "The computer won";
    }else{
      return "The User won";
    }
  }
  if (userChoice==="paper"){
    if (computerChoice==="scissors"||computerChoice==="rock"){
      return "The computer won";
    }else{
      return "The user won";
    }
  }
  if (userChoice==="scissors"){
    if (computerChoice==="paper"||computerChoice==="rock"){
      return "The User won"
    }else{
      return "the Computer"
    }
  }
  if (userChoice==="bomb"){
    return "The user won"
  } 
}

const playGame=()=>{
  const userChoice=getUserChoice("bomb");
  console.log(userChoice);
  const computerChoice=getComputerChoice();
  console.log(computerChoice);
  console.log(determineWinner(userChoice,computerChoice));

};
playGame()
