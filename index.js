let readlineSync = require('readline-sync');
console.log('Welcome to Quiz! Are You Excited?');
console.log(" ");
let userName = readlineSync.question('What is your name? ');
console.log(" ");
console.log('Welcome, Play your best ' + userName + '!!');
console.log(" ");

let score = 0;
//function
function play(question, answer) {
  let userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log('Congrats! You are right..');
    score = score + 1;
  }
  else {
    console.log('Sorry! You loose :-( ');
    score = score - 1;
  }
}


console.log('Ready to Play ? ');
console.log('');
console.log('Your current score is ' + score);
console.log('');
console.log('Remeber there is -1 for every wrong answer ');

let questions = [
  {
    question: 'Who is the current captain of Indian Team?',
    answer: 'Rohit Sharma'
  },
  {
    question: 'Who is known as Run Machine ?',
    answer: 'Virat Kohli'
  },
  {
    question: 'Which team won most T20I world cups ?',
    answer: 'Australia'
  },
  {
    question: ' Who is the top scorer in Womens Cricket Team ?',
    answer: 'Mithali Raj'
  },
  {
    question: 'Which captian won most ICC Trophies  ?',
    answer: 'MS Dhoni'
  }
];

//loop around object
for (let i = 0; i < questions.length; i++) {
  let curr = questions[i];
  play(curr.question, curr.answer);
}

console.log('Game Over!! Here is your Score ');
console.log('Yayyyy! You scored : ' + score);