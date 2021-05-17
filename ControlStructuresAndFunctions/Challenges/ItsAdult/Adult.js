var person = 
{
    Name: prompt('¿Cuál es tu nombre?'),
    Age: prompt('¿Cuál es tu edad?') 
}


function ItsAdult(person) {
    var { Name, Age } = person     

    console.log(`Tu nombre es ${Name} y tu tienes ${Age} años`)

    if(Age < 18)
    {
        console.log('Eres menor de edad')
    }
    else
    {
        console.log('Eres mayor de edad')
    }
}


 