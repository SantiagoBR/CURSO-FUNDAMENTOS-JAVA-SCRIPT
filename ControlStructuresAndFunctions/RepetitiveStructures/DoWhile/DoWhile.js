let counter = 0

const Rain = () => Math.random() < 0.25

do
{
    counter++
} while (!Rain())

console.log(`Fui a ver si llovia ${counter} veces`)