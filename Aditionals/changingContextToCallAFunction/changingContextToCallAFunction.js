const Person = {
    name: 'Santiago',
    lastName: 'Bastidas'
}

const Person2 = {
    name: 'Sacha',
    lastName: 'Lifszyc'
}

function Salute(salute = 'Hola') {
    console.log(`${salute}, mi nombre es ${this.name}`)
}

//El this se ata o engancha al objeto Person 
// const salutePerson = Salute.bind(Person)

//El this se ata o engancha al objeto Person2 
// const salutePerson2 = Salute.bind(Person2)

// setTimeout(Salute.bind(Person, 'Q hubo parce'), 1000)

// Salute.call(Person, 'Q más pacero')
Salute.apply(Person, ['Q más parcero'])
