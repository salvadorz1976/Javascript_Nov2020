//Variable  y constantes.

/*Reglas de nombres de variable en JS:
-El primer caracter deber ser una letra, un guion bajo (_), o un signo de dolar ($),
los caracteres subsiguientes pueden ser letras, digitos, subrayados o signos 
dolar.
-Los nombres de variables no pueden incluir un operador matematico o lógico en el nombres
por ejeml 2*algo esto+esto;
- Los nombres de JavaScript no deben de contener espacio.
- No debes usar ningú símbolo especial, como my#nm, nu@, etc.
*/

//Para declara una variable se utiliza 'var' 
var arbol = "Sauce"
var nombre = "Salvador"
var apellido = "Gervacio"
var edad = 50
var miNumber

//imrimi las variables
console.log(arbol, nombre, apellido, edad, miNumber)

//Cambiar variables
edad = true
miNumber = true

//Imprimir variables
console.log(arbol, nombre, apellido, edad, miNumber)

//Constantes
const accesorio = "Blackberry"
console.log("Constante accesario: ", accesorio)
console.log("Constance accesorio letras: ", accesorio.length)

//Arrays
console.log("   ..... Arrays")
var dogs = ['Rex', 'Terry', 'Picolo',9];
console.log("Imprimor el contenido del array: ", dogs)
dogs = true
console.log("Imprime el contendio del array con cambio: ",dogs)

var dogs = ['Terry', 'Oso',9,99];
//Imrime un solo elemento
console.log(dogs[1])

//Uso de NULL en variables

var emptyVariable = null
console.log("Variable con valor NULL: ", emptyVariable)

emptyVariable = false
console.log("Variable con valor que cambio: ", emptyVariable)

emptyVariable = null
console.log("Variable con vallor NULL: ", emptyVariable)

var vaciaVariable
console.log("Variable sin valor: ", vaciaVariable)

var miStack = []
console.log(miStack)

miStack.push(12121212);
miStack.push("arbol");
miStack.push(false);

console.log(miStack)
// Pop saca el ultimo elemento
console.log(miStack.pop())
console.log(miStack)
// Shift saca el primer elemento del array
console.log(miStack.shift())
console.log(miStack)

var myArray = [0,1,2,3,4,5,6,7,8,9,0];
var splice = myArray.splice(0,10);
//Splie saca varios elemento de array (Posicion, numbero de elementos)
console.log(splice);
console.log(myArray)

//Constantes para arrays
const constArray = [1,2,3,4,5,6,7,8,9,0];
console.log(constArray)
console.log(constArray.pop())



var myArray = [0,1,2,3,4,5,6,7,8,9,0];
var splice = myArray.splice(0,10);

//Splice sacar elementos de un array (Posicion, numero sw elementos)
console.log(splice);
console.log(myArray);

//Constantes para arrays
//const constArray = [0,1,2,3,4,5,6,7,8,9,0];
console.log(constArray)
console.log(constArray.pop())
console.log(constArray)

constArray[0] = "Cadena"

console.log(constArray)

//Multilineas
console.log('linea 1 \n \n linea3')
console.log('Linea4')

var arreglo23 = []
arreglo23[5] = 8
console.log(arreglo23.shift())
arreglo23.push(2)
arreglo23[0] = 87

// Unshift agrega elemento al inicio de todo el array
arreglo23.unshift(5)
console.log(arreglo23[0])
console.log(arreglo23)


