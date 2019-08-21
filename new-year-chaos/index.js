console.log("New year chaos");

//const q = [1, 2, 5, 3, 4, 7, 8, 6];
// [1, 2, 3, 4, 5, 6, 7, 8];
// [1, 2, 5, 3, 4, 6, 7, 8]; // 5 Bribes 4 and 3
// [1, 2, 5, 3, 4, 7, 6, 8]; // 7 Bribes 6
// [1, 2, 5, 3, 4, 7, 8, 6]; // 8 Bribes 6
// const q = [5, 1, 2, 3, 7, 8, 6, 4]
//
//const q = [1, 2, 5, 3, 7, 8, 6, 4]
// [1, 2, 3, 4, 5, 6, 7, 8];
// [1, 2, 5, 3, 4, 6, 7, 8]; // 5 Bribes 4 and 3
// [1, 2, 5, 3, 7, 4, 6, 8]; // 7 Bribes 4 and 6
// [1, 2, 5, 3, 7, 8, 4, 6 ]; // 8 Bribes 6 and 4
// [1, 2, 5, 3, 7, 8, 6, 4 ]; // 6 Bribes 4

// Complete the minimumBribes function below.
function minimumBribes(q) {
  let bribes = 0;

  q.forEach((e, k) => {
    if (typeof(bribes) !== "string") {
      let order = k + 1;
      if (e != order) {
        let numberOfBribes = e - order;
        if (numberOfBribes > 2) {
          bribes = "Too cahotic";
          return false;
        }
        if (numberOfBribes > 0) {
          bribes = numberOfBribes + bribes;
        } else if (q[order] < e) {
          bribes = bribes + 1;
        }
      }
    }
  });

  return bribes;
}

console.log(minimumBribes(q));
