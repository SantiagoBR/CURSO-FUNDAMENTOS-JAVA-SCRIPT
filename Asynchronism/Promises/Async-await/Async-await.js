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

async function getCaracters() {
    let ids = [1, 2, 3, 4, 5, 6, 7]
    let promises = ids.map( id => getCaracter(id))
    try {
        let caracters = await Promise.all(promises)
        console.log(caracters)
    } catch (id) {
        onError(id)
    }
}

getCaracters()

