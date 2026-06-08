
function playGame() {
    
    let humanScore = 0
    let computerScore = 0
    let rondaActual = 1

    function getComputerChoice() {
        let choice;
        let num = Math.floor(Math.random() * 3);
        if (num == 0) {
            choice = "piedra"
        }
        else if (num == 1) {
            choice = "papel"
        }
        else {
            choice = "tijera"
        }
        return choice
    }


    function determinarGanador(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            return "empate";
        }

        if (
            (humanChoice === "piedra" && computerChoice === "tijera") ||
            (humanChoice === "papel" && computerChoice === "piedra") ||
            (humanChoice === "tijera" && computerChoice === "papel")
        ) {
            return "jugador";
        }
        
        return "computadora";

    }

    function jugarRonda() {
        if (humanScore === 3 || computerScore === 3) {
            return;
        }
        let entrada = prompt(`Ronda ${rondaActual}: Elige piedra papel o tijera`);

        let humanChoice = entrada
        let computerChoice = getComputerChoice();
        let resultado = determinarGanador(humanChoice, computerChoice)

        console.log(`Ronda ${rondaActual}`)
        console.log(`Tu elegiste ${humanChoice}`)
        console.log(`La computadora eligió ${computerChoice}`)

        if (resultado === "empate") {
            console.log("Empate")
        } else if (resultado === "jugador") {
            humanScore++;
            console.log("Ganaste esta ronda!")
        } else {
            computerScore++;
            console.log("La computadora ganó esta ronda")
        }

        console.log(`Marcador: Tú ${humanScore} - ${computerScore} Computadora\n`)
        rondaActual++

        if (humanScore === 3) {
            console.log("!!!FELICIDADES Has ganado la partida")
        } else if (computerScore === 3) {
            console.log("La computadora ganó la partida..")
        } else {
            jugarRonda()
        }
    }

    console.log("Comienza el juego")
    jugarRonda();

}

playGame();
