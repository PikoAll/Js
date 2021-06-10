//console.log ci serve per fare delle stampe sulla consolo web
console.log("ciao")
console.log(56+3)

//per qualche worning
console.warn('attenzione')

//per errorre possiamo mettere
console.error('errore coglione')

//per creare una specie di tabella
console.table({name:'jonny', surname:'carota'})


//per pulire la consol si fa console.clear();



// Variabili  var,let,const

var nome='jonny'
console.log(nome)



// Tipi di dati da boolean,string,...... a strutture dati arry,oggetti,funzioni

// typeof ci dice il tipo di variabile
console.log(typeof nome)

// array
let nomi=['gino','dario']
console.log(nomi)

// oggetto
let persona={
    nome:'billy',
    eta: 25
}

console.log(persona)

persona.eta=66

console.log(persona)


// CAST o CONVERSIONE DI TIPO

let x=5

console.log(x)
console.log(typeof x)

x=String(x)   //oppure usare il toString
console.log(x)
console.log(typeof x)


// matematica Math Oggetto Math

let num1=24
let num2=6
let risultato=num1+num2

console.log('il risultato e '+risultato)

risultato=Math.PI

risultato=Math.sqrt(140)

risultato=Math.pow(3,2)
risultato=Math.min(22,7,1,9,4)

console.log(risultato)

// Stringhe
let parola='jonny'

risultato=parola.length

risultato=parola.charAt(2)

console.log(risultato)

// Array

let amici=['jonny','michi',256]

amici.push('giacomo')

console.log(amici)

risultato=amici.length


console.log(risultato)


// OGGETTI

let persona2 ={
    nome:'billy',
    eta:55
}



///// Data

let oggi=new Date()

console.log(oggi)  


//funzione

function saluta(){
    console.log('funzione saluta')
}

function saluta2(nome66){

}

saluta()


//OGGETTI  e METODI

let persona55={

    saluta: function(nome){
        console.log('ciao ' +nome+ ' oggetto')
    }

}

persona55.saluta('checco')


//cicli
for (let i=0; i<10; i++){

}

/*
while(condizion){
     
}
*/

// forEach

let vett=['mele','pere','banane']

vett.forEach(function(valore,index){
    console.log(valore+'  '+index)
})



// WINDOW OBJECT  ////////////////////////////////////
/*
ora utilizzeremo windosws come oggetto e facendo console.log di esso
vediamo tutti i metodi che si possono utilizzare per la pagina web da allert(che è il pop up
    ad altro)
*/

console.log(window)



//DOM Document Object Model  esso e composto da head(titolo,href,..) e body

console.log(document)  // fa riferimento alla pagina html index
console.log(document.body)
console.log(document.head)  

//    Selettori /////

//1 getByElementId()
console.log(document.getElementById('title'))

//prendere valore 
/*
console.log(document.getElementById('title').className)
*/

//cambio valore
document.getElementById('title').style.color='blue'
document.getElementById('title').innerText0='suca nuovo valore'


//3 query selection

//con query selection posso prendere tutto anche le classi.... basta mettere prima # e il coso identificativo
document.querySelector('#title').style.color='red' 
 

// child e Parent (figli e padri)








