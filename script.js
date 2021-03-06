/* randomly returns rock, paper, or scissors*/
function computerPlay() 
{
   let choiceList = ["Rock", "Paper", "Scissors"];
   let randNum = Math.floor(Math.random() * 3);
   let randChoice = choiceList[randNum].toLowerCase();
   return randChoice;
}

let playerScore = 0;
let computerScore = 0;
let i = 0;


 /* takes two @param: player selection and default computer selection, 
 diplays the score and announces the winner at the end */
function playRound(playerSelection, computerSelection = computerPlay()) 
{
   
   for (i; i < 10; i++) 
   {  
      if (playerSelection.target.id == "rockButton" && computerSelection == "scissors") 
      {
         playerScore++;
         document.getElementById("scoreKeeper").innerText = `Score:
            Player-${playerScore} 
            Computer-${computerScore}`;
         
         if (playerScore % 5 == 0 ) {
            document.getElementById("winnerAnnouncement").innerText = "You WON! If she can create technology, she can also DESTROY IT";
            document.getElementById("scoreKeeper").setAttribute('style', 'bottom: 350px');
            document.getElementById("scoreKeeper").innerText = `Final Score: 
               Player-${playerScore} 
               Computer-${computerScore} `;
               i = 10;
         }
         return;
      }
      if (playerSelection.target.id == "scissorsButton" && computerSelection === "paper") 
      {
         playerScore++;
         document.getElementById("scoreKeeper").innerText = `Score: 
         Player-${playerScore} 
         Computer-${computerScore}`;
         
         if (playerScore % 5 == 0) {   
            document.getElementById("winnerAnnouncement").innerText = "You WON! If she can create technology, she can also DESTROY IT";
            document.getElementById("scoreKeeper").setAttribute('style', 'bottom: 350px');
            document.getElementById("scoreKeeper").innerText = `Final Score: 
               Player-${playerScore} 
               Computer-${computerScore}`;
            i = 10;
         }
         return;
      }
      if (playerSelection.target.id == "paperButton" && computerSelection === "rock") 
      {
         playerScore++;
         document.getElementById("scoreKeeper").innerText = `Score:  
            Player-${playerScore} 
            Computer-${computerScore}`;

         if (playerScore % 5 == 0) {
            document.getElementById("winnerAnnouncement").innerText = "You WON! If she can create technology, she can also DESTROY IT";
            document.getElementById("scoreKeeper").setAttribute('style', 'bottom: 350px');
            document.getElementById("scoreKeeper").innerText = `Final Score:
               Player-${playerScore} 
               Computer-${computerScore}`;
            i = 10;
         }
         return;
      }
      if (playerSelection.target.id == "scissorsButton" && computerSelection === "rock") 
      {
         computerScore++;
         document.getElementById("scoreKeeper").innerText = `Score: 
            Player-${playerScore} 
            Computer-${computerScore}`;

         if (computerScore % 5 == 0) {
            i = 10;
            document.getElementById("winnerAnnouncement").innerText = "Computer WINS! Try harder next time Human";
            document.getElementById("scoreKeeper").setAttribute('style', 'bottom: 350px');
            document.getElementById("scoreKeeper").innerText = `Final Score: 
               Player-${playerScore} 
               Computer-${computerScore}`;
         }
         return;
      }
      if (playerSelection.target.id == "paperButton" && computerSelection === "scissors") 
      {
            computerScore++;
            console.log("Scissors cuts right through paper! You didn't make the cut loser!!");
            document.getElementById("scoreKeeper").innerText = `Score:
               Player-${playerScore} 
               Computer-${computerScore}`;

            if (computerScore % 5 == 0) {
               i = 10;
               document.getElementById("winnerAnnouncement").innerText = "Computer WINS! Try harder next time Human";
               document.getElementById("scoreKeeper").setAttribute('style', 'bottom: 350px');
               document.getElementById("scoreKeeper").innerText = `Final Score: 
                  Player-${playerScore} 
                  Computer-${computerScore}`;
            }
            return;
      }
      if (playerSelection.target.id == "rockButton" && computerSelection === "paper") 
      {
            computerScore++;
            document.getElementById("scoreKeeper").innerText = `Score: 
               Player-${playerScore} 
               Computer-${computerScore}`;

            if (computerScore % 5 == 0) {
               i = 10;
               document.getElementById("winnerAnnouncement").innerText = "Computer WINS! Try harder next time Human";
               document.getElementById("scoreKeeper").setAttribute('style', 'bottom: 350px');
               document.getElementById("scoreKeeper").innerText = `Final Score: 
                  Player-${playerScore} 
                  Computer-${computerScore} `;
            }
            return;
      }
 
      // tie game, computer and player selected same option
      else 
      {
         document.getElementById("scoreKeeper").innerText = `Tie round! Score is the same: 
            Player-${playerScore} 
            Computer-${computerScore}`;
         i--;
         return;
      } 
   }
   
}


