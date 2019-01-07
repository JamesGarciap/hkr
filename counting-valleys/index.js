console.log("Counting valleys");

/*
const n = 8;
const s = "DDUUUUDD";
const expected =0;

const n = 10;
const s = "UDUUUDUDDD";
const expected =0;
*/
/*
     /\/\
    /    \
_/\/      \_

*/

/*
const n = 12;
const s = "DDUUDDUDUUUD";
const expected =2;
*/

/*
_    _ 1     /\_ 2
 \  / \    /
  \/  \/\/
  [-1, -1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1]
*/

/*
const n = 8;
const s = "UDDDUDUU";
const expected =1;

_/\      _ 1
   \    /
    \/\/
*/


/*
const n = 10;
const s = "DUDDDUUDUU";
const expected = 2;
*/
/*

  _          _
   \/\      /
      \  /\/
       \/

*/
function countingValleys(n, s) {
  if (typeof(s) == 'string') {
    let valleys = 0;
    let total = 0;

    s = s.split("")
    let toNumber = s.map((e) => {
      if (e  == "D") {
        return -1;
      }
      return 1;
    });

    toNumber.forEach((e, k) => {
      total = total + e;
      if (k > 0) {
        if ((total - e) < 0  && total == 0) {
          valleys++;
        }
      }
    });
    return valleys;
  }
}

console.log(countingValleys(n, s));
