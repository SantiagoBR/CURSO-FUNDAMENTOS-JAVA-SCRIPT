var person = 
{
    Name: prompt('¿Cuál es tu nombre?'),
    Age: prompt('¿Cuál es tu edad?') 
}

const AGE_ADULT = 18

function IsAdult(person)
{
   return person.Age >= AGE_ADULT
}
function printIfIsAdult(person) 
{
    var { Name, Age } = person     

    console.log(`Tu nombre es ${Name} y tu tienes ${Age} años`)

    if(IsAdult(person))
    {
        console.log('Eres mayor de edad')
    }
    else
    {
        console.log('Eres menor de edad')
    }
}


 