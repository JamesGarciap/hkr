console.log("Array rotation");

let d = 4;
let a = [1, 2, 3, 4, 5];
/*
//1
[2, 3, 4, 5, 1]
//2
[3, 4, 5, 1, 2]
//3
[4, 5, 1, 2, 3]
//
[5, 1, 2, 3, 4]
*/
// Complete the rotLeft function below.
function rotLeft(a, d) {
  for (var i = 0; i < d; i++) {
    let first = a.slice(0,1)[0];
    a.shift();
    a.push(first);
  }
  return a;
}

console.log(rotLeft(a,d));
