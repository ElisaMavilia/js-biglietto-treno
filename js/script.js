/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km) 
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
 */


//GENERAL//
let kilometer = parseInt(prompt("Inserisci il numero di chilometri da percorrere"));
let paxAge = parseInt(prompt("Inserisci la tua età"));
console.log(kilometer,paxAge);

let ticket = (0.21 * kilometer);
let noDiscountedTicket = ticket.toFixed(2).replace(/\./, ",");
console.log(noDiscountedTicket);

// BIGLIETTO 1//
let discount1 = (ticket * 20) / 100;
console.log(discount1);
let discountedTicket1 = (ticket - discount1);
/* Prezzo finale biglietto 1
in decimali */
let finalPrice1 = discountedTicket1.toFixed(2).replace(/\./, ",");
console.log(finalPrice1);

// BIGLIETTO 2//
let discount2 = (ticket * 40) / 100;
console.log(discount2);
let discountedTicket2 = (ticket - discount2);
/* Prezzo finale biglietto 2
in decimali */
let finalPrice2 = discountedTicket2.toFixed(2).replace(/\./, ",");
console.log(finalPrice2);

// CONDITION //
if (paxAge < 18){
    document.getElementById(`title`).innerHTML = `Il prezzo del biglietto è di ${finalPrice1} €`;
}
else if (paxAge > 65){
    document.getElementById(`title`).innerHTML = `Il prezzo del biglietto è di ${finalPrice2} €`;
}
else {
    document.getElementById(`title`).innerHTML = `Il prezzo del biglietto è di ${noDiscountedTicket} €`;
}


