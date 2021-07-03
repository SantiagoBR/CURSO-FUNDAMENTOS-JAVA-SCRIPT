const lightBlue = document.getElementById('lightBlue')
const violet = document.getElementById('violet')
const orange = document.getElementById('orange')
const green = document.getElementById('green')
const startBtn = document.getElementById('startBtn')

class Game {
    constructor() {
        this.initialize()
        this.generateSequence()
    }

    initialize() {
        startBtn.classList.add('hide')
        this.level = 1
        this.colors = {
            lightBlue,
            violet,
            orange,
            green
        }
    }

    generateSequence() {
        //Fill = rellena los espacios del arreglo, para poder mapear el arreglo. El método .map() no va a funcionar si los campos del array no tienen valor
        this.sequence = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
    }
}

function startGame() {
    window.game = new Game()
}

