function capitalizeWords (arr) {
  //base case when array length is 0
  //capitalize the first word of each array
  //splice array of that word
  
      if(arr.length === 1) return arr[0].toUpperCase();
  
      return [arr[0].toUpperCase()].concat(capitalizeWords(arr.splice(1)));
  }
  
  // let words = ['i', 'am', 'learning', 'recursion'];
  // capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
  
  
  //4 lines bitch!
  function capitalizeWords (arr) {
      if(arr.length === 1) return arr[0].toUpperCase();
      return [arr[0].toUpperCase()].concat(capitalizeWords(arr.splice(1)));
  }
  