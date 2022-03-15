function addBinary(a,b) {
    if(Number.isInteger(a) && Number.isInteger(b)) {
      let sum = a + b;
      let binSum = [];
      let numExt = 0;
      let oddNum = false;
      let two = 2;
      
      if (sum % 2 !== 0) {
        oddNum = true;
        sum -= 1;
      }
      
      while (sum > (two - 2)) {
        numExt = numExt + 1;
        two *= 2;
      }

      binSum.push(1);
      sum = sum - Math.pow(2,numExt);
      numExt -= 1;

      for (; numExt > 0; numExt--) {
          if (sum >= Math.pow(2, numExt)) {
            binSum.push(1);
            sum -= Math.pow(2, numExt);
          }else{
            binSum.push(0);
          }
      }

      if (oddNum) {
        binSum.push(1);
      }else{
        binSum.push(0);
      }
      
      console.log('arr:', binSum);

      return binSum.join('');
      }else{
      return'Something is wrong, no results!';
    }  
}
  
addBinary(1,5)