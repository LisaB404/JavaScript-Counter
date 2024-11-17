// Function to create HTML elements
function createElement(tag, attributes = {}, content = '') {
    const element = document.createElement(tag);

    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }

    element.innerHTML = content;
    return element;
}

// Creation of HTML elements in the DOM
const divContainer = createElement('div', { id: 'container' });
document.body.appendChild(divContainer);

const h1Title = createElement('h1', { class: 'title' }, 'How many pixels can you count?');
divContainer.appendChild(h1Title);

const divNumber = createElement('div', { id: 'number' }, 0);
divContainer.appendChild(divNumber);

const divButtons = createElement('div', { class: 'buttons' });
divContainer.appendChild(divButtons);

const pulSubtract = createElement('button', { id: 'subtract' }, '-');
const pulReset = createElement('button', { id: 'reset' }, 'Reset');
const pulAdd = createElement('button', { id: 'add' }, '+');

const icon = createElement('i', {class: 'fa-solid fa-xmark'});
pulReset.appendChild(icon);

// Adding buttons to divButtons"
divButtons.appendChild(pulSubtract);
divButtons.appendChild(pulReset);
divButtons.appendChild(pulAdd);


let counter = 0;

// Functions to handle clicks on buttons and updating the counter
document.getElementById('subtract').onclick = function(){
    if(counter > 0) {
        counter--;
        document.getElementById('number').innerHTML = counter;
    } else {
        const existingAlert = document.querySelector('#alert');
        if (!existingAlert) {
            const alert = createElement('p', { id: 'alert' }, 'Sorry. You can\'t count a negative number of pixels!');
            divContainer.appendChild(alert);
        }
    }
}

document.getElementById('reset').onclick = function(){
    counter = 0;
    document.getElementById("number").innerHTML = counter;
}

document.getElementById('add').onclick = function(){
    counter++;
    document.getElementById('number').innerHTML = counter;

    const existingAlert = document.querySelector('#alert');
    if (existingAlert) {
        existingAlert.remove();
    }
}
