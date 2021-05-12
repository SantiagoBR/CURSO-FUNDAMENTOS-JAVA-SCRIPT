var santiago = 
{
    Name: 'Santiago',
    LastName: 'Bastidas',
    Age: 19,
    Engineer: true,
    Cook: false,
    Singer: true,
    Dj: false,
    GuitarPlayer: false,
    BasketballPlayer: false
}

function printProfessions(person) 
{
    console.log(`${person.Name} es: `)
    if (person.Engineer) 
    {
        console.log('Ingeniero')    
    }
    if (person.Cook) 
    {
        console.log('Cocinero')    
    }
    if (person.Dj) 
    {
        console.log('Dj')    
    }
    if (person.Singer) 
    {
        console.log('Cantante')    
    }
    if (person.GuitarPlayer) 
    {
        console.log('Guitarrista')    
    }
    if (person.BasketballPlayer) 
    {
        console.log('Jugador de baloncesto')    
    }
}

printProfessions(santiago)

