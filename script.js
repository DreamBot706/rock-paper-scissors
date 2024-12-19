let humanscore = 0;
let computerscore = 0;


function getComputerChoice(){
    return Math.floor( Math.random() * 3);
}

function getHumanChoice(){
    let choice =  prompt("What do you wish to play (Rock / Paper / Scissors)");
    switch (choice.toLowerCase()){
        case ("rock"):
            return 0;
        case ("paper"):
            return 1;
        case ("scissors"):
            return 2;
    }
}

function convertor(code){
    switch (code){
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissors"
    }
}

function playRound( human, computer ){
    let winner_message = `You win! ${convertor(human)} beats ${convertor(computer)}`;
    let loser_message = `You lose! ${convertor(human)} loses to ${convertor(computer)}`;
    let draw_message = `It's a tie! Human and Computer both play ${convertor(human)}`
    let diff = human - computer;

    if (human == computer)
        return draw_message;
    else if ( diff == 1 || diff == -2){
        ++humanscore;
        return winner_message;}
    else {
        ++computerscore;
        return loser_message}
}


function playGame() {
    for (let i = 1; i != 6; ++i){
        console.log(`Round ${i}! \n\n${playRound(getHumanChoice(), getComputerChoice())}\n\nThe Scores currently are: \nHuman: ${humanscore}\nComputer: ${computerscore}\n`)
    }
}

playGame();




