// Funzione per creare elementi HTML
function creaElemento(tag, attributi = {}, contenuto = '') {
    const elemento = document.createElement(tag);

    for (const chiave in attributi) {
        elemento.setAttribute(chiave, attributi[chiave]);
    }

    elemento.innerHTML = contenuto;
    return elemento;
}

// Creazione degli elementi HTML
const divContainer = creaElemento('div', { id: 'container' });
document.body.appendChild(divContainer);

const h1Title = creaElemento('h1', { class: 'title' }, 'How many pixels can you count?');
divContainer.appendChild(h1Title);

const divNumber = creaElemento('div', { id: 'number' }, 0);
divContainer.appendChild(divNumber);

const divPulsanti = creaElemento('div', { class: 'pulsanti' });
divContainer.appendChild(divPulsanti);

const pulSubtract = creaElemento('button', { id: 'subtract' }, '-');
const pulReset = creaElemento('button', { id: 'reset' }, 'Reset');
const pulAdd = creaElemento('button', { id: 'add' }, '+');

// Aggiunta icona a Reset button
const icona = creaElemento('i', {class: 'fa-solid fa-xmark'});
pulReset.appendChild(icona);

// Aggiunta dei pulsanti al div "pulsanti"
divPulsanti.appendChild(pulSubtract);
divPulsanti.appendChild(pulReset);
divPulsanti.appendChild(pulAdd);


let contatore = 0;

function aggiungi() {
    contatore++;
    document.getElementById("number").innerHTML = contatore;
}

function sottrai() {
    if(contatore > 0) {
        contatore--;
    }
    document.getElementById("number").innerHTML = contatore;
}

function reset() {
    contatore = 0;
    document.getElementById("number").innerHTML = contatore;
}


pulSubtract.addEventListener('click', function() {
    if (contatore <= 0) {
        if (!document.querySelector('.alert')) {
            const alert = document.createElement('p');
            alert.className = 'alert';
            alert.textContent = "Sorry. You can't count a negative number of pixels!";
            divContainer.appendChild(alert);
        }
    } else {
        const existingAlert = document.querySelector('.alert');
        if (existingAlert) {
            existingAlert.remove();
        }
        
        sottrai();
    }
});

function aggiungi() {
    contatore++;
    document.getElementById("number").innerHTML = contatore;

    const existingAlert = document.querySelector('.alert');
    if (existingAlert) {
        existingAlert.remove();
    }
}

pulSubtract.addEventListener('click', sottrai);
pulReset.addEventListener('click', reset);
pulAdd.addEventListener('click', aggiungi);
