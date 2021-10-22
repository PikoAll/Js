console.log('ciao22')
// Variabili
// var ,let, const

var nome='jonny'
console.log(nome)

nome=6
console.log(nome)
console.log(typeof nome)


//array
let vettore=[2,2,3,4,'ciao']
console.log(vettore)
console.log(vettore[0])

//oggetti
let persona={
    nome:'jonny',
    eta:25
}

console.log(persona)

persona.nome='gianni'
console.log(persona)

//conversione di tipi o Cast

let valore

valore=5
valore=String(valore)
console.log(valore)

valore='5.44'
valore=Number(valore)
console.log(valore)

valore='5.55'
valore=parseFloat(valore)
console.log(valore)

//numeri
console.log('-----------------------------------------------')

risultato=Math.min(3,22,4,1,3,8)
console.log(risultato)

risultato=Math.random(2,6)
console.log(valore)

//---------------------------------------------
//                 ARRAY push e pop
//---------------------------------------------

//---------------------------------------------
//                 OGGetti
//---------------------------------------------


const persona22={
    nome:'billly',
    eta:'22'
}

console.log(persona22)


//---------------------------------------------
//                 Funzioni
//---------------------------------------------


function salutare() {
    console.log('ciao Funzione')
}


salutare()


// funzione expression
const doppio = function (x){
    return x*2
}

console.log(doppio(25))

//metodi propri

const persona44 = {

    saluta : function(){
        console.log('metodo oggetto')
    }

}

persona44.saluta()


//---------------------------------------------
//                 Cicli
//---------------------------------------------

for (let i = 0;i < 10;i++){
    console.log(i)
}

//ForEach
const frutta = ['banane','mele']

frutta.forEach(function (value,index){
    console.log(value,index)
})



//---------------------------------------------
//                 DOM
//                 Windows OBJECT
//              HTML, css
//---------------------------------------------
/* DOM vedilo come un albero che lavora con html tramite i tag e la divisione tra body e ... */

console.log(document.links)
console.log(document.all)


//selettori

console.log(document.getElementById('titolo'))

//prendere valore
console.log(document.getElementById('titolo').className)

//cambiare valore
document.getElementById('titolo').style.color='red'
document.getElementById('titolo').textContent='hola'


//query
console.log('query')
console.log(document.querySelector('#titolo'))
console.log(document.querySelector('#classe'))
console.log(document.querySelector('h1'))


console.log(document.getElementById('titolo'))  // ce anche elements che torna una lista
let lista=document.getElementsByName('a')
console.log(lista )
