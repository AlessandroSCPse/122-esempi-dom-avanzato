// Creare in JavaScript una griglia 8x8. 
// Ogni cella della griglia contiene un numero 
// casuale da 1 a 64. I numeri presenti nelle celle 
// ***non devono essere ripetuti*** (ovvero la griglia 
//     contiene **tutti** i numeri da 1 a 64). 

// Ogni volta che clicco su un quadrato questo si 
// colora di verde se il numero contenuto e dispari e 
// in rosso se pari

// finche non tutti e 64 i numero
    // ne prendiamo uno random
    // se gia non l'ho inserito lo inserisco
    // e mi segno che l'ho inserito
const mainGrid = document.querySelector('#grid');
const blackList = [];
for(let i = 0; i < 64; i++) {
    const randomNumber = getRandomUniqueNumber(1, 64, blackList);
    blackList.push(randomNumber);
    const square = generateSquare(randomNumber);

    square.addEventListener('click', function() {
        if(randomNumber % 2 === 0) {
            this.classList.add('even');
        } else {
            this.classList.add('odd');
        }
    });
    
    mainGrid.append(square);
}

function generateSquare(number) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.innerHTML = `<span>${number}</span>`;
    return newSquare;
}

// Funzione che genera un numero random tra min e max 
// che non è ancora presente nella blacklist
// min -> numero minimo
// max -> numero massimo
// blackList -> array di numeri che sono gia nella griglia
// return: un numero intero valido compreso tra min e max
function getRandomUniqueNumber(min, max, blackList) {
    // parte dal pressuposto che il numero 
    // non sia valido
    // se il numero generato random non è presente nella blacklist
    // allora è valido
    // return del numero valido
    let numbIsValid = false;
    let randomNumber;
    while(!numbIsValid) {
        randomNumber = getRndInteger(min, max);

        if(!blackList.includes(randomNumber)) {
            numbIsValid = true;
        }
    }

    return randomNumber;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}