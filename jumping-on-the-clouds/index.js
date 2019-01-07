console.log("Jumping on the Clouds");
const n = 7;
const c = [0, 0, 1, 0, 0, 1, 0];
const expected = 4;
/*

const n = 6;
const c = [0, 0, 0, 1, 0, 0];
const expected = 3;
*/

function jumpingOnClouds(c) {
  let jumps = 0;
  let nextCloud = 0;

  c.forEach((e, k) => {
    if (nextCloud == k) {
      let next = k + 1;
      if (c[next] == 0) {
        // We can jump directly
        if (c[next + 1] == 0) {
          // We can jump twice
          nextCloud = next + 1;
          jumps++;
        } else {
          nextCloud = next;
          jumps++;
        }
      }
      else if (c[next + 1] == 0) {
        nextCloud = next + 1;
        jumps++;
      }
    }
  });

  return jumps;
}

console.log(jumpingOnClouds(c));
