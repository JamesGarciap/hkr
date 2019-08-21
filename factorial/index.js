
function factorial(n) {
    let nFactorial = 1;

    for (var i = 1; i < n + 1; i++) {
      nFactorial = nFactorial * i;
    }

    return nFactorial;
}
factorial(4);
