let array_3 = [1, 15, 3, 8, 12, 9, 7, 20];
let array_4 = [];

let conteggio = [];

array_3.forEach(function (numeri, indice) {

    console.log('Somma di', numeri, '=', (numeri + numeri));
    array_4.push(numeri * 2);


    if (numeri > 10) {
        conteggio.push(indice)
    }
    return;
})

console.log('I numeri > 10 =', conteggio.length);
console.log('Moltiplicazione x2 =', array_4);