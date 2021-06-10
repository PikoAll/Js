
let donato={
    nome:"",
    cognome:"",
    eta:0
}

let piko={
    nome:"",
    cognome:"",
    eta:0
}

let coso={
    nome:"",
    cognome:"",
    eta:0
}


let n = utente => {
    utente.nome=prompt("inserisci nome")
    utente.cognome=prompt("inserisci cognome")
    utente.eta=prompt("inserisci nome")
    
}


n(donato)
n(piko)
n(coso)

console.log(donato)
console.log(piko)
console.log(coso)


//debugger


let maggioreEta=function maggiore(x1,x2,x3){

    if(x1.eta > x2.eta && x1.eta>x3.eta){
        console.log('il maggiore e: ',x1)
    }else if(x2.eta > x1.eta && x2.eta>x3.eta){
        console.log('il maggiore e: ',x2)
    }else{
        console.log('il maggiore e: ',x1)
    }

}




maggioreEta(donato,piko,coso)


