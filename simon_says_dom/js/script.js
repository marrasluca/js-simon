// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
//Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente,
//  nell'ordine che preferisce.
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



const numberlist = document.getElementById('number-list')
const numArray = []

//function
function numRandom(min,max){
     return Math.floor(Math.random() * max) + min 
}


//Il ciclo for viene eseguito 5 volte
for( let i=0; numArray.length < 5; i++){

    let numRandomico = numRandom( 1, 50 )

    console.log (` il tuo numero random è:${numRandomico}`)

    if( numArray.includes( numRandom)){ //controllo numero se esiste già

        numArray.push ( numRandom( 1, 50)) //inserisco il numero
    }
    
    console.log ( numArray )
   
}