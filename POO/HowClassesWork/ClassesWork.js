function Person(Name, LastName) {
    this.name = Name
    this.lastName = LastName
}

//Métodos en JavaScript
Person.prototype.Salute = function () {
    console.log(`Hola me llamo ${this.name} ${this.lastName}`)
}

let santi = new Person('Santiago', 'Bastidas')
santi.Salute() //Hola mundo, me llamo Santi

let erika = new Person('Erika', 'Luna')
let arturo = new Person('Arturo', 'Martínez')