function collectStrings(obj){
  //base case when object iterated through (recursively)
  //loop through keys of object checking if value is string, push to array
  //if value is object, recursively continue (note! you must build on the previously existing array by concatenating future recursive additions to the array)
  //if value is array, just add it in

  let strings = [];

  for (var key in obj){

      if(typeof obj[key] === 'string'){
          strings.push(obj[key]);
      } else if (typeof obj[key] === 'object' ){
         strings = strings.concat(collectStrings(obj[key]));
          // && !Array.isArray(obj[key])
      }         
  }
  return strings;    
}

const lala = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

collectStrings(lala) // ["foo", "bar", "baz"])