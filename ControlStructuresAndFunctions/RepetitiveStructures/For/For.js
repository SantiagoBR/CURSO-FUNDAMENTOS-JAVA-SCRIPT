let person =
{
    Name: 'Santiago',
    LastName: 'Bastidas',
    Age: 19,
    Weight: 60
}

console.log(` Al inicio del año ${person.Name} pesa ${person.Weight}kg`)

const WEIGHT_INCREMENT = 0.2
const YEAR_DAYS = 365

const weightIncrease = person => person.Weight += WEIGHT_INCREMENT
const weightReduce = person => person.Weight -= WEIGHT_INCREMENT

for (let i = 1; i <= YEAR_DAYS; i++)
{
    let random = Math.random()
    if(random < 0.25)
    {
        weightIncrease(person)
    }
    else if(random < 0.5)
    {
        weightReduce(person)
    }
}

console.log(`Al final del año ${person.Name} pesa ${person.Weight.toFixed(1)}kg`)