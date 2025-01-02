// the scores:
let human_score = document.querySelector(".violet")
let computer_score = document.querySelector(".orange")

// the display pictures
let human_choice = document.querySelector(".human.container > img")
let computer_choice = document.querySelector(".computer.container > img")

// the buttons
let rock_button = document.querySelector(".rock.button")
let paper_button = document.querySelector(".paper.button")
let scissors_button = document.querySelector(".scissors.button")

// the image locations
let rock_image = "./images/rock.jpg"
let paper_image = "./images/paper.jpg"
let scissors_image = "./images/scissors.jpg"
let arrayofimages = [rock_image, paper_image, scissors_image]

// 0: rock; 1: paper; 2: scissors

// function to convert the code into text
function convertor(code) {
    switch (code) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissors"
    }
}

// function to get the computer choice
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

// function logic of one round
function playRound(human, computer) {

    human_choice.src = arrayofimages[human]
    computer_choice.src = arrayofimages[computer]

    let winner_message = `You win! ${convertor(human)} beats ${convertor(computer)}`;
    let loser_message = `You lose! ${convertor(human)} loses to ${convertor(computer)}`;
    let draw_message = `It's a tie! Human and Computer both play ${convertor(human)}`
    let diff = human - computer;

    if (human == computer)
        alert(draw_message)
    else if (diff == 1 || diff == -2) {
        human_score.textContent = `${Number(human_score.textContent) + 1}`
        alert(winner_message)
    }
    else {
        computer_score.textContent = `${Number(computer_score.textContent) + 1}`
        alert(loser_message)
    }


}

function isGameOver() {
    if (human_score.textContent == '5') {
        alert("Congratulations you have won!")
        location.reload(true)
    }
    else if (human_score.textContent == '5') {
        alert("Uh-oh you have lost unfortunately!")
        location.reload(true)
    }
}
rock_button.addEventListener("click", () => { playRound(0, getComputerChoice()); isGameOver()})
paper_button.addEventListener("click", () => { playRound(1, getComputerChoice()); isGameOver()})
scissors_button.addEventListener("click", () => { playRound(2, getComputerChoice()); isGameOver() })


// playing the actual game
// while (true) {
//     rock_button.addEventListener("click", playRound(0, getComputerChoice))
//     paper_button.addEventListener("click", playRound(1, getComputerChoice))
//     scissors_button.addEventListener("click", playRound(2, getComputerChoice))
//     if (human_score.textContent == '5') {
//         alert("Congratulations. You have won !")
//         break
//     }
//     else if (computer_score.textContent == '5') {
//         alert("Rip the computer has won, well at least you tried!")
//         break
//     }
// }
