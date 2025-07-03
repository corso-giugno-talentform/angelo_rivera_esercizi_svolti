for (let i = 1; i <= 100; i++) {

    console.log(checkPari(i) ? 'E Pari -> ' + i : 'E Dispari -> ' + i);
}

function checkPari(a) {

    if (a % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
