function getComputerChoice() {
    let choice;
    let num = Math.floor(Math.random() * 3);
    if (num == 0) {
        choice = "ROCK"
    }
    else if (num == 1) {
        choice = "PAPER"
    }
    else {
        choice = "SCISSORS"
    }
    return choice
}

let eleccionHumana = "";
let ronda = 0
let humanScore = 0
let computerScore = 0
const rondasTotales = 5

function reiniciarJuego() {
    ronda = 1;
    humanScore = 0;
    computerScore = 0;
}

function ganador(){
    if (humanScore > computerScore) {
        alert("WINNER!")
    } else if (computerScore > humanScore) {
        alert("LOSER...")
    } else if (humanScore == computerScore) {
        alert("DRAW!")
    }
}

function winner() {
    if(humanScore > computerScore) {
        alert("YOU WIN! :D")
    } else if (humanScore < computerScore) {
        alert("YOU LOST... :,(")
    } else {
        alert("DRAW!!")
    }
}



function playRound(eleccion) {


    if (ronda == rondasTotales) {
        winner()
        alert("Game Over!")
        ronda = 0
        contador.textContent = ronda
        humanScore = 0
        humano.textContent = humanScore
        computerScore = 0
        ordenador.textContent = computerScore
        resultado.textContent = ""
        return;
    }

    

    let eleccion2 = getComputerChoice()

    if (eleccion === eleccion2) {
        const nuevoTexto = `Human says: ${eleccion} Computer says: ${eleccion2}. DRAW!`
        resultado.innerHTML += nuevoTexto + "<br>"
        ronda++
        contador.textContent = ronda

        } else if (
            (eleccion === "ROCK" && eleccion2 === "SCISSORS") ||
            (eleccion === "PAPER" && eleccion2 === "ROCK") ||
            (eleccion === "SCISSORS" && eleccion2 === "PAPER")
        ) {
            const nuevoTexto = `Human says: ${eleccion} Computer says: ${eleccion2}. You win! :)`
            resultado.innerHTML += nuevoTexto + "<br>"
            ronda++
            contador.textContent = ronda
            humanScore++;
            humano.textContent = humanScore;
        } else {
            const nuevoTexto = `Human says: ${eleccion} Computer says: ${eleccion2}. You lost... :(`
            resultado.innerHTML += nuevoTexto + "<br>"
            ronda++
            contador.textContent = ronda
            computerScore++;
            ordenador.textContent = computerScore;
        }
        
}

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

const resultado = document.querySelector('#resultado')
const contador = document.querySelector('#ronda')

const humano = document.querySelector('#humano')
const ordenador = document.querySelector('#ordenador')



rockButton.addEventListener("click", function() {
    playRound("ROCK")
    eleccionHumana = rockButton.value;
});

paperButton.addEventListener("click", function() {
    playRound("PAPER")
    eleccionHumana = paperButton.value;
});

scissorsButton.addEventListener("click", function() {
    playRound("SCISSORS")
    eleccionHumana = scissorsButton.value;
});