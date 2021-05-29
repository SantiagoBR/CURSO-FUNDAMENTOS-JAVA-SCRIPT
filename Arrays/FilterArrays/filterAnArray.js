let santiago = {
    Name: 'Santiago',
    LastName: 'Bastidas',
    Height: 1.72
}

let gonzalo = {
    Name: 'Gonzalo',
    LastName: 'Bastidas',
    Height: 1.70
}

let erick = {
    Name: 'Erick',
    LastName: 'Burbano',
    Height: 1.71
}

let felipe = {
    Name: 'Felipe',
    LastName: 'Perez',
    Height: 1.72
}

let amparo = {
    Name: 'Amparo',
    LastName: 'Rodriguez',
    Height: 1.55
}

let wendy = {
    Name: 'Wendy',
    LastName: 'Salamanca',
    Height: 1.65
}

let nicol = {
    Name: 'Nicol',
    LastName: 'Perez',
    Height: 1.62
}

let jannette = {
    Name: 'Jannette',
    LastName: 'Martinez',
    Height: 1.56
}

/*Different ways to do this function*/

// 1.
// const isTall = person => person.Height >= 1.65

// 2. with deconstruct object
const isTall = ({Height}) => Height >= 1.65

var people = [santiago, gonzalo, erick, felipe, amparo, wendy, nicol, jannette]

//Array and Condition to filter an Array

let tallPeople = people.filter(isTall)

// Filters can do with anonymous functions like this.
// let tallPeople = people.filter(function (person) {
//     return person.Height >= 1.65
// })

console.log(tallPeople)