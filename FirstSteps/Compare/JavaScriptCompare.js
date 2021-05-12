var x = 4, y = '4'

x == y 
// return: true, ya que el doble igual '==' solo compara los valores que interpreta JS

x===y
// return: false, esto se debe a que el triple igual  '===' hace una comparación más estricta 
// incluyendo en la comparación el tipo de dato de las variables

var santiago =
{
    name: 'Santiago'
}

var anotherPerson = 
{
    name: 'Santiago'
}               
// Este objeto aunque tiene los mismos valores que el objeto 'santiago' no es igual, ya 
// que, este ocupa un lugar en memoria distinto.      

var anotherPerson2 = {
    ...santiago
} 
// Este objeto apunta al mismo espacio en memoria que el objeto 'santiago' y por lo tanto en una comparación
// sería igual a true
