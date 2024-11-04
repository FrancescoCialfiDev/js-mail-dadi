// Applichiamo controlli ristretti del codice per una convalida piu efficiente.
"Use strict"
// Effettuiamo un reset automatico della console in modo tale da eliminare eventuali righe di codice sulla console.
console.clear()

// Consegna
/* Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array */

// let input;
// let numeri = []
// console.log(numeri)


// for (let index = 1; index <= 6; index++) {
//     input = parseInt(prompt("Inserisci un numero"))
//     console.log(input)
//     if (input % 2 != 0) {
//         numeri.push(input)
//     }
// }

// console.log(numeri)

// ________________________________________________________

// SECONDO BONUS

// Consegna
/* Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
Javascript - JS */

// let cubo; // Creiamo una variabile di riutilizzo per il ciclo
// let N = parseInt(prompt("Inserisci Numero")) // Chiediamo all'user di inserire un numero
// console.log("Il numero che hai scritto è:" + " " + N); 

// // Creiamo il ciclo for dicendo che indice parte da 1 ma deve essere minore o uguale al numero che inserisce l'utente cpso prende tutti i numeri precedenti a quello inserito.
// for (let i = 1; i <= N; i++) {
//     cubo =  i ** 3 // Facciamo il cubo sull'indice cosi che lo applica su tutti i numeri
//     console.log("Il cubo del numero" + " " + i + " " + "è:" + " " + cubo) 
// }

//_____________________________________________________

// TERZO BONUS
// Consegna 
//Stampa le potenze di 2 fino a 1000.
let n = 0;

while (2 ** n <= 1000) {
    console.log(2 ** n ); // Calcola e stampa 2 elevato alla potenza di n
    n++; // Incrementa n per passare alla potenza successiva
}




