var person = 
    {
        Name: '',
        Age: 0
    }
const askPersonInformation = person =>
{
    person.Name = prompt('¿Cuál es tu nombre?'),
    person.Age = prompt('¿Cuál es tu edad?') 
}


const AGE_ADULT = 18

const IsAdult = ({Age}) => Age >= AGE_ADULT
const IsNotAdult = ({Age}) => !IsAdult({Age})

const allowsAccess = (person) =>
{
    IsNotAdult(person) ? console.log(`Hola ${person.Name} eres menor de edad y tienes el acceso denegado`) : 
    console.log(`Hola ${person.Name} eres mayor de edad y tienes el acceso permitido`)
}


 