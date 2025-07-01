console.log('Benvenuto nel mondo Javascript!')

function dati() {
    const form = document.getElementById('iDati');
    let nome = form.elements['nome'].value;
    let eta = form.elements['eta'].value;
    let cognome = form.elements['cognome'].value;
    let citta = form.elements['citta'].value;
    let hobby = form.elements['hobby'].value;
    const giornisett = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
    const oggi = new Date();
    const giorno = oggi.getDay();

    console.log('');
    console.log('Nome -> ' + nome);
    console.log('Cognome -> ' + cognome);
    console.log('Eta -> ' + eta);
    console.log('Citta -> ' + citta);
    console.log('Hobby -> ' + hobby);
    console.log('');
    console.log('Buon ' + giornisett[giorno] + ', ' + nome + ' ' + cognome + '!');
};