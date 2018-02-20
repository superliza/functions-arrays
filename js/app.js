// "let" es una sentencia que declara una variable a nivel local.
// "const" puede ser tanto local como global, pero su valor nunca cambia y no se puede volver a reedeclarar.
// se declara una variable global que guardará un array de numbers.
var array = [1, 2, 3, 4, 5];

// Ejercicio 1: simulando forEach();
function myForEach(arreglo, callback) { // se declara la función con los parámetros "arreglo" y "callback"
    // completa aqui
    for (let index = 0; index < arreglo.length; index++) {
        const element = arreglo[index];
        callback(element);
    }
}

myForEach(array, function(travelArray){   
        console.log(travelArray);        
})

// Ejercicio 2: simulando map();
var saveArray = [];
function mapArray(arreglo, callback) {
    callback(arreglo);
}

function myMapArray(arreglo) {
    for (let index = 0; index < arreglo.length; index++) {
        saveArray[index] = arreglo[index] + 5;        
    }
    console.log(saveArray);
    return saveArray;
}

mapArray(array, myMapArray);

// Ejercicio 3: simulando filter();
var saveFilter = [];
function filterArray(arreglo, filter){
    filter(arreglo);        
}

function myFilterArray(arreglo) {
for (let index = 0; index < arreglo.length; index++) {
    const elements = arreglo[index];
    if(elements % 2 === 1) {
        saveFilter.push(elements);
        // console.log(saveArray);
        // return saveArray;
    } else {
        console.log("es par");
    }      
}
    console.log(saveFilter);
    return saveFilter;
}

filterArray(array, myFilterArray);


// function myFilter(array, filter) {
//     filter(array);
// }

// function newFunction(array) {
//     for(var i = 0; i < array.length; i++) {
//         if(array[i] % 2 === 0) {
//             saveFilter.push(array[i]);
//         } else {
//             console.log(false);           
//         }       
//     }
//     console.log(saveFilter);
//     return saveFilter;
// }

// myFilter(array, newFunction);

// function myFilter(array, callback){
//     callback(array);
// }

// Ejercicio 4: simulando reduce();
function miFunctionReduce(arreglo, reduce) {
    reduce(arreglo);
}

function myFunctionReduce(arreglo) {
    var totalSum = null;
    for (let index = 0; index < arreglo.length; index++) {
        totalSum+= arreglo[index];        
    }
    console.log(totalSum);
    return totalSum;
}

miFunctionReduce(array, myFunctionReduce);