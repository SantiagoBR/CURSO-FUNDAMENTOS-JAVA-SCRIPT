let counter = 0

const Rain = () => Math.random() < 0.25

do
{
    counter++
} while (!Rain())

//Mi solución
counter == 1 ? console.log(`Fui a ver si llovia ${counter} vez`) : 
console.log(`Fui a ver si llovia ${counter} veces`)

//Replica de compañero Patricio_Recio_Contreras
let frequency = counter === 1 ? 'vez' : 'veces'
console.log(`Fui a ver si llovía ${counter} ${frequency}`)