/* Game where first one to win 5 games wins the match */
function game() 
{

   let playerScore = 0;
   let computerScore = 0;
   for (let i = 0; (playerScore || computerScore) != 5; i++) {

      let playerSelection = prompt("Rock, Paper, or Scissors", "Choose");
      
      if (playRound(playerSelection) === true) {
         playerScore++;
         alert(`Good job you won this round!
                  Score: Player-${playerScore} Computer-${computerScore}`);
         console.log("Good job you won this round!");
      }
      else if (playRound(playerSelection) === false) {
         computerScore++;
         alert(`You lost this round, LOSER!!
                  Score: Player-${playerScore} Computer-${computerScore}`);
         console.log("You lost this round, LOSER!!");
      }
      else  {
         //i--;
         alert(`Issa tie. The round isn't over, go again. 
               The score is the same: Player-${playerScore} Computer-${computerScore}`);
         console.log("Issa tie");
      }
      
   }

   if (computerScore > playerScore) {
      alert(`You lost, better luck next time buckaroo. 
               Final Score: Computer-${computerScore} Player-${playerScore}`)
      console.log(`You lost, better luck next time buckaroo. 
                  Final Score: Computer-${computerScore} Player-${playerScore}`);
   }
   else if (playerScore > computerScore) {
      alert(`Winner winner, chimken Dinner! :D You won!! 
               Final Score: Player-${playerScore} Computer-${computerScore}`)
      console.log(`Winner winner, chimken Dinner! :D You won!! 
                  Final Score: Player-${playerScore} Computer-${computerScore}`);
   }
}    

 
 //-----------  /* inline CSS Styles */  -------------//
function inlineCSSstylesforReferenceForIamABeginner(notActuallyAFunction) {

 // const bodySelector = document.querySelector('body');
 
 // const buttonContainer = document.createElement('div');
 // buttonContainer.classList.add('button');
 // buttonContainer.setAttribute('id', 'buttonContainer');
 // bodySelector.appendChild(buttonContainer);

 // const buttonContainerSelector = document.querySelector('#buttonContainer');
 
 // const rockButton = document.createElement('p')
 // rockButton.setAttribute('style', 'color:purple; background:yellow; margin:0 auto; width:100px; height:100px');
 // rockButton.style.textAlign = 'center';
 // rockButton.style.display = 'inline-block';
 // rockButton.textContent = "Rock";
 // buttonContainerSelector.appendChild(rockButton);
 

 // const paperButton = document.createElement('p');
 // paperButton.classList.add('button');
 // paperButton.setAttribute('id', 'paper-button');
 // paperButton.setAttribute('style', 'color: purple; background: yellow');
 // paperButton.textContent = "Paper";
 // buttonContainerSelector.appendChild(paperButton);
 
 // const scissorsButton = document.createElement('p');
 // scissorsButton.classList.add('button');
 // scissorsButton.setAttribute('id', 'scissors-button');
 // scissorsButton.setAttribute('style', 'color: purple; background: yellow');
 // scissorsButton.textContent = "Scissors";
 // buttonContainerSelector.appendChild(scissorsButton); 
 }
 //----------                            ------------//


const selectionButtons = document.querySelectorAll('.selectionButton')
selectionButtons.forEach(selectionButton => selectionButton.addEventListener('click', playRound));


        