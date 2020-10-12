// PART 1
// DIFFERENCE
function difference(num1, num2) {
    let ans = num1 - num2;
    return ans;
}

// PRODUCT
function product(num1, num2) {
    let ans = num1 * num2;
    return ans;
}

// PRINT DAY
function printDay(num){

    const DAYS_OF_WEEK = {
      1: "Sunday",
      2: "Monday",
      3: "Tuesday",
      4: "Wednesday",
      5: "Thursday",
      6: "Friday",
      7: "Saturday",
    };
    return DAYS_OF_WEEK[num];
}

// LAST ELEMENT
function lastElement(arr) {
    let ans = arr.pop();
    return ans;
}

// NUMBER COMPARE
function numberCompare(num1, num2) {
    if(a === b){
        return 'Numbers are equal';
    } else if(a > b){
        return 'First is greater';
    }
    return 'Second is greater';
}

// SINGLE LETTER COUNT
function singleLetterCount(str, letter) {
    let count = 0;
    for(let i = 0; i < str.length; i++){
      if(str[i].toLowerCase() === letter.toLowerCase()){
        count++;
      }
    }
    return count;
}

// PART 2
// MULTIPLE LETTER COUNT
function multipleLetterCount(str) {
    let ans = {};
    for(let i = 0; i < str.length; i++){
      if (!(str[i] in ans)){
        ans[str[i]] = 1;
      } else {
        ans[str[i]]++;
      }
    }
    return ans;
}

// ARRAY MANIPULATION
function arrayManipulation(arr, command, position, val) {
    if(command === 'remove'){
        if(position === 'end'){
          return arr.pop();
        }
          return arr.shift();
      }
      else if(command === 'add'){
        if(position === 'end'){
          arr.push(val)
          return arr;
        }
        arr.unshift(val)
        return arr;
      }
}


// IsPALINDROME
function isPalindrome(str){
    // return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
  
    for(let i =0; i < str.length/2; i++){
      if(str[i].toLowerCase() !== str[str.length-1-i].toLowerCase()){
        return false;
      }
    }
    return true;
  }

//   PART 3
// GAME
function rockPaperScissors() {
  function generateChoices(num){
      if(num <= .33) return "rock";
      else if(num <= .66) return "paper";
      return "scissors";
    }
  
    let userChoice = prompt("Choose rock, paper or scissors").toLowerCase();
    let comChoice = generateChoices(Math.random());
  
  
    let answers = ["rock", "paper", "scissors"];
  
    if(!userChoice || answers.indexOf(userChoice) === -1){
      return "Please select a valid option";
    }
  
    if(userChoice === comChoice) return "Tie!";
  
    if(userChoice === "rock" && comChoice === "paper") return "You lose, computer picked " +  comChoice;
    if(userChoice === "paper" && comChoice === "scissor") return "You lose, computer picked " +  comChoice;
    if(userChoice === "scissor" && comChoice === "rock") return "You lose, computer picked " +  comChoice;
  
    return "You win! Computer picked " +  comChoice;

}