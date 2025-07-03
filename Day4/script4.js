function calcolatrice() {
    const form = document.getElementById('iDati');
    let numero1 = parseFloat(form.elements['numero1'].value);
    let numero2 = parseFloat(form.elements['numero2'].value);
    let operazione = form.elements['operazione'].value;


    switch (operazione) {
        case '+':
            console.log('Il risultato -> ' + (numero1 + numero2));
            break;
        case '-':
            console.log('Il risultato -> ' + (numero1 - numero2));
            break;
        case '*':
            console.log('Il risultato -> ' + (numero1 * numero2));
            break;
        case '/':
            console.log('Il risultato -> ' + (numero1 / numero2));
            break;
    }

    return;
}


function datiforn() {
    const form = document.getElementById('iDati');
    let nome = form.elements['nome'].value;
    let cognome = form.elements['cognome'].value;

    for (let i = 1; i <= 30; i++) {

        checkMult(i, nome, cognome);
    }
    return;
}

function checkMult(a, b, c) {

    if (a % 3 === 0 && a % 5 === 0) {
        console.log('Nome e Cognome-> ' + b + ' ' + c);
    } else if (a % 3 === 0) {
        console.log('Nome -> ' + b);
    } else if (a % 5 === 0) {
        console.log('Cognome -> ' + c);
    } else {
        console.log('');
        console.log(a);
        console.log('');
    }
    return;
}

function paridis() {
    const form = document.getElementById('iDati');
    let numero = parseInt(form.elements['numero'].value);

    const pari = [];
    const dispari = [];

    for (let i = 1; i < numero; i++) {
        if (checkFirst(i)) {
            pari.push(i);
        } else {
            dispari.push(i);
        }
    }

    for (let d of dispari) {
        console.log('dispari:', d);
    }

    for (let p of pari) {
        console.log('pari:', p);
    }

    return;
}

function checkFirst(a) {
    return a % 2 === 0;
}


