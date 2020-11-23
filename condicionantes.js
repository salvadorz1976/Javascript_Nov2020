var texto;
texto = "Servidor on"


if (texto == 'Servidor Off') {
    console.log('Test pass')
}
else {
    console.log("Text fail")
}

var num = 48
if (num == 50){
    console.log("Valor: ", num)
    console.log("Numero menor")
}

var num2= 48
var foo = 7
var bar = 5

if (num <= num2 && foo > bar ){
    console.log("Pass and")
}

if (num < num2 || foo > bar){
    console.log("PASS OR")
}

// ejemplo con if incluyendo FALSE

var notTrue = false;

if (!notTrue){
    console.log("El valor es:" + notTrue)
}

//Switch

var rango = "Coronel"

switch(rango){
    case "Soldado Rzo":
        console.log('No autorizado')
    case "Comandante":
        console.log("Necesita autorizacion")

    case "Capitan":
        console.log("Autorizacion requerida")
    case "General":
        console.log("Usuario autorizado")
    default:
        console.log("Respuesta default: Usuario no autorizdo")
        break;
}