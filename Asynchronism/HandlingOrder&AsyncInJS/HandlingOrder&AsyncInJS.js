const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const OPTNS = { crossDomain: true }

function getCaracter(id, callback) {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    // request
    $.get(URL, OPTNS, function (person) {
        console.log(`Hola, yo soy ${person.name}`)
        if (callback) {
            callback()
        }
    })
}

getCaracter(1, function () {
    getCaracter(2, function () {
        getCaracter(3, function () {
            getCaracter(4, function () {
                getCaracter(5)
            })
        })
    })
})
