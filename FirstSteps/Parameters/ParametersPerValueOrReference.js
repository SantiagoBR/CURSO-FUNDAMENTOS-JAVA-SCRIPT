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
/* En este caso el valor de la edad de la persona es pasado por parametro, pero el 
objeto no va a ver afectado su valor por fuera de la función
function birthDate(age) 
{
    age: person.age += 1 
} 
*/
/* Si el objeto es pasado como parametro, es pasado por referencia, lo que eso significa
es que si se modifica el objeto dentro de la función, va a verse el cambio por fuera de la
función también
function birthDate(person) 
{
    person.age += 1
}
*/

function birthDate(person) 
{
    return {
        /*Spread operator (operador de propagación), permite crear un duplicado del 
        objeto para modificarlo según se necesite*/
        ...person,
        age: person.age += 1 
    }   
}
//Guardar el valor que devuelve la función en un objeto duplicado
// var santiagoOlder = birthDate(santiago)

printNameAndAge(santiago)
printNameAndAge(dario)

printNameUpperCase(santiago)
printNameUpperCase(dario)
printNameUpperCase({ name: 'Pepito'})