/*let nombre = prompt ("Ingrese su Nombre")
let apellido = prompt ("Ingrese su Apellido")


alert ("Usted es: La mejor mama") */


/*let nombre = "Homero"
let apellido = "Simpson"
const edad = "38"
let resultado = nombre + apellido + edad
console.log( resultado ); */

/*let nombre = "Nombre: Jeronimo"
let apellido = "Apellido: Novach"
let nacimiento = "Nacimiento: 03/03/2004"
var fecha = "Fecha de espedición: 03/03/2028"
const fecha2 = "Fecha vencimiento: 03/03/2036" 

let salidaNombre = "Nombre" + nombre + "\n" ;
let salidaApellido = "Apellido" + apellido + "\n" ;
let salidaNacimiento = "Nacimiento" + nacimiento + "\n" ;
var salidafecha = "fecha" + fecha + "\n" ;
const salidafecha_ = "fecha2" + fecha2 + "\n" ;

let resultado = nombre + "\n" + apellido + "\n" + nacimiento + "\n" + fecha + "\n" + fecha2
alert (resultado)*/

let peso = parseFloat(prompt("Ingrese su Peso:"))
let altura = parseFloat(prompt("Ingrese su Altura en CM"))/100
let imc = peso/(altura*altura)
alert("Tu IMC es:"  + imc.toFixed(2))

if ( imc < 18.5 ) {
    alert ("Tu IMC esta bajo, empeza a comer");
    
} else if (( imc >= 18.5) && (imc <= 24.9 )) {
    alert ("Tu IMC está bien, VAAAAAAAMOO TOROOOOOO ")

} else if (( imc >= 25) && (imc <= 29.9 )) {
    alert ("Tu IMC está mal, deja la birra ")

} else {
    alert ("Que haces en la PC, internate en el gimnasio YA")
}