console.log("2D Array-DS");

/*
let arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];
*/
let arr = [
  [0, -4, -6, 0, -7, -6],
  [-1, -2, -6, -8, -3, -1],
  [-8, -4, -2, -8, -8, -6],
  [-3, -1, -2, -5, -7, -4],
  [-3, -5, -3, -6, -6, -6],
  [-3, -6, 0, -8, -6, -7]
]
// Complete the hourglassSum function below.
function hourglassSum(arr) {
  let chunksSize = 4;
  let hourglassSize = 3;
  let maximunNumber = 0;

  arr.forEach((e, f, matrix) => {
    e.forEach((j, k, vector) => {
      let mainRow = vector.slice(k, hourglassSize + k );
      if (matrix[f+2]) {
        let lastRow = matrix[f+2].slice(k, hourglassSize + k );
        if (mainRow.length == 3) {
          let mainRowSum = mainRow.reduce((a, b) => a + b);
          let middleRowElement = matrix[f+1][k+1];
          let lastRowSum = lastRow.reduce((a, b) => a + b);
          let total = mainRowSum+ middleRowElement + lastRowSum;
          if (k == 0 && f == 0) {
            maximunNumber = total;
          } else {
            maximunNumber = (total > maximunNumber) ? total : maximunNumber;
          }
        }
      }
    })
  })

  return maximunNumber;
}

console.log(hourglassSum(arr))
