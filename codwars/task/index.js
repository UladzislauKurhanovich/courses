Array.prototype.square = function() {
  let res = this.map((i) => {
    return i * i
  });
  return res;
}

Array.prototype.cube = function() {
  let res = this.map((i) => {
    return i * i * i
  });
  return res;
}

Array.prototype.average = function() {
  let sum = 0;
  this.forEach((i) => {
    sum += i 
  });
  return Math.floor(sum / this.length);
}

Array.prototype.sum = function() {
  let sum = 0;
  this.forEach((i) => {
    sum += i 
  });
  return sum;
}

Array.prototype.even = function() {
  let res = this.filter((i) => {
    return i % 2 == 0;
  });
  return res
}

Array.prototype.odd = function() {
  let res = this.filter((i) => {
    return i % 2 == 1;
  });
  return res
}

var numbers = [1, 2, 3, 4, 5];
numbers.average()
