function averagePair(array, num){

  let backward = array.length - 1;
  let forward = 0;

  while (backward > forward){

      if ((array[forward] + array[backward]) / 2 > num){
          backward--;
      } else if ((array[forward] + array[backward]) / 2 < num){
          forward++;
      } else if ((array[forward] + array[backward]) / 2 === num){
          return true;
      } else {
          return null;
      }
  }
  return false;
}

averagePair([-1, 0, 1, 2, 3, 4, 5], 2.5);