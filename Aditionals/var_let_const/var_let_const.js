//Var: Javascript usa 'var' y lo ubica en lo más alto del bloque principal, en este caso la función. Por esta razón puede ser llamada en cualquier bloque prácticamente.

var Person = {
    Name: 'Santiago',
    lastName: 'Bastidas',
    age: 19
}

function isAdult(person) {
    
    if(person.age > 18) {
        var message = 'Es mayor de edad'
    } else {
        var message = 'Es menor de edad'
    }
    console.log(message)
}

isAdult(Person) 
//Es mayor de edad

//Var en ciclos: como se mencionó anteriormente, var permite hacer llamados de las variables en casi cualquier ámbito, por lo que el console.log va a ser ejecutado correctamente.

for(var i = 0; i < 10; i++) {
    console.log(i)
}

console.log(`Terminó el for, el valor de i es ${i}`)


//Let: Javascript usa 'let' y solo permite que sea llamado en el mismo bloque de código en el que fue declarado. Por está razon si se intenta llamar desde el exterior de ese bloque, va a salir el error 'variable no definida'

var Person2 = {
    Name: 'Santiago',
    lastName: 'Bastidas',
    age: 19
}

function isAdult2(person) {
    
    if(person.age > 18) {
        let message2 = 'Es mayor de edad'
    } else {
        let message2 = 'Es menor de edad'
    }
    console.log(message2) 
}

isAdult2(Person2) 
// Uncaught ReferenceError: message2 is not defined

//Let en ciclos: como se mencionó anteriormente, let solor permite llamados dentro del mismo bloque de código, por lo tanto al hacer el llamado fuera del ciclo for. El resutlado va a ser un error.

for(let i = 0; i < 10; i++) {
    console.log(i)
}

console.log(`Terminó el for, el valor de i es ${i}`)
//ReferenceError: i is not defined

//Const

var Person3 = {
    Name: 'Santiago',
    lastName: 'Bastidas',
    age: 19
}

function isAdult3(person) {
    let message3 
    const ADULT_AGE = 18
    if(person.age > ADULT_AGE) {
        message3 = 'Es mayor de edad'
    } else {
        message3 = 'Es menor de edad'
    }
    console.log(message3) 
}

isAdult3(Person3) 