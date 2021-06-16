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

    Salute(fn){
        let { Name, LastName, Height } = this 
        console.log(`Hola me llamo ${Name} ${LastName} y ${User.IsTall()} porque mido ${Height} mts`)
        if(fn) {
            fn(Name, LastName)
        }
    }

    IsTall() {
        return User.Height >= TALL ? `soy alt@` : `no soy alt@`
    }
}

class Developer extends Person {
    constructor (Name, LastName, Height) {
        super(Name, LastName, Height)
    }

    Salute(fn) {
        let { Name, LastName } = this 
        console.log(`Hola me llamo ${Name} ${LastName} y soy desarrollador/a`)
        if(fn) {
            fn(Name, LastName, true)
        }
    }
}

let User = new Person(UserName, UserLastName, UserHeight)
let User2 = new Developer('Daniel', 'Calvo', '1.71')
let User3 = new Developer('Erika', 'Andrade', '1.64')

function answerSalute(Name, LastName, isDev) 
{
    console.log(`Buen día ${Name} ${LastName}`)
    if (isDev) {
        console.log(`Ah mirá, no sabía que eras desarrollador/a`)
    }
}

User.Salute()
User2.Salute(answerSalute)
User3.Salute(answerSalute)

// let IsTall = santiago.Height >= TALL ? `soy alt@` : `no soy alt@`

// Person.prototype.Salute = function () {
//     return console.log(`Hola me llamo ${this.Name} ${this.LastName} y ${IsTall} porque mido ${this.Height} mts`)
// }


// console.log(this.Person.Height)
// User.Salute()

