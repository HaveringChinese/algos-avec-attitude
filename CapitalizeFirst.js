function capitalizeFirst (arr) {

  //capitalize the first character of each string in an array
  //base case when array length is 0
  //to upper case the first character of each string
  //splice the array and recursively call it again on the first string

  if(arr.length === 1) return arr[0].slice(0, 1).toUpperCase() + arr[0].slice(1);
  let cappedArr = [];
  cappedArr.push(arr[0].slice(0, 1).toUpperCase() + arr[0].slice(1));
  return cappedArr.concat(capitalizeFirst(arr.slice(1)));
}
// capitalizeFirst(['car']);
capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']


 // let newArray = [];

 //  function helper(arr){
 //  if(arr.length === 0) return null;

 //  newArray.push(arr[0].charAt[0].toUppercase())

 //  return capitalizeFirst(arr.splice(1))
 //  }

 //  return newArray;