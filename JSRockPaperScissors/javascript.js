
let wins = 0
let losses = 0
let roundsPlayed = 0
const rounds = document.querySelector("#round")
const scoreText = document.querySelector("#score")
const titleText = document.querySelector("#status")
const btnsContainer = document.querySelector(".buttons")
const content = document.querySelector(".container")
const retryBtn = document.querySelector("#retry")
retryBtn.remove()

const btns = document.querySelectorAll("button")
btns.forEach(element => {
element.addEventListener('click', Game)
})

retryBtn.addEventListener('click', Restart)

function getComputerChoice()
{
    let randInt = Math.floor(Math.random() * 3)
    switch(randInt)
    {
        case 0: return "rock";
        case 1: return "scissors";
        case 2: return "paper";
    }
}

function playRound (playerSelection, computerSelection)
{
    
    if(playerSelection == computerSelection)
    return "It's a tie!"
    switch(playerSelection)
    {
        case "rock":
            return (computerSelection == "scissors" ? "You Win!" : "You Lose!")
        case "scissors":
            return (computerSelection == "paper" ? "You Win!" : "You Lose!")
        case "paper":
            return (computerSelection == "rock" ? "You Win!" : "You Lose!")
    }
}

function isInputValid(str)
{
    str = str.toLowerCase() 
    switch(str)
    {
        case "rock": 
        case "scissors":
        case "paper":
            return true
        default:
            return false
    }
}
function Game(evt)
{
    if(wins < 3 && losses < 3)
    {
        let input = evt.target.textContent
        let result = playRound(input, getComputerChoice())
        if(result == "You Win!")
            wins++;
        else if(result == "You Lose!")
            losses++;

        if(wins > 2 || losses > 2)
            DisplayFinalScore()
        else
        {
            roundsPlayed++;
            UpdateContent(result)
        }
    }
    else
        DisplayFinalScore

    function DisplayFinalScore()
    {
        let finalString = ""
        if(wins > losses)
            finalString = "You have won the game!"
        else 
            finalString = "You have lost the game!"
        roundsPlayed++;
        UpdateContent(finalString)
        btnsContainer.remove()
        content.appendChild(retryBtn)
    }
}
function UpdateContent(res)
{
    rounds.textContent = roundsPlayed
    //Updates text to result
    titleText.textContent = res

    //Updates score
    scoreText.textContent = wins + ":" + losses
}

function Restart()
{
    retryBtn.remove()
    content.appendChild(btnsContainer)
    wins = 0
    losses = 0
    roundsPlayed = 0
    UpdateContent("Choose your weapon!")
}