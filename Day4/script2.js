for (let i = 1; i <= 100; i++) {

    console.log('');
    console.log('Numero -> ' + i + ' ' + 'Somma -> ' + (i + i));
    console.log('');

};

function datifor() {
    const form = document.getElementById('iDati');
    let valore = form.elements['valore'].value;

    for (let i = 1; i <= 10; i++) {

        if (valore <= 0) {
            console.log('VALORE NON VALIDO!');
            break;
        }

        else if (i === 5) {
            continue;
        }

        else {
            console.log('');
            console.log('Valore -> ' + valore + ' * ' + i + ' ' + 'Risultato -> ' + (i * valore));
            console.log('');
        }
    };
};