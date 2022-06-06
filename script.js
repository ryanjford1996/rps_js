function checkGameOver(computerScore, userScore) {
    if (computerScore == 5 || userScore == 5) {
        const buttons = document.querySelectorAll('.buttons')
        buttons.forEach((button) => {
            button.style.display = 'none';
        })
        if (computerScore == 5) {
            result.textContent = 'You lose!';
            resultsContainer.appendChild(result)
            return
        }
        else {
            result.textContent = 'You win!';
            resultsContainer.appendChild(result)
            return
        }
    } else {
        return
    }
}

function gameNumber() {
    const num_of_games = parseInt(window.prompt('How many games would you like to play? '));
    return gameMaster(num_of_games)
}

function computerChoice() {
    const arr = ['scissors', 'rock', 'paper']
    let random_num = Math.random()
    let random_choice = arr[Math.floor(random_num * 3)]
    return random_choice
}

function game(user_choice) {

    const wins_against = {'rock': 'paper', 'scissors': 'rock', 'paper': 'scissors'}

    comp_choice = computerChoice()
    if (wins_against[comp_choice] == user_choice) {
        result.textContent = 'You win, your ' + user_choice + ' beats ' + comp_choice + '!';
        resultsContainer.appendChild(result)
        return 1
    }
    else if (comp_choice === user_choice) {
        result.textContent = 'A draw! You both chose ' + user_choice + '!';
        resultsContainer.appendChild(result)
        return 0
    }
    else {
        result.textContent = 'You lose, your ' + user_choice + ' is beaten by ' + comp_choice + '!';
        resultsContainer.appendChild(result)
        return -1
    }
}

const resultsContainer = document.querySelector('.resultsContainer')
const result = document.createElement('h1')
const currentScore = document.querySelector('.currentScore')

let computerScore = 0
let userScore = 0

document.querySelector('.rockBtn').addEventListener('click', () => {
    x = game('rock')
    if (x == 1) {
        userScore += 1
    }
    else if (x == -1) {
        computerScore += 1
    }
    currentScore.innerHTML = "<h3 class='currentScore'>Computer: " + computerScore + "<br>You: " + userScore + "</h3>";
    checkGameOver(computerScore, userScore)
})

document.querySelector('.paperBtn').addEventListener('click', () => {
    x = game('rock')
    if (x == 1) {
        userScore += 1
    }
    else if (x == -1) {
        computerScore += 1
    }
    currentScore.innerHTML = "<h3 class='currentScore'>Computer: " + computerScore + "<br>You: " + userScore + "</h3>";
    checkGameOver(computerScore, userScore)
})

document.querySelector('.scissorsBtn').addEventListener('click', () => {
    x = game('rock')
    if (x == 1) {
        userScore += 1
    }
    else if (x == -1) {
        computerScore += 1
    }
    currentScore.innerHTML = "<h3 class='currentScore'>Computer: " + computerScore + "<br>You: " + userScore + "</h3>";
    checkGameOver(computerScore, userScore)
})

