// // VARIABILI
// var listaMail = [
//     "prova@mail.it",
//     "sempronio@mail.it",
//     "caio@mail.it",
//     "tizio@mail.it",
//     "yuri@mail.it",
//     "pinco@mail.it",
//     "pallino@mail.it"];
//
// var mailUtente = prompt('inserisci la tua mail');
// // console.log(mailUtente)
//
// document.getElementById('messaggio').innerHTML= "accesso non consentito"
//
// for (var i=0; i <= (listaMail.length -1); i++)
// {
//     if (mailUtente === listaMail[i]) {
//         document.getElementById('messaggio').innerHTML= "accesso consentito"
//     }
// }


//
// Gioco dei dadi
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

var numeroUtente = Math.floor(Math.random()*6)+1;
var numeroComputer = Math.floor(Math.random()*6)+1;
var messaggio;
if (numeroUtente > numeroComputer) {
    messaggio = "Hai vinto!"
} else if (numeroUtente < numeroComputer) {
    messaggio = "Il computer ha vinto :("
} else {
    messaggio = "Pareggio!"
}

document.getElementById('dado-utente').innerHTML = numeroUtente;
document.getElementById('dado-computer').innerHTML = numeroComputer;
document.getElementById('risultato').innerHTML = messaggio;
