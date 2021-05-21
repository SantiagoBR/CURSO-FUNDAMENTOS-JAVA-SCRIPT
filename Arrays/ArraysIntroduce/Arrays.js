let santiago =
{
    Name: 'Santiago',
    LastName: 'Bastidas',
    Height: 1.72
}

let gonzalo =
{
    Name: 'Gonzalo',
    LastName: 'Bastidas',
    Height: 1.70
}

let erick =
{
    Name: 'Erick',
    LastName: 'Burbano',
    Height: 1.71
}

let felipe =
{
    Name: 'Felipe',
    LastName: 'Perez',
    Height: 1.72
}

let amparo =
{
    Name: 'Amparo',
    LastName: 'Rodriguez',
    Height: 1.55
}

let wendy =
{
    Name: 'Wendy',
    LastName: 'Salamanca',
    Height: 1.65
}

let nicol =
{
    Name: 'Nicol',
    LastName: 'Perez',
    Height: 1.62
}

let jannette =
{
    Name: 'Jannette',
    LastName: 'Martinez',
    Height: 1.56
}

var people = [santiago, gonzalo, erick, felipe, amparo, wendy, nicol, jannette]

//Acceder al primer elemento
// El cero es el primer valor o índice de un arreglo
people[0]

//Acceder a una propiedad del objeto que esta siendo llamado en el arreglo
people[0].Height
people[0]['Height']

for (let i=0; i < people.length; i++)
{
    let person = people[i]
    console.log(`${person.Name} mide ${person.Height} mts`)
}