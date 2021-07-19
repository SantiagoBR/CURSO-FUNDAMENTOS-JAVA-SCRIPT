const Person = {
    name: 'Santiago',
    lastName: 'Bastidas',
    age: 19
}

// const BIRTH_DATE = Person => Person.age++

const IMMUTABLE_BIRTH_DATE = person => ({
    ...person,
    age: person.age + 1
})