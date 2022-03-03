function sum(num){
  var total = 0;
  for(let i = 0; i < num; i++){
      total += i;
  }
  return total;
};

console.log(sum(10));