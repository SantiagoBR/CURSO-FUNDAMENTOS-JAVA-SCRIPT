const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const OPTNS = { crossDomain: true }

function getCaracter(id) {
    return new Promise((resolve, reject) => {
        const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
        .get(URL, OPTNS, function (data) {
            resolve(data)
        })
        .fail(() => reject(id))
    })          
}

function onError(id) {
    console.log(`Sucedió un error al obtener el personaje ${id}`)
}

getCaracter(1)
    .then(caracter => {
        console.log(`El personaje 1 es ${caracter.name}`)
        return getCaracter(2)
    })
    .then(caracter => {
        console.log(`El personaje 2 es ${caracter.name}`)
        return getCaracter(3)
    })
    .then(caracter => {
        console.log(`El personaje 3 es ${caracter.name}`)
        return getCaracter(4)
    })
    .then(caracter => {
        console.log(`El personaje 4 es ${caracter.name}`)
        return getCaracter(5)
    })
    .then( (caracter) => {
        console.log(`El personaje 5 es ${caracter.name}`)
        return getCaracter(6)
    })
    .then( (caracter) => {
        console.log(`El personaje 6 es ${caracter.name}`)
        return getCaracter(7)
    })
    .then( (caracter) => {
        console.log(`El personaje 7 es ${caracter.name}`)
    })
    
    .catch(onError)