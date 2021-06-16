let UserName = prompt("¿Cuál es tu nombre?")
let UserLastName = prompt("¿Cuál es tu apellido?")
let UserHeight = prompt("¿Cuál es tu altura?")
const TALL = 1.65

class Person {
    constructor (Name, LastName, Height) {
        this.Name = Name
        this.LastName = LastName
        this.Height = Height
    }

    Salute(){
        console.log(`Hola me llamo ${this.Name} ${this.LastName} y ${User.IsTall()} porque mido ${this.Height} mts`)
    }

    IsTall() {
        return User.Height >= TALL ? `soy alt@` : `no soy alt@`
    }
}

class Developer extends Person {
    constructor (Name, LastName, Height) {
        super(Name, LastName, Height)

    }

    Salute() {
        console.log(`Hola me llamo ${this.Name} ${this.LastName} y soy desarrollador/a`)
    }
}

let User = new Person(UserName, UserLastName, UserHeight)

// let IsTall = santiago.Height >= TALL ? `soy alt@` : `no soy alt@`

// Person.prototype.Salute = function () {
//     return console.log(`Hola me llamo ${this.Name} ${this.LastName} y ${IsTall} porque mido ${this.Height} mts`)
// }


// console.log(this.Person.Height)
// User.Salute()

