// 1
function countDown(time) {
    let timer = setInterval(function(){
      time--;
      if(time <= 0){
        clearInterval(timer);
        console.log('DONE!');
      }
      else {
        console.log(time);
      }
  
    },1000)
  }
  
//   2
  function randomGame(){
    let num;
    let times = 0;
    let timer = setInterval(function(){
      num = Math.random();
      times++
      if(num > .75) {
        clearInterval(timer);
        console.log("It took " + times + " try/tries.");
      }
    },1000)
  }
  
//   3
  function isEven(num){
    return num % 2 === 0;
  }
  
//   4
  function isOdd(num){
    return num % 2 !== 0;
  }
  
//   5
  function isPrime(value) {
      for(let i = 2; i <= Math.sqrt(value); i++) {
          if(value % i === 0) {
              return false;
          }
      }
      return value > 1;
  }
  
//   6
  function numberFact(num, callback){
    return callback(num);
  }
  
//   7
  function find(arr, fn){
    for(let i=0; i<arr.length; i++){
      if(fn(arr[i])) return arr[i];
    }
  }
  
//   8
  function findIndex(arr, fn){
    for(let i=0; i<arr.length; i++){
      if(fn(arr[i])) return i;
    }
  }
  
//   9
  function specialMultiply(a,b){
    if(arguments.length === 1){
      return function(b){
        return a*b;
      }
    }
    return a*b;
  }