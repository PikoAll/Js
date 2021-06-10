"use strict"; // consigliato da mettere sempre

let contry = "";
let population = "";

console.log(" ciao come stai222");

//arrow function  // e una funzione streus

let calcola = (x) => 80 - x;

let y = calcola(3);

console.log(y);

let calcola2 = (x1, x2 = 5) => {
  return x1 + x2;
};

y = calcola2(5, 8); //posso omettere il secondo parametro  perche di dafault e 5

console.log(y);

//salvo in una variabile un metodo

let prova = function somma3(a, b) {
  return a + b;
};

console.log(prova(2, 2));

//vet=[2,2]

/////////////////////

let dol = [85, 54, 41];
let col = [23, 34, 27];

let vettl = new Array(22, 55, "ciao");

console.log(vettl);

////////////////////////////////// sezione 4
