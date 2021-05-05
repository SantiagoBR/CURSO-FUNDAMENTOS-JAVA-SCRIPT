var santiago = 
{
    name: 'Santiago',
    lastName: 'Bastidas',
    age: 19
}
var dario = 
{
    name: 'Darío',
    lastName: 'Susnisky',
    age: 27
}
function printNameUpperCase(person)
{
    // var name = person.name
    var {name} = person
    console.log(name.toUpperCase())
}
function printNameAndAge(person)
{
    var {name, age} = person 
    console.log(`Hola, me llamo ${name} y tengo ${age} años`)
}

printNameAndAge(santiago)
printNameAndAge(dario)

printNameUpperCase(santiago)
printNameUpperCase(dario)
printNameUpperCase({ name: 'Pepito'})

