let santiago =
{
    Name: 'Santiago',
    LastName: 'Bastidas',
    Height: 1.72,
    BooksAmount: 111
}

let gonzalo =
{
    Name: 'Gonzalo',
    LastName: 'Bastidas',
    Height: 1.70,
    BooksAmount: 78
}

let erick =
{
    Name: 'Erick',
    LastName: 'Burbano',
    Height: 1.71,
    BooksAmount: 132
}

let felipe =
{
    Name: 'Felipe',
    LastName: 'Perez',
    Height: 1.72,
    BooksAmount: 90
}

let amparo =
{
    Name: 'Amparo',
    LastName: 'Rodriguez',
    Height: 1.55,
    BooksAmount: 91
}

let wendy =
{
    Name: 'Wendy',
    LastName: 'Salamanca',
    Height: 1.65,
    BooksAmount: 182
}

let nicol =
{
    Name: 'Nicol',
    LastName: 'Perez',
    Height: 1.62,
    BooksAmount: 68
}

let jannette =
{
    Name: 'Jannette',
    LastName: 'Martinez',
    Height: 1.56,
    BooksAmount: 101
}

let people = [santiago, gonzalo, erick, felipe, amparo, wendy, nicol, jannette]

// 1st way to break down an object in a function with return 
const changeHeightToCmts = person => {    
    return {
        ...person,
        Height: person.Height * 100
    }
}

// 2nd way to break down an object in a function without return 
const changeHeightToCmts2 = person => ({
    ...person,
    Height: person.Height * 100
})

let personCmts = people.map(changeHeightToCmts)

const isTall = ({Height}) => Height >= 1.65
let tallPeople = people.filter(isTall)

// let accum = 0

// for (let i = 0;i < people.length;i++) {
//     accum += people[i].BooksAmount
// }

const reducer = (accum, {BooksAmount}) =>  accum + BooksAmount

let totalBooks = people.reduce(reducer, 0)

console.log(`En total todos tienen ${totalBooks} libros.`)
