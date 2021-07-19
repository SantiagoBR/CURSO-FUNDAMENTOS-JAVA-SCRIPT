function createSalutes(finalPhrase) {
    return function (name) {
        console.log(`Hola ${name} ${finalPhrase}`)
    }
}

const COLOMBIAN_SALUTE = createSalutes("parce!")
const ARGENTINIAN_SALUTE = createSalutes("Che!")
const MEXICAN_SALUTE = createSalutes("Wey!")

COLOMBIAN_SALUTE('Santiago') // Hola Santiago parce!
ARGENTINIAN_SALUTE('Santiago') // Hola Santiago che!
MEXICAN_SALUTE('Santiago') // Hola Santiago wey!