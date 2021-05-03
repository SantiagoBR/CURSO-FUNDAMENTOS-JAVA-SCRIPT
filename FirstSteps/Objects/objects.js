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
function printNameUpperCase({name})
{
    console.log(name.toUpperCase())
}

printNameUpperCase(santiago)
printNameUpperCase(dario)
printNameUpperCase({ name: 'Pepito'})

