function rowSumOddNumbers(n) {
    let numMax = 1;
    let sum = 0;
    for (let i = 2; i < n + 1; i++) {
        numMax += i * 2;
    }
    for (let i = 0; i < n; i++) {
        sum += numMax-2*i ;
    }
    console.log(numMax)
    console.log(sum)
  }
  rowSumOddNumbers(1)