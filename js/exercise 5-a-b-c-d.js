// EXERCISE 5-A

// Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript 
// para mostrar una alerta utilizando cada una de las palabras.

var words = ['pablo', 'balbo', 'curso', 'radium', 'rocket'];

// for(i = 0; i < words.length; i++){
//     alert(i + ': ' + words[i])
// };

// ------------------------------------------------------------------------------------------------------

// EXERCISE 5-B

// Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.

// for(i = 0; i < words.length; i++){
//     alert(words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1))
// };

// -------------------------------------------------------------------------------------------------------

// EXERCISE 5-C

// Crear una variable llamada “sentence” que tenga un string vacío, 
// luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence.
// Al final mostrar una única alerta con la cadena completa.

// var sentence = '';

// for(i = 0; i < words.length; i++){
//     sentence += words[i] + " ";
// }

// alert(sentence);

// ------------------------------------------------------------------------------------------------------

// EXERCISE 5-D

// Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, 
// es decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array, 
// desde el número 0 hasta al numero 9. Mostrar por la consola del navegador el array final (utilizar console.log).

emptyArray = [];

for(i = 0; i < 10; i++){
   emptyArray.push(i);
}

console.log(emptyArray);


// ------------------------------------------------------------------------------------------------------