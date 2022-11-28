// inserimento dati

let genera = document.getElementById('genera');
genera.addEventListener('click', function(){
    nome = document.getElementById('nome').value;
    km = document.getElementById('km').value;
    eta = document.getElementById('eta').value;
    price = km * 0.21;
    if(eta < 18){
        // prezzo (price) - il 20%
        price = price - ((price/100) * 20);

        console.log(price)
    }else if(eta > 65){
        // prezzo (price) - il 40%
        price = price - ((price/100) * 40);
        console.log(price)
    }
    else{
    }

    price = price.toFixed(2);

    document.getElementById('prezzo').innerHTML = price + '€';
    document.getElementById('nome-passeggero').innerHTML = nome;
    document.getElementById('offerta').innerHTML = 'Biglietto Standard';
    document.getElementById('carrozza').innerHTML = '5';
    document.getElementById('codice').innerHTML = '92911';
});

// pulizia form

let annulla = document.getElementById('annulla');
annulla.addEventListener('click', function(){

    nome = document.getElementById('nome').value = '';
    km = document.getElementById('km').value = '';
    eta = document.getElementById('eta').value = '';

    document.getElementById('prezzo').innerHTML = '';
    document.getElementById('nome-passeggero').innerHTML = '';
    document.getElementById('offerta').innerHTML = '';
    document.getElementById('carrozza').innerHTML = '';
    document.getElementById('codice').innerHTML = '';
});
