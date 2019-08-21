
let s = "javascriptloops";

function loops(s) {
  let vowelsPath = ["a", "e", "i", "o", "u"];
  let vowelsArray = [];
  let consonantsArray = [];

  for (let i = 0; i < s.length; i++) {
    if (vowelsPath.indexOf(s[i]) != -1) {
      vowelsArray.push(s.charAt(i));
    } else {
      consonantsArray.push(s.charAt(i));
    }
  }

  vowelsArray.concat(consonantsArray).forEach(e => console.log(e));
}

loops(s);
