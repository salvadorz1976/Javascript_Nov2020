//function changeArray(elements){
  //  var longiud = elements.length
    //var newArray = []
    //for (var i = 0 ;i < longitud; i++ ){
      //  console.log(elements[i])
        //elements.push(element[i])
//    }
//}

//var array = [3,1,2,3,5,6,7,-1]


// Cadena invertida abc => cba
 function reverseString(str) {



    // let revString = '';
// for(let i = 0; i <= str.length - 1; i++) {
//     revString = str[i] + revString;
// }
// return revString;
// }


///////////////////////////////

let revString = '';
for(let char of str) {
    revString = char + revString;
}
return revString;
 }

//Palindromo

function esPalindromo(str) {
    const revString = str.split('').reverse().join
    return revString === str;
}

// Llamada de funcion
//const output = reverseString('Sandoval');

const output = esPalindromo('ANA')
console.log(output);
