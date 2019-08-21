
const getMessage = (number) => {
  let message;

  if (number % 3 == 0 && number % 5 == 0) {
    message = "Coolblue";
  } else if (number % 3 == 0) {
    message = "Cool";
  } else if (number % 5 == 0 ) {
    message = "Blue";
  } else {
    message = number;
  }

  return message
}

const getNumbers = () => {
  for (var i = 1; i < 101; i++) {
    console.log(getMessage(i));
  }
}

let chunk = "!!Level!\ncosito";

function collectInput(chunk) {
  chunk = chunk.split('\n');
  chunk.forEach((e) => {
    let text = e.toLocaleLowerCase();
    text = text.replace(/[^a-zA-Z ]/g, "");
    let textLetters = text.split("");
    let newWord = [];
    textLetters.forEach((letter) =>{
      newWord.unshift(letter);
    })
    newWord = newWord.join("");
    textLetters = textLetters.join("");
    if (newWord == textLetters) {
      console.log(1);
    } else {
      console.log(0);
    }
  })
}

//collectInput(chunk)

// Which of the following sorting algorithms has the best asymptotic runtime complexity?
// Bubble sort
// Heap sort
// Selection sort
// Insertion Sort OOOO
function odd(l, r) {
  let oddNumbers = [];

  for (var i = l; i < r + 1; i++) {
    if (i % 2 != 0) {
      oddNumbers.push(i);
    }
  }

  return oddNumbers;
}

//console.log(odd(2, 5));
//let arraySample = [1, 2, 3, 4, 5];

//console.log(arraySample.reduce((a, s) => a + s ));


let i = -5;
let j = -1;
let k = -3;


function getSecuenceNum(i, j, k) {
  let acum = i;

  for (let y = i + 1; y <= j; y++) {
    acum = acum + y;
  }

  for (let x = j - 1 ; x >= k; x--) {
    acum = acum + x;
  }

  return acum;
}

// 0 +1 +2+3+4+5+4+3+2+1+0-1
console.log(getSecuenceNum(i, j , k));
