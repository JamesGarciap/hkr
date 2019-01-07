console.log("Sock Merchant");

const n = 7;
[1, 2, 3]
const ar = [1,2,1,2,1,3,2];
const expected = 2;

const sockMerchant = (n, ar) => {
  let socksColors = [...new Set(ar)]
  let totalPairs = 0

  let amounts = socksColors.map((e) => {
    let times = 0;

    ar.forEach((i) => {
      if (i == e) {
        times++;
      }
    });

    return times;
  });

  amounts.forEach((e) => {
    let pairs = e / 2;

    if (pairs >= 1) {
      totalPairs = totalPairs + Math.floor(pairs);
    }
  });

  console.log(totalPairs);
}

const sockMerchantVersion2 = (n, ar) => {
  let totalPairs = 0;
  let amounts = [...new Set(ar)].map((e) => {
    let times = 0;

    ar.forEach((i) => { if (i == e) times++ });

    return times;
  });

  amounts.forEach((e) => {
    let pairs = e / 2;

    if (pairs >= 1) totalPairs = totalPairs + Math.floor(pairs);
  });

  console.log(totalPairs);
}

const getUniqueValues = () => {
  let uniqueValues = [];

  ar.forEach((e) => {
    if (!uniqueValues.includes(e)) {
      uniqueValues.push(e);
    }
  });
  return
}
/*
console.log('n = ', n);
console.log('ar = ', ar);
console.log('expected = ', expected);
*/
sockMerchantVersion2(n, ar);




// Other possible solutions by users
/*
var ones = {}, pairs = 0;
for (var i = 0; i < n; i++) {
    if (ones.hasOwnProperty(ar[i])) {
        pairs++;
        delete ones[ar[i]];
    } else {
        ones[ar[i]] = 0;
    }
}
return pairs
*/
/// Using reduce
/*
var ones = {};
return ar.reduce((pairs, i) => {
    if (ones[i]) {
        delete ones[i];
        return pairs + 1;
    } else {
        ones[i] = true;
        return pairs;
    }
}, 0);
*/
