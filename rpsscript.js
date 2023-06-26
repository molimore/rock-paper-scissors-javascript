function getPlayerChoice () {
    let sign = prompt("Enter Rock, Paper or Scissors");
}


// get player selection to play the game
let playerSelection = prompt("Enter Rock, Paper or Scissors");
// the prompt to lowercase
playerSelection = playerSelection.toLocaleLowerCase(); 
console.log(playerSelection);

let computerSelection = getComputerChoice();

if (playerSelection === "rock") {

    if (computerSelection === "rock" ) {
        console.log("Draw!");
    }
    if (computerSelection === "paper" ) {
        console.log("You loose!");
    }
    if (computerSelection === "scissors" ) {
        console.log("You win!");
    }
} else if (playerSelection === "paper") {

    if (computerSelection === "rock" ) {
        console.log("You win!");
    }
    if (computerSelection === "paper" ) {
        console.log("Draw!");
    }
    if (computerSelection === "scissors" ) {
        console.log("You loose!");
    }
}
    






function getComputerChoice () {
   let randomNumber = Math.floor(Math.random() * 10); // give random numbers 0-9

   let hand = ""; // variable declared for rock/paper/scissors

   // if for geeting the numbers to say random r/p/s
   if (randomNumber >= 0 && randomNumber < 4) {
    hand = "paper";
   } else if (randomNumber < 7) {
    hand = "rock";
   } else
    hand = "scissors";

    return hand;
};

//second function

console.log(getComputerChoice());


function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 10); // give random numbers 0-9
 
    let hand = ""; // variable declared for rock/paper/scissors
 
    // if for geeting the numbers to say random r/p/s
    if (randomNumber >= 0 && randomNumber < 4) {
     hand = "paper";
    } else if (randomNumber < 7) {
     hand = "rock";
    } else
     hand = "scissors";
 
     return hand;
 };
 
 
 
 console.log(getComputerChoice());