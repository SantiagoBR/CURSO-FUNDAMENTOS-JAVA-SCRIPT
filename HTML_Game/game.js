const lightBlue = document.getElementById('lightBlue')
const violet = document.getElementById('violet')
const orange = document.getElementById('orange')
const green = document.getElementById('green')
const startBtn = document.getElementById('startBtn')
const LAST_LEVEL = 2

class Game {
    constructor() {
        this.initialize = this.initialize.bind(this)
        this.initialize()
        this.generateSequence()
        setTimeout(this.nextLevel,500)
    }

    initialize() {
        this.chooseColor = this.chooseColor.bind(this)
        this.nextLevel = this.nextLevel.bind(this)
        this.toggleBtnStart()
        this.level = 1
        this.colors = {
            lightBlue,
            violet,
            orange,
            green
        }
    }

    toggleBtnStart() {
        if(startBtn.classList.contains('hide')) {
            startBtn.classList.remove('hide')
        } else {
            startBtn.classList.add('hide')
        }
    }

    generateSequence() {
        //Fill = rellena los espacios del arreglo, para poder mapear el arreglo. El método .map() no va a funcionar si los campos del array no tienen valor
        this.sequence = new Array(LAST_LEVEL).fill(0).map(n => Math.floor(Math.random() * 4))
    }

    nextLevel() {
        this.sublevel = 0
        this.illuminateSequence()
        this.addClickEvents()
    }

    convertNumberToColor(number) {
        switch (number) {
            case 0:
                return 'lightBlue'
            case 1:
                return 'violet'
            case 2:
                return 'orange'
            case 3:
                return 'green'
        }
    }

    convertColorToNumber(color) {
        switch (color) {
            case 'lightBlue':
                return 0
            case 'violet':
                return 1
            case 'orange':
                return 2
            case 'green':
                return 3
        }
    }

    illuminateSequence() {
        for (let i = 0; i < this.level; i++) {
            const color = this.convertNumberToColor(this.sequence[i])
            setTimeout(() => this.illuminateColor(color), 1000 * i)
        }
    }

    illuminateColor(color) {
        this.colors[color].classList.add('light')
        setTimeout(() => this.turnOffColor(color), 350)
    }

    turnOffColor(color) {
        this.colors[color].classList.remove('light')
    }

    addClickEvents() {
        this.colors.lightBlue.addEventListener('click', this.chooseColor)
        this.colors.green.addEventListener('click', this.chooseColor)
        this.colors.violet.addEventListener('click', this.chooseColor)
        this.colors.orange.addEventListener('click', this.chooseColor)
    }

    deleteClickEvents() {
        this.colors.lightBlue.removeEventListener('click', this.chooseColor)
        this.colors.green.removeEventListener('click', this.chooseColor)
        this.colors.violet.removeEventListener('click', this.chooseColor)
        this.colors.orange.removeEventListener('click', this.chooseColor)
    }


    chooseColor(ev) {
        const NAME_COLOR = ev.target.dataset.color
        const NUMBER_COLOR = this.convertColorToNumber(NAME_COLOR)
        this.illuminateColor(NAME_COLOR)

        if (NUMBER_COLOR === this.sequence[this.sublevel]) {
            this.sublevel++
            if (this.sublevel === this.level) {
                this.level++

                this.deleteClickEvents()

                if (this.level === (LAST_LEVEL + 1)) {
                    this.winGame()
                } else {
                    setTimeout(this.nextLevel, 1500)
                }
            }
        } else {
            this.loseGame()
        }
    }

    winGame(){
        swal('Platzi', 'Felicitaciones, ganaste el juego!', 'success')
            .then(this.initialize)
    }
    
    loseGame() {
        swal('Platzi', 'Lo lamentamos, perdiste :(', 'error')
            .then(() => {
                this.deleteClickEvents()
                this.initialize()
            })
    }
}


function startGame() {
    window.game = new Game()
}