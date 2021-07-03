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

let ids = [1, 2, 3, 4, 5, 6, 7]

// let promises = ids.map(function (id) {
//     return getCaracter(id)
// })

let promises = ids.map( id => getCaracter(id))

Promise
    .all(promises)
    .then(caracters => console.log(caracters))
    .catch(onError) 
