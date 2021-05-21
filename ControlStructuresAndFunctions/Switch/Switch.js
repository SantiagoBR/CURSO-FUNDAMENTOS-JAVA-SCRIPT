var sign = prompt('¿Cuál es tu signo?')
switch(sign)
{
    case 'acuario': 
        console.log('Comprenda que los cambios siempre nos conducen a un nuevo aprendizaje. Etapa para generar una transformación total en su vida y animarse a cosas nuevas.')
        break
    case 'piscis':
        console.log('Prepárese, ya que la vida le reserva muchas sorpresas a lo largo del día. Manténgase muy alerta y dispuesto a vivirlas sin ningún temor, todo saldrá bien.')
        break
    case 'cancer':
    case 'cáncer':
        console.log('Si quiere estar en armonía con usted y los demás, trate de evitar la irritabilidad y saque a relucir la paciencia. De esta manera, las cosas le saldrán mejor.')
        break
    case 'aries':
        console.log('Aprenda que cuando empiece algo, debe enfocar sus energías en un solo objetivo por vez. Trate de no dispersar las fuerzas en diferentes caminos.')
        break
    case 'tauro':
        console.log('Si no quiere que nadie le reclame algo, empiece a manejar los tiempos con mayor cuidado y responsabilidad. Si usted obra bien nadie le reclamará nada.')
        break
    case 'geminis':
    case 'géminis':
        console.log('Transitará una etapa donde tendrá que darle la espalda a los problemas, de lo contario, se encontrará al borde de una crisis de nervios y no podrá ver con claridad.')
        break
    case 'leo':
        console.log('Sepa que podrá concretar todos los sueños y las ambiciones. Despreocúpese, ya que el ambiente se encontrará armonizado para llegar a su propósito.')
        break
    case 'virgo':
        console.log('Prepárese, ya que contará con la Luna en su signo y esas ideas que parecían sepultadas en el pasado volverán para ser incluidas en el presente que está viviendo.')
        break
    case 'libra':
        console.log('Momento donde deberá ocupar su mente en las cosas realmente importantes y no en aspectos superficiales. Comprenda que no son esenciales para su vida.')
        break
    case 'escorpio':
        console.log('Sepa que se acerca una etapa importante en su vida de la que saldrá bastante beneficiado. Tome el riesgo y permítase guiar por su intuición natural.')
        break
    case 'sagitario':
        console.log('No se detenga y empiece a canalizar sus ambiciones en cualquiera de los senderos que se abra ante sus ojos. Hágalo de manera tranquila y verá los buenos frutos.')
        break
    case 'capricornio':
        console.log('Mantenga el equilibrio ante las situaciones que enfrente, ya que vivirá un período donde las emociones estarán desordenadas. Piense bien antes de actuar.')
        break 
    default:
        console.log('No es un signo zodiacal válido')
        break
}