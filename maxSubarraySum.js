function maxSubarraySum(array, num){
  // add whatever parameters you deem necessary - good luck!

    //null if array shorter than num
    //create a max counter
    //create window of length num
    //test the window left to right through the array, adding to the right and subtracting from the left as you go
    //if the window sum is greater than max, bind its value to max
    //return the highest value max attains

    if(array.length < num){return null}
    
    let max = 0;
    let total = 0;
    
    //initialize total and max to first window range (0 to num)
    for(let index = 0; index < num; index++){
        total += array[index];
        max = total;
    }
    //restart window at far right edge of initial window, slide 1 index at a time, evaluating the new sum of that range each time
    for(let j = num; j < array.length; j++){
        total += array[j] - array[j - num];
        if(total > max){
            max = total;
        }
    }    
    return max; 
}
