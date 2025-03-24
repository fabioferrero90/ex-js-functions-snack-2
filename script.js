// 🏆 Snack 1
// Crea una funzione che somma due numeri.

//     Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
//     Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
//     Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

function somma(num1, num2) {
  return num1 + num2;
}

const somma2 = function (num1, num2) {
  return num1 + num2;
}

const somma3 = (num1, num2) => num1 + num2;

console.log(somma(1, 2));
console.log(somma2(1, 2));
console.log(somma3(1, 2));


// 🏆 Snack 2
// Crea una arrow function che calcola il quadrato di un numero.

//     Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

const quadrato = (num) => num * num;

console.log(quadrato(2));

// 🏆 Snack 3
// Crea una funzione eseguiOperazione

//     Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

const somma4 = (a, b) => a + b;
const moltiplica = (a, b) => a * b;

const eseguiOperazione = (a, b, operazione) => operazione(a, b);

console.log(eseguiOperazione(3, 4, somma)); // 7
console.log(eseguiOperazione(3, 4, moltiplica)); // 12


// 🏆 Snack 4
// Crea un generatore di funzioni creaTimer

//     Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

const creaTimer = (tempo) => {
  return () => {
    setTimeout(() => {
      console.log("Tempo scaduto! (Snack 4)");
    }, tempo);
  };
}
const timer = creaTimer(2000);
timer();


// 🏆 Snack 5
// Crea una funzione stampaOgniSecondo con setInterval.

//     Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

//     Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

const stampaOgniSecondo = (messaggio) => {
  const interval = setInterval(() => {
    console.log(messaggio);
  }, 1000);
  setTimeout(() => {
    clearInterval(interval);
  }, 5000);
}
stampaOgniSecondo("Ciao!");



// 🏆 Snack 6
// Crea un contatore automatico con setInterval

//     Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

const creaContatoreAutomatico = (intervallo) => {
  let contatore = 0;
  return () => {
    const interval = setInterval(() => {
      contatore++;
      console.log(contatore);
    }, intervallo);
    setTimeout(() => {
      clearInterval(interval);
    }, 5000)
  };
}
const contatore = creaContatoreAutomatico(1000);
contatore();


// 🏆 Snack 7
// Crea una funzione che ferma un timer dopo un certo tempo

//     Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

const eseguiEferma = (messaggio, tempoAvvio, tempoStop) => {
  let contatore = 0;
  const interval = setInterval(() => {
    contatore++;
    console.log(messaggio);
  }, tempoAvvio);
  setTimeout(() => {
    clearInterval(interval);
  }, tempoStop);
}
eseguiEferma("Snack 7", 1000, 5000);

// 🎯 Snack 8 (Bonus)
// Crea una funzione che simula un conto alla rovescia

//     Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.

function contoAllaRovescia(n) {
  let contatore = n;
  const interval = setInterval(() => {
    if (contatore > 0) {
      console.log(contatore);
      contatore--;
    } else {
      clearInterval(interval);
      console.log("Tempo scaduto! (Snack 8 - Bonus)");
    }
  }, 1000);
}
contoAllaRovescia(5);

// 🎯 Snack 9 (Bonus)
// Creare una funzione che esegue una sequenza di operazioni con ritardi

//     Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

//     Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.

function operazione1() {
  console.log("Operazione 1 completata");
}

function operazione2() {
  console.log("Operazione 2 completata");
}

function operazione3() {
  console.log("Operazione 3 completata");
}

function sequenzaOperazioni(operazioni, intervallo) {
  let indice = 0;
  const interval = setInterval(() => {
    if (indice < operazioni.length) {
      operazioni[indice]();
      indice++;
    } else {
      clearInterval(interval);
    }
  }, intervallo);
}
const operazioni = [operazione1, operazione2, operazione3];
sequenzaOperazioni(operazioni, 2000);

// 🎯 Snack 10 (Bonus)
// Creare un throttler per limitare l’esecuzione di una funzione

//     Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.

//     Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.

function creaThrottler(funzione, limite) {
  let ultimoEsecuzione = 0;
  return function (...argomenti) {
    const oraCorrente = Date.now();
    if (oraCorrente - ultimoEsecuzione >= limite) {
      funzione.apply(this, argomenti);
      ultimoEsecuzione = oraCorrente;
    }
  }
}

const throttledLog = creaThrottler(() => console.log("Eseguito!"), 2000);

throttledLog(); // ✅ "Eseguito!"
throttledLog(); // ❌ Ignorato (chiamato troppo presto)
setTimeout(throttledLog, 2500); // ✅ "Eseguito!" (dopo 2.5 secondi)