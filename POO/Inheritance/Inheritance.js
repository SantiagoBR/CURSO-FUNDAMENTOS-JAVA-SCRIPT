const TALL = 1.65

function inheritOf(sonPrototype, fatherPrototype) {
    let fn = function () {} //Function not works for anything
    fn.prototype = fatherPrototype.prototype
    sonPrototype.prototype = new fn
    sonPrototype.prototype.constructor = sonPrototype
}

let UserName = prompt("¿Cuál es tu nombre?")
let UserLastName = prompt("¿Cuál es tu apellido?")
let UserHeight = prompt("¿Cuál es tu altura?")
function Person(Name, LastName, Height) {
    this.Name = Name
    this.LastName = LastName
    this.Height = Height
}

let User = new Person(UserName, UserLastName, UserHeight)

let IsTall = User.Height >= TALL ? `soy alt@` : `no soy alt@`

Person.prototype.Salute = function () {
    return console.log(`Hola me llamo ${this.Name} ${this.LastName} y ${IsTall} porque mido ${this.Height} mts`)
}

function Developer(Name, LastName) {
    this.Name = Name
    this.LastName = LastName
}

inheritOf(Developer, Person) 

Developer.prototype.Salute = function () {
    console.log(`Hola me llamo ${this.Name} ${this.LastName} y soy desarrollador/a`)
}


// console.log(this.Person.Height)
// User.Salute()

