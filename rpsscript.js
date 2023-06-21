function getComputerChoice () {
   let randomNumber = Math.floor(Math.random() * 10); // give random numbers 0-9

   let hand = ""; // variable declared for rock/paper/scissors

   // if for geeting the numbers to say random r/p/s
   if (randomNumber >= 0 && randomNumber < 4) {
    hand = "Paper";
   } else if (randomNumber < 7) {
    hand = "Rock";
   } else
    hand = "Scissors";

   console.log(randomNumber);

   console.log(hand);
};


console.log(getComputerChoice());