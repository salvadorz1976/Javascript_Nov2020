/* Tarea 
Ejercicio
En este ejercicio, debe construir un if dentro de la instrucción 
de la función checkNumber que verifica si el número myNumber 
es igual a 42. 
Si ese es el caso, la función debe imprimir usando console.log 
la palabra 'correcta'. 
Si myNumber no es igual a 42, la función debe imprimirse 
usando console.log la palabra incorrecta. 
Puede nombrar el argumento pasado a una función 
proporcionando el nombre entre paréntesis. 
Por ejemplo, función myFunction (myArgument).
*/

function myFunction (myArgument1, myArgument2){
    return (myArgument1 + myArgument2)
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }


console.log(isNumber(5,8))

//La diferencia es que == primero intenta convertir los tipos antes de 
//compararlos. El operador === no, hace una comparación directa aunque 
//siempre retorna falso si los tipos son diferentes.

1 == "1" // verdadero    
1 === "1" // falso
'' == 0 // verdadero
'' === 0 // falso
