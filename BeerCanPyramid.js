//Given a budget (bonus), how many levels of squared beer cans could your beer pyramid have?
// Returns number of complete beeramid levels
var beeramid = function(bonus, price) {
  let counter = 0, squared = 1, tab = 0;
  while(bonus > tab){
    tab = tab + squared ** 2 * price;
    squared++; 
    counter++;
  }
  if(counter === 0) return 0; 
  if(tab <= bonus) return counter;
  if(tab > bonus) return counter -1;
}