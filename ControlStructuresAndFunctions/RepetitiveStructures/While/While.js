let person =
{
    Name: 'Santiago',
    LastName: 'Bastidas',
    Age: 19,
    Weight: 60
}

console.log(` Al inicio del año ${person.Name} pesa ${person.Weight}kg`)

const WEIGHT_INCREMENT = 0.3
const YEAR_DAYS = 365

const weightIncrease = person => person.Weight += WEIGHT_INCREMENT
const weightReduce = person => person.Weight -= WEIGHT_INCREMENT
const eatALot = () => Math.random() < 0.3
const doExercise = () => Math.random() < 0.4

const GOAL = person.Weight - 3
var days = 0

while (person.Weight > GOAL) {
    if (eatALot())
    {
        weightIncrease(person)
    }
    if (doExercise())
    {
        weightReduce(person)
    }
    days += 1
}

console.log(`Pasaron ${days} días hasta que ${person.Name} adelgazó 3kg`)

console.log(`Al final del año ${person.Name} pesa ${person.Weight.toFixed(1)}kg`)