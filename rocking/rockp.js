const getUserChoice = userInput =>{
    userInput = userInput.toLowerCase();
    if(userInput === 'rock '|| userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
        return userInput;
    }else {
        console.log('error!');
    }
    if(userInput === 'bomb'){
        return 'you won';
    }
}
console.log(getUserChoice('paper'));
console.log(getUserChoice('sleep'));
 function getComputerChoice () {
 randomNumber = Math.floor(Math.random() * 3);
switch (randomNumber){
    case 0:
     return 'rock';
    case 1: 
     return 'paper';
     case 2:
     return 'scissors';
     default :
     return 'no game';
}
 }
 console.log(getComputerChoice());

function determineWinner(userChoice,computerChoice){
    if(userChoice === 'bomb'){
        return 'you won';
    }
if(userChoice === computerChoice){
    return 'game was a tie!';
}
if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
   return 'the computer won';
    }else{
        return 'you won';
    }
}
if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
   return 'the computer won';
    }else{
        return 'you won';
    }
}
if(userChoice === 'scissors'){
    if(computerChoice === 'rock' || computerChoice === 'paper'){
        return 'the computer won';
    }else {
        return 'you won';
    }
}
}
console.log(determineWinner('paper','scissors'));
console.log(determineWinner('paper','paper'));
console.log(determineWinner('scissors','rock'));

const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice ();
    console.log('You threw : ' + userChoice);
    console.log('The computer threw : ' + computerChoice);
};
playGame();
