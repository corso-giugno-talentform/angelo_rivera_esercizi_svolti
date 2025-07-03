let parola = "Woooooow";

let array_parola = parola.split('');

let vocali = ["a", "e", "i", "o", "u"];

let conto = 0;

array_parola.forEach(function (letter) {
    if (vocali.includes(letter.toLowerCase())) {
        conto++;
    }
    return;
});

console.log(parola, '=', 'Nella parola "' + parola + '" ci sono', conto, 'vocali');