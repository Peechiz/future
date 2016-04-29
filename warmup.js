(function(parameter, two) {
 console.log(parameter)
 console.log(two)
})("one");
// logs "one"

function returnsNothing() {
    var x = 50;
    x;
}
// nothing happens

var x = returnsNothing();
console.log(x);
// [function]

var yFunction = returnsNothing;
console.log( yFunction );
console.log( yFunction() );
// [function]
// second one returns nothing

function addN(n){
 return function(x) {
   return x + n;
 }
}

var addSeven = addN(7);
var addNine = addN(9);

console.log(addSeven);    // [funciton]
console.log(addNine);     // [function]
console.log(addSeven(8)); // 15
console.log(addNine(1));  // 10

function callThisCallback(callbackFunction) {
    return callbackFunction(10);
}

function callbackWithParam(callbackFunction, inputToCallback){
    return callbackFunction(inputToCallback);
}

console.log(callThisCallback(addSeven)); // 17
console.log(addSeven());                 // 7

console.log( callbackWithParam(addSeven, 7) ); // 14
console.log( addSeven(7) );                    // 14

function reverseString(inputString) {
    var outputString = "";

    for(var i = inputString.length - 1; i >= 0; i--) {
        var currentChar = inputString[i];
        outputString += currentChar;
    }
    return outputString;
}

function isThisAPalindrome(inputString) {
    var reversed = reverseString(inputString);
    return inputString === reversed;
}

console.log(isThisAPalindome("hello"));  // false
console.log(isThisAPalindome("bob"));    // true
console.log(isThisAPalindome("boB"));    // false
console.log(isThisAPalindome("racecar"));// true
