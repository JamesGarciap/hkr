console.log("Repeated String");

let letter = "a";

/*
let s = "babbaabbabaababaaabbbbbbbababbbabbbababaabbbbaaaaabbaababaaabaabbabababaabaabbbababaabbabbbababbaabb";
let n = 860622337747;
let expected = 395886275361;
let s = "aba";
let n = 10;
let expected = 7;

let s = "a";
let n = 1000000000000;
let expected = 1000000000000;

*/
let s = "ababa";
let n = 3;
let expected = 2;



function repeatedString(s, n) {
  let times = (s.match(/a/g) || []).length;
  let repeatTimes = parseInt(n / s.length) * times;
  let moduleResult = n % s.length;
  let newString = s.substring(0, moduleResult);
  let timesInModuleResult = (newString.match(/a/g) || []).length;

  times = repeatTimes + timesInModuleResult;

  return times;
}

console.log(repeatedString(s, n));

/*
const as = s.split("").filter(c => c === "a").length;
console.log(as);
const times = parseInt(n / s.length);
console.log(times);
const rest = n % s.length;
console.log(rest);

const totalAs = times * as
      + s.slice(0, rest).split("").filter(c => c === "a").length;

//console.log(totalAs);




/*
babbaabbabaababaaabbbbbbbababbbabbbababaabbbbaaaaabbaababaaabaabbabababaabaabbbababaabbabbbababbaabb
860622337747
Expected OutputDownload
395886275361
*/
