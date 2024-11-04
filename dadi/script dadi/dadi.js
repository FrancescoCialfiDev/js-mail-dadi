// Applichiamo controlli ristretti del codice per una convalida piu efficiente.
"Use strict"
// Effettuiamo un reset automatico della console in modo tale da eliminare eventuali righe di codice sulla console.
console.clear()

// Consegna:
/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/


const giocatore = Math.floor((Math.random() * 6) + 1);
console.log(giocatore)

const computer = Math.floor((Math.random() * 6) + 1);
console.log(computer)

if (giocatore > computer) {
    console.log("Il vincitore è il giocatore")
} else if (giocatore < computer) {
    console.log("Il vincitore è il computer")
} else {
    console.log("Pareggio");
}