
//pure recursion

function fib(n){
  if (n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}

// fib(5)[5] + fib(4)[3] == 8
//     fib(4)[2] + fib(3)[3] == 5 
//         fib(3)[2] + fib(2)[1] == 3
//             fib(2)[1] + fib(0)[1] == 2

fib(6);

//helper version
// function fib(num){
//     let fibSequence = [1, 1];
//     let x = 0;
//     function helper(num){
//         if(fibSequence.length === num) return; 
//         return helper(num)
//     }
//     return fibSequence[num]
// }
