var Name = 'Santiago'
//Local Scope 
function printNameUpperCase(Name)
{
    Name = Name.toUpperCase() //Name SANTIAGO
    console.log(Name)
}

printNameUpperCase(Name)

//Global Scope verification
window.Name //Name Santiago

