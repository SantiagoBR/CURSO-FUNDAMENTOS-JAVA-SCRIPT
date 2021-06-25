const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const OPTNS = { crossDomain: true }

function getCaracter(id, callback) {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    // request
    $
        .get(URL, OPTNS, callback)
        .fail(() => console.log(`Sucedió un error, no se pudó obtener el personaje ${id}`))
}

getCaracter(1, function (caracter) {
        console.log(`Hola, yo soy ${caracter.name}`)

    getCaracter(2, function (caracter) {
        console.log(`Hola, yo soy ${caracter.name}`)

        getCaracter(3, function (caracter) {
            console.log(`Hola, yo soy ${caracter.name}`)

            getCaracter(4, function (caracter) {
                console.log(`Hola, yo soy ${caracter.name}`)

                getCaracter(5, function (caracter) {
                    console.log(`Hola, yo soy ${caracter.name}`)
                })
            })
        })
    })
})
