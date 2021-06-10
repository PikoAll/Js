'use strict';
/*
console.log(document.querySelector('.message'));
console.log('##############');
console.log(document.querySelector('.message').textContent);
console.log('##############');

//per mettere gli smile fare win+.
//con questa riga sotto ho modificato il valore scritto che cera prima
document.querySelector('.message').textContent = ' correct number 😃😃';
console.log(document.querySelector('.message'));

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//////////////////////////////////////////       //////////
console.log(document.querySelector('.guess').value); //stampa il valore che ce al momento e nullo
document.querySelector('.guess').value = 23; // setta il valore a 23
*/

/*
const x = function () {
  console.log(23);
};

console.log('parte2');
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '😒 no number';
  }


});
*/

//const valoreVincita = 20;
let valoreVincita = Math.trunc(Math.random() * 20) + 1; //x 20 perche il nostro valore deve essere compreso tra 0 e 20
console.log(valoreVincita, 'il valore che bisogna indovinare');
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const valoreTemp = Number(document.querySelector('.guess').value);
  console.log(valoreTemp);

  if (valoreTemp == valoreVincita) {
    document.querySelector('.message').textContent = '😃 hai vinto';
    document.querySelector('.number').textContent = valoreVincita;
    document.querySelector('body').style.backgroundColor = '#60b347';
  } else if (score == 0) {
    document.querySelector('.message').textContent = 'Game Over';
  } else if (valoreTemp < valoreVincita) {
    document.querySelector('.message').textContent =
      'inserisci un numero piu alto';
    document.querySelector('.guess').value = NaN;
    score--;
    document.querySelector('.score').textContent = score;
  } else if (valoreTemp > valoreVincita) {
    document.querySelector('.message').textContent =
      'inserisci un valore piu basso';
    document.querySelector('.guess').value = NaN;
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'Riprova';
    document.querySelector('.guess').value = NaN;
    score--;
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'start guessing..';
  document.querySelector('.guess').value = NaN;
  score = 20;
  document.querySelector('.score').textContent = score;
  valoreVincita = Math.trunc(Math.random() * 20) + 1;
  console.log(valoreVincita, 'il valore che bisogna indovinare');
});
