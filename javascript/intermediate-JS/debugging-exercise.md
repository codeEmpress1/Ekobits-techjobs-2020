## Debugging exercise
Q: 
What does the throw keyword do?

Ans: 
It allows the return of specific error or exception

Q: What does the finally keyword do?

Ans: Finally ensures that code within it runs irrespective of the outcome of preceeding codes.

Q: What is the difference between a TypeError and ReferenceError?

Ans: TypeErrors occur when JavaScript is unable to perform a certain operation on a data type while ReferenceErrors occur when JavaScript does not have a reference to the variable in memory.

Q: How do you create a snippet in the Chrome dev tools?

Ans: Open the sources tab, head to the left hand panel and click on snippets, then right click inside the tab and click 'new'

Q: In the Chrome dev tools, on the right hand side of the sources tab, there is a "pause" button which allows you to "pause on caught exceptions." What is an exception?

Ans: An exception is an error that occurs in your program. Caught exceptions are errors that are evaluated in a try/catch block

Q: How do we "catch" errors in JavaScript? Give an example with code for what that might look like.

Ans: Errors are caught by wrapping the code in a try/catch block
##### Example
        let data = {

        }
        try {
            data.somevalue(); 
        }
        catch(e) {
            console.log("This is a caught error", e)
        }


1. `person;`

Type of error = ReferenceError

Because person is not defined and we are trying to access it.


2. 
        let data = {};
        data.displayInfo();Ans:
Type of error = typeError

Because data does not have a property called displayInfo which means its undefined and invoking undefined would return typeError because it is not a function. It can be fixed by first 


3.      let data = {};
        data.displayInfo.foo = "bar";

Type of error = TypeError

Because data does not have displayInfo which means it is undefined and undefined does not have the prperty foo. It can be fixed by


4.      function data(){
            let thing = "foo";
        }
        data();
        thing;

Type of error = ReferenceError
Because variable thing is only available in the scope of data. And we are trying to access it outside its scope.


### PART 2
1. 
        for(let i=0; i > 5; i++){
            console.log(i);
        }
##### Ans
        for(let i=0; i <> 5; i++){
            console.log(i);
        }
The condition was not correct.

2. 
        function addIfEven(num){
            if(num % 2 = 0){
                return num + 5;
            }
            return num;
        }
##### Ans
        function addIfEven(num){
            if(num % 2 === 0){
                return num + 5;
            }
            return num;
        }
The comparison in the if statement is not correct. Assignment was used insteadf of comparison.

3. 
        function loopToFive(){
            for(let i=0, i < 5, i++){
                console.log(i);
            }
        }
##### Ans
        function loopToFive(){
            for(let i=0; i < 5; i++){
                console.log(i);
            }
        }
Comma was used in the for loop instead of semi-colon

4. 
        function displayEvenNumbers(){
            let numbers = [1,2,3,4,5,6,7,8];
            let evenNumbers = [];
            for(let i=0; i<numbers.length-1; i++;){
                if(numbers % 2 = 0); {
                    evenNumbers.push(i);
                }
                return evenNumbers;
            }
        }
        displayEvenNumbers();
##### Ans
        function displayEvenNumbers(){
            let numbers = [1,2,3,4,5,6,7,8]
            let evenNumbers = []
            for(let i=0; i<numbers.length; i++){
                if(numbers[i] % 2 === 0) {
                    evenNumbers.push(numbers[i])
                }
            }
            return evenNumbers;
        }
- Each part of the for loop should be seperated with ; and not ,
- There should be no ; at the end ofthe for loop
- Theere should be no ; at the end of the if statement

- The loop condition should be i < number. length
- Assignment was used instead of comparison in the if statement
- The if should check the valye at each iteration of the array i.e numbers[i] and not the entire array.
- The value is what we need to push into the evennumberArrat not the index
- We should return after the loop and not within the body of the loop
