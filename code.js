let yourScore = 0;
let computerScore = 0;

function computerPlay(){
    let cInt = Math.floor(Math.random()*3);
    let computerSelection;

    switch (cInt){
        case 0:
            computerSelection = "rock";
            break;
        case 1:
            computerSelection = "paper";
            break;
        case 2:
            computerSelection = "scissors"
            break;
    }

    return computerSelection; //"rock"

}

function iPlay(){
    let playerSelection = prompt("pick a hand");
    playerSelection.toLowerCase;
    return playerSelection; //paper
}

function playRound(computerPlay, iPlay){


    let p = iPlay(); //playerSelection 
    let c = computerPlay(); // computerSelection

    //rock = 0, paper = 1, scissors = 2
    console.log("player hand is " + p);
    console.log("computer hand is " + c);

    if (p == c){ // if same
        return "its a draw";
    }
    
    if (p == "rock"){ //you're rock
        if (c == "paper"){ // they're paper
            computerScore++;
            return "You lose! Paper beats rock";
        } else { //they're scissors
            yourScore++;
            return "You win! Rock beats scissors";
        }
    }

    if (p == "paper"){ //you're paper
        if (c == "rock"){ //they're rock
            yourScore++;
            return "You win! Paper beats rock";
        } else{ //they're scssors
            computerScore++;
            return "You lose! Scissors beats paper";
        }
    }

    if (p == "scissors"){ //you're scissors
        if (c == "rock"){// they're rock
            computerScore++;
            return "You lose! Rock beats scissors";
        } else{ //they're paper
            yourScore++;
            return "You win! Scissors beats paper";
        }
    }
}

function game(){

    let i = 1;

    do{
        console.log("Round #: " + i);
        console.log(playRound(computerPlay, iPlay));
        console.log("Your score: " + yourScore + " || Computer score: " + computerScore);
        i++;
    } while (i <=5);

if(computerScore > yourScore){
    console.log("you lost G");
} else{
    console.log("the victory is yours");
}
}

game();