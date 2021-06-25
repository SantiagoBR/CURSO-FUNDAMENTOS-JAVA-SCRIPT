const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const OPTNS = { crossDomain: true }

const onPeopleResponse = function (person) {
    console.log(`Hola, yo soy ${person.name}`)
}

function getCaracter(id) {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    // request
    $.get(URL, OPTNS, onPeopleResponse)
}

getCaracter(1)
getCaracter(2)
getCaracter(3)