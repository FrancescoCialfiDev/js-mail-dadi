// Applichiamo controlli ristretti del codice per una convalida piu efficiente.
"Use strict"
// Effettuiamo un reset automatico della console in modo tale da eliminare eventuali righe di codice sulla console.
console.clear()

// Consegna:
/* Mail Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email */

// Creiamo l'array con le varie email inserite all'interno di un database.
let database = [
    "luca.bianchi123@emailfinto.com",
    "sara.rossi98@fakemail.net",
    "marco.verdi2000@tempmail.org",
    "giulia.costa89@fakeinbox.com",
    "andrea.riva77@fakemail.co",
    "elena.martini21@tempmail.me",
    "filippo.gallo55@nomail.com",
    "alessia.fontana43@discardmail.com",
    "matteo.sartori12@mytemp.email",
    "marta.pellegrini09@tempmailservice.com"]

// Creiamo una variabile di input per l'utente nel quale verrà inserita la sua email personale.
let email = prompt("Inserisci la tua E-mail");

let mailTrovata = false; // Creo una variabile di appoggio / FLAG 
// Per fare una verifica delle email di corrispondenza utilizziamo un ciclo for per scorrere all'interno dell'array
for (let i = 0; i < database.length; i++) {
    if (email === database[i]) {
        mailTrovata = true; // Il true sta ad indicare che quando l'email viene trovata il valore va da false a true e interrompe l'iterazione con il break
        break;
    }
}

// Tramite una condizione diciamo che se il valore di mailTrovata corrisponde a vero allora il messaggio di log sarà il seguente
if (mailTrovata === true) {
    console.log("La tua email risulta registrata nel nostro sistema");
} else {
    console.log("La tua email non risulta registrata nel nostro sistema");
}

// Avremmo anche potuto utilizzare la funzione .includes() la quale verifica se all'interno di database è inclusa l'email riportata nella variabile email 

if (database.includes(email)) {
    console.log("La tua email risulta registrata nel nostro sistema");
} else {
    console.log("La tua email non risulta registrata nel nostro sistema");
}

// Volendo avremmo anche potuto utilizzare un operatore ternario con la funzione includes

database.includes(email) ? console.log("La tua email risulta registrata nel nostro sistema") : console.log("La tua email non risulta registrata nel nostro sistema")

// Questi sono 3 metodi diversiper ottenere lo stesso risultato. Ricordiamo che la funzione .includes non fà altro che ciò che abbiamo descritto nel primo esempio.