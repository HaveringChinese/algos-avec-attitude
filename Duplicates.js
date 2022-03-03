function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
    
    let counts = {};

    for(let num in arguments){
        counts[arguments[num]] = (counts[arguments[num]] || 0) + 1; 
    }

    console.log(counts);
    
    for (let key in counts){
        if(counts[key] > 1){
            return true;
        }
    }
    return false;
}

//OR 


areThereDuplicates(1, 4, 5, 6, 2)
areThereDuplicates(1, 4, 5, 6, 2, 2)


// soAreThereDuplicates(1, 4, 5, 6, 2, 2)


