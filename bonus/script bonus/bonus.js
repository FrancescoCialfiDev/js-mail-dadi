// Applichiamo controlli ristretti del codice per una convalida piu efficiente.
"Use strict"
// Effettuiamo un reset automatico della console in modo tale da eliminare eventuali righe di codice sulla console.
console.clear()

// Consegna
/* Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array */

let input;
let numeri = []
console.log(numeri)


for (let index = 1; index <= 6; index++) {
    input = parseInt(prompt("Inserisci un numero"))
    console.log(input)
    if (input % 2 != 0) {
        numeri.push(input)
        
    }
}

console.log(numeri)