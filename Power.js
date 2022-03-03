function power(base, exp){
  if(exp < 1) return 1;
  return base * power(base, (exp - 1));
}

power(5, 5)