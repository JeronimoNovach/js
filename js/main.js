alert ("Bienvenido a Pupi Barber")

let nombre =  (prompt ("Ingrese su Nombre")) .toLowerCase();
const turno = (prompt ("Que dia desea (Lunes, Martes, Miercoles, Jueves, Sabado"));
let horario = (prompt ("Que hora desea cortarse (De 10 - 20)"));


if (horario >9)  {
    //alert ("Turno confirmado")
} else if (horario <=20) {
    //alert ("Turno confirmado")
} else {
    alert ("Ingrese un horario entre las 10 y las 20")
}

let barbero = (prompt ("Con que barbero desea cortarse (Jero, Giuse, Victor)")) .toLowerCase ();

while ((barbero != "jero") && (barbero !== "giuse") && (barbero !== "giuse")) {
    switch (barbero) {
        case "jero":
            alert ("Su turno fue confirmado con Jero "+" \n " + " Gracias por confiar en Pupi Barber");
            break;
        case "giuse":
            alert("Su turno fue confirmado con Giuse "+" \n " + " Gracias por confiar en Pupi Barber");
            break;
        case "victor":
            alert("Su turno fue confirmado con Victor "+" \n " + " Gracias por confiar en Pupi Barber");
            break;
            default:
            alert ("Ingrese un barbero existente")
    }

    console.log("Dentro del While: " + barbero);
}


   /* const turno = ()=>{
    for(let i = 0; i <= 2; i++) {
        alert(`Confirmar Turno`);
    }
}
turno ()
alert ("Gracias por confiar en Pupi Barber")

/*while (barbero != "Nombre") { 
    switch (barbero) { 
        case "Jero":
            alert ("Barbero: Jero");
            break;
        case "Giuse":
            alert ("Barbero: Giuse");
            break;
        case "Victor":
            alert ("Barbero: Victor");
            break;
        default:
            alert ("No existe");
            break;
    }
    barbero = prompt("Ingrese un Barbero existente") .toUpperCase ();
}













//Entrada de datos
/*alert ("Bienvenido a Pupi Barber")
function pedirNombre (){
    let nombre = (prompt ("Ingrese su Nombre"))
return nombre

function barberTurno () {
    let barbero = (prompt("Ingrese con que barbero le gustaria: 1. Jero, 2. Giuse, 3. Victor"))
    while (barbero <= 0) {
       alert (barbero) = (prompt("Ingrese un barbero existente"))
    }
    return barbero
}

const nombre*/

/*const solicitarNombre = () => {
    let nombre = (prompt("Ingrese su Nombre"));

    while ((monto <= 0) || (monto > 2000000)) {
        monto = parseInt(prompt("Ingrese el Monto: (Hasta $2.000.000 pesos)"));
    }

    return monto;
}

const solicitarPlazo = () => {
    let plazo = 0;

    while ((plazo != 12) && (plazo != 24) && (plazo != 36) && (plazo != 48) && (plazo != 60)) {
        plazo = parseInt(prompt("Ingrese la Cantidad de Cuotas: (12/24/36/48/60):"));   
    }

    return plazo;
}

const solicitarTipoCliente = () => {
    return prompt("Ingrese el Tipo de Cliente: (Exclusive/Premium/Start)").toUpperCase();
}

const calcularTasa = (plazo) => {
    switch (plazo) {
        case 12:
            tasa = 50;
            break;
        case 24:
            tasa = 60;
            break;
        case 36:
            tasa = 70;
            break;
        case 48:
            tasa = 80;
            break;
        case 60:
            tasa = 90;
            break;    
        default:
            tasa = 120;
            break;
    }

    return tasa;
}

const obtenerTNA = (tipoCliente) => {
    switch (tipoCliente) {
        case "EXCLUSIVE":
            TNA = 113;
            break;
        case "PREMIUM":
            TNA = 118;
            break;
        case "START":
            TNA = 123;
            break;
        default:
            TNA = 150;
            break;
    }

    return TNA;
}

/*
let nombre =  (prompt ("Ingrese su Nombre")) .toLowerCase();
let barbero = (prompt ("Con que barbero desea cortarse (Jero, Giuse, Victor)")) .toUpperCase ();

function cortarse () { 


    const turno = (prompt ("Que dia desea (Lunes, Martes, Miercoles, Jueves, Sabado"));
    let horario = (prompt ("Que hora desea cortarse (De 10:00 - 20:00)"));
    let SalidaNombre = "Nombre" + nombre + "\n";
    let SalidaBarbero = "Barbero" + barbero + "\n";

    let texto = "Nombre: " + nombre + "\n" + "Barbero: " + barbero + "\n" + "Turno: " + turno + "\n" + "Horario: " + horario;
    
    alert (texto)

    if ( barbero === ("jero") )  {  
        alert ("Su turno fue registrado");

    } else if ( barbero === ("giuse") ) {  
        alert ("Su turno fue registrado");

    } else  {alert ( "Su turno fue registrado" ) }

      
}
cortarse ()

//Procesamiento de datos

while (barbero != "") {
    switch (barbero) {
        case "JERO":
            alert ("Su turno fue confirmado con Jero "+" \n " + " Gracias por confiar en Pupi Barber");
            break;
        case "GIUSE":
            alert("Su turno fue confirmado con Giuse "+" \n " + " Gracias por confiar en Pupi Barber");
            break;
        case "VICTOR":
            alert("Su turno fue confirmado con Victor "+" \n " + " Gracias por confiar en Pupi Barber");
            break;
        default:
            alert ("Ingrese un barbero existente");
            break;
        
    }

    console.log("Dentro del While: " + barbero);
}


   /* const turno = ()=>{
    for(let i = 0; i <= 2; i++) {
        alert(`Confirmar Turno`);
    }
}
turno ()
alert ("Gracias por confiar en Pupi Barber")

/*while (barbero != "Nombre") { 
    switch (barbero) { 
        case "Jero":
            alert ("Barbero: Jero");
            break;
        case "Giuse":
            alert ("Barbero: Giuse");
            break;
        case "Victor":
            alert ("Barbero: Victor");
            break;
        default:
            alert ("No existe");
            break;
    }
    barbero = prompt("Ingrese un Barbero existente") .toUpperCase ();
}




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

/*let peso = parseFloat(prompt("Ingrese su Peso:"))
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
}*/
