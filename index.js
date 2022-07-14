const num = [ 10,20,30,40,60,5,8];
function myArrayMax(num) {
  let len = num.length;
  let max = -Infinity;
  while (len--) {
    if (num[len] > max) {
      max = num[len];
    }
  }
  return max;
}

console.log(num.sort());
console.log(myArrayMax(num));