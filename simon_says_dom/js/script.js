// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
//Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente,
//  nell'ordine che preferisce.
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



const numberList = document.getElementById('numbers-list')
const numArray = []

//function
function numRandom(min,max){
     return Math.floor(Math.random() * max) + min 
}


//Il ciclo for viene eseguito 5 volte
for( let i=0; numArray.length < 5; i++){

    let numRandomico = numRandom( 1, 50 )

    console.log (` il tuo numero random è:${numRandomico}`)

    if( !(numArray.includes( numRandomico ))){ //controllo numero se esiste già

        numArray.push ( numRandom( 1, 50)) //inserisco il numero
    }
    
    console.log ( numArray )
   
}

for( let i = 0; i < numArray.length; i++){
    //stampo dentro la lista del body tanti <li> quanti sono gli elementi dell' array
    numberList.innerHTML += `<li> ${ numArray[i] } </li>`
}

//funzione che faccia scoparire i numeri
let counter = 3 



const countdown = document.getElementById('countdown')
const answerForm = document.getElementById('answers-form');
const instructions =document.getElementById('instructions');

const timer = setInterval ( function() {
    countdown.innerHTML = counter--

    if( counter < 0){
        clearInterval( timer )
        numberList.classList.add('d-none')
        instructions.classList.add('d-none')
        answerForm.classList.remove('d-none')
    }
}, 1000)


const btn = document.querySelector( '.btn-primary')
const inputs = document.querySelectorAll( '.form-control')
const numeriUtenteCorretti = []
const message = document.getElementById( 'message')

console.log(inputs)

btn.addEventListener('click', function(event){
    event.preventDefault()


    for( let i = 0; i < inputs.length; i++ ){
       
    

    //confronto array
    if( numArray.includes( parseInt( inputs[i].value ))){
        numeriUtenteCorretti.push( inputs[i].value )
    }
    console.log( numeriUtenteCorretti, inputs[i].value, numArray.includes( parseInt(inputs[i].value)))
    }
    message.innerHTML = `Hai indovinato: ${ numeriUtenteCorretti.length }`
    console.log( numeriUtenteCorretti )
})