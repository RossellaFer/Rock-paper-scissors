
var startelem = document.getElementById("startbutton");
var choice = document.querySelectorAll(".userSelection");
var computerScoreDisplay = document.querySelector("#computerScore");
var playerScoreDisplay = document.querySelector("#playerScore");
var computerScore = 0;
var playerScore = 0;
var ComputerChoice = computerChooses();

startelem.addEventListener("click", function(){
    reset();
})

function reset() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    document.querySelector("#result").innerHTML = "";
    document.querySelector('#result').classList.remove("finalResult");
    for (var i = 0; i < choice.length; i++) {
        choice[i].classList.remove("clicked");
    }
};

//getting the computer choice
function computerChooses() {
computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} 
else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} 
else {
    computerChoice = "scissors";
}
return computerChoice;
}


//The different outcomes of the game according to the user choice
for (var i = 0; i < choice.length; i++) {
    choice[i].addEventListener("click", function() {
        choice[0].classList.remove("clicked");
        choice[1].classList.remove("clicked");
        choice[2].classList.remove("clicked");
        this.classList.toggle("clicked");
        console.log(this);
        var userChoice = this.alt;

        //log the choices of the user and choices of computer

        //compare the user choice with the computer choice

            if (userChoice === "rock") {
            if (computerChoice === "scissors") {
                document.querySelector('#result').innerHTML = "The computer wins";
                document.querySelector('#result').classList.add("finalResult");
                computerScore++;
                computerScoreDisplay.textContent = computerScore;
                computerChooses();
            }
            else if (computerChoice === "paper") {
                document.getElementById('result').innerHTML = "You win";
                document.querySelector('#result').classList.add("finalResult");
                playerScore++;
                playerScoreDisplay.textContent = playerScore;
                computerChooses();
            }
            else {
                document.getElementById('result').innerHTML ="Tie, you both chose rock";
                document.querySelector('#result').classList.add("finalResult");
                computerChooses();
            }
        }     
        else if (userChoice === "paper") {
            if (computerChoice === "rock") {
                document.querySelector('#result').innerHTML = "You win";
                document.querySelector('#result').classList.add("finalResult");
                playerScore++;
                playerScoreDisplay.textContent = playerScore;
                computerChooses();
            }
            else if (computerChoice === "scissors") {
                document.querySelector('#result').innerHTML = "The computer wins";
                document.querySelector('#result').classList.add("finalResult");
                computerScore++;
                computerScoreDisplay.textContent = computerScore;
                computerChooses();
            }
            else {
                document.querySelector('#result').innerHTML = "Tie, you both chose paper";
                document.querySelector('#result').classList.add("finalResult");
                computerChooses();
            }
        }
        else if (userChoice === "scissors") {
            if (computerChoice === "paper") {
                document.querySelector('#result').innerHTML = "You win";
                document.querySelector('#result').classList.add("finalResult");
                playerScore++;
                playerScoreDisplay.textContent = playerScore;
                computerChooses();
            }
            else if (computerChoice === "rock") {
                document.querySelector('#result').innerHTML = "The computer wins";
                document.querySelector('#result').classList.add("finalResult");
                computerScore++;
                computerScoreDisplay.textContent = computerScore;
                computerChooses();
            }
            else {
                document.querySelector('#result').innerHTML = "Tie, you both chose scissors";
                document.querySelector('#result').classList.add("finalResult");
                computerChooses();
            }
        }

    })
}

