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

let smallHeight = 1.65

let people = [santiago, gonzalo, erick, felipe, amparo, wendy, nicol, jannette]

const isSmall = ({Height}) => Height < smallHeight

let smallPeople = people.filter(isSmall)

console.table(smallPeople)