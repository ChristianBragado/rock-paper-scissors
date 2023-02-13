

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    let randomChoice = Math.floor(Math.random() * choices.length)
    return choices[randomChoice]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        alert("You Lose! paper beats rock!")
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            alert("You lose! scissors beats paper!")
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            alert("you lose! rock beats scissors!")
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            alert("You win! rock beats scissors!") 
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            alert("You win! paper beats rock!")
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            alert("You win! scissors beats paper!")
        } else if (playerSelection == computerSelection) {
            alert("Draw! you both chose the same thing!") 
        } else if (playerSelection === "") {
            alert( "Please choose either Rock, Paper or Scissors.")
        }
    }
    const button1 = document.getElementById('1')
    button1.addEventListener('click', function(e){
    return playRound('rock', getComputerChoice())
    });

    const button2 = document.getElementById('2')
    button2.addEventListener('click', function(e){
    return playRound('paper', getComputerChoice())
    })

    const button3 = document.getElementById('3')
    button3.addEventListener('click', function(e){
    return playRound('scissors', getComputerChoice())
})


// function game() {
//     const playerSelection = prompt("Please choose what you want to play: " + " ".toLowerCase())
//     const computerSelection = getComputerChoice()

//     for (let i = 0; i < 5; i++) {
//         return playRound(playerSelection, computerSelection)
//     }
// }
