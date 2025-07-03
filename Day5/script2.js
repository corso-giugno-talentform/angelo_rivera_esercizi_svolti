let amici = ["Alessandro", "Justin", "Lindon", "Jennie", "Leo"];

amici.push("Jeremy");

console.log(amici[5], 'Aggiunto nella lista!');

const find = amici.find((nome) => nome === 'Alessandro');

console.log(find, 'Trovato nella lista!');

console.log('Lista ordinata =', amici.sort());

