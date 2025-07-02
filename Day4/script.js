const MESI = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
const OGGI = new Date();
const MESE = MESI[OGGI.getMonth()];

switch (MESE) {
    case "Dicembre":
    case "Gennaio":
    case "Febbraio":
        console.log('');
        console.log('Mese -> ' + MESE);
        console.log('Stagione -> Inverno');
        console.log('');
        break;

    case "Marzo":
    case "Aprile":
    case "Maggio":
        console.log('');
        console.log('Mese -> ' + MESE);
        console.log('Stagione -> Primavera');
        console.log('');
        break;

    case "Giugno":
    case "Luglio":
    case "Agosto":
        console.log('');
        console.log('Mese -> ' + MESE);
        console.log('Stagione -> Estate');
        console.log('');
        break;

    case "Settembre":
    case "Ottobre":
    case "Novembre":
        console.log('');
        console.log('Mese -> ' + MESE);
        console.log('Stagione -> Autunno');
        console.log('');
        break;

    default:
        console.log('Mese non riconosciuto');
};

function dati() {
    const form = document.getElementById('iDati');
    let eta = form.elements['eta'].value;

    if (eta >= 0 && eta <= 12) {
        console.log('');
        console.log('Bambino -> ' + eta);
        console.log('Attivita -> Nuoto');
        console.log('');
    }

    else if (eta >= 13 && eta <= 17) {
        console.log('');
        console.log('Adolescente -> ' + eta);
        console.log('Attivita -> Calcio');
        console.log('');
    }

    else if (eta >= 18 && eta <= 64) {
        console.log('');
        console.log('Adulto -> ' + eta);
        console.log('Attivita -> Padel');
        console.log('');
    }

    else if (eta >= 65 && eta <= 100) {
        console.log('');
        console.log('Anziano -> ' + eta);
        console.log('Attivita -> Bocce');
        console.log('');
    }

    else {
        console.log('');
        console.log('ERRORE! Eta non valida.');
        console.log('');
    }
};

