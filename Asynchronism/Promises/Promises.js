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
    console.log(`Sucedión un error al obtener el personaje ${id}`)
}

getCaracter(1)
    .then(function (caracter) {
        console.log(`El personaje 1 es ${caracter.name}`)
    })
    .catch(onError)