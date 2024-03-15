// Creare in JavaScript una griglia 8x8.
// Ogni volta che clicco su un quadrato questo 
// si colora di verde se il numero contenuto 
// è pari e in rosso se dispari

// per 64 volte creare un quadratino e ogni quadratino
// lo aggiungo a grid
    // al click su ogni quadrato ne leggere il numero contenuto
    // se è pari lo coloro di rosso altrimenti di verde
const mainGrid = document.querySelector('#grid');
console.log(mainGrid);
for(let i = 1; i <= 64; i++) {
    const newSquare = generateSquare(i);
    mainGrid.append(newSquare);
}

// Funzione che genera un quadrato
// number -> numero che rappresenta un numero
// return: elemento del dom che rappresenta un quadrato
function generateSquare(number) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.innerHTML = `<span>${number}</span>`;

    // Gestione del click su ogni qudrato
    newSquare.addEventListener('click', function() {
        if(number % 2 === 0) {
            this.classList.add('even');
        } else {
            this.classList.add('odd');
        }
    });

    return newSquare;
}
