/*

Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
*/



// memorizziamo gli elementi dei campi di input
const kmNumberElement = document.getElementById("km-number");
const userAgeElement = document.querySelector("#user-age");

// mi salvo l'ELEMENTO del pulsante
const buttonElement = document.querySelector("form input[type='button']");

// mi salvo l'ELEMENTO dove stamperò il risultato
const resultElement = document.querySelector("#result-container span");

// prelevo l'ELEMENTO dell'errore
const errorElement = document.querySelector("#error");


// variabile che conterrà il prezzo base da eventualmente scontare
let basePrice;
// variabile che conterrà il prezzo finale eventualmente scontato
let finalPrice;



// eseguire i calcoli solo alla pressione del pulsante
buttonElement.addEventListener("click",
    function() {
    
        if( ! (kmNumberElement.value < 1) ) {
            // se non ci sono errori 


            // calcolo inizialmente il valore base del prezzo dal scontare
            basePrice = kmNumberElement.value * 0.21
                                
            // per sicurezza all'inizio do a finalPrice il valore iniziale
            finalPrice = basePrice;

            // controllare se utente minorenne
            if(userAgeElement.value < 18) {

                console.log("l'utente è under 18");
                finalPrice = basePrice - (basePrice * 0.2);
                resultElement.innerHTML = "Sei minorenne, hai diritto ad uno sconto del 20%<br>";

            } else if (userAgeElement.value >= 65) {

                console.log("l'utente è over 65");
                finalPrice = basePrice - (basePrice * 0.4);
                resultElement.innerHTML = "Sei over 65, hai diritto ad uno sconto del 40%<br>";

            }

            // formattiamo finalPrice in modo che abbia sempre due decimali
            finalPrice = finalPrice.toFixed(2);

            console.log(finalPrice);


            resultElement.innerHTML += `Il prezzo del tuo biglietto è di <span id="price">${finalPrice}€</span>`;

            // rifaccio visualizzare l'elemento html
            document.querySelector("#result-container").style.display = "block";

            // a prescindere che l'errore fosse stato notificato o meno, per sicurezza azzero il contenuto del messaggio
            errorElement.innerHTML = "";
        } else {
            // ci sono errori
            errorElement.innerHTML = "C'è stato un errore, fai attenzione a scrivere numeri positivi nei campi";
        }
       
    }
)