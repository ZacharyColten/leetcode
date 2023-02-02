/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    return x.toString().split('').reverse().join('') == x;
};

// Commented Code below (remove block comments to view)

/*
    //-Use the toString() method to convert the number to a string
    //-Use the split('') method to return a new array with every charactor of the string as its own element.
    //-Use the reverse() method to reverse the new created array
    //-Use the join('') method to join all elements of the array into a string

       //   x   toStr    a     split      b      reverse      c       join      d = x.toString().split('').reverse().join('')
       //  125    ->   "125"     ->    [1,2,5]     ->      [5,2,1]     ->     "521"

//    a = x.toString()

//    b = a.split('')

//    c = b.reverse()

//    d = c.join('')

var isPalindrome = function (x) {
    //This statement returns true or false using an equality comparison operator comparing resulting string and original number.
    //Because we are comparing a number type data with a string type data for equality, we are unable to use the strict equality operator.
    return x.toString().split('').reverse().join('') == x;  // or `${x}`.split('').reverse().join('') == x;
};

*/

// Follow up: do it without converting to string: explanation found at URL: https://leetcode.com/problems/palindrome-number/solutions/2658882/solving-it-without-using-string-in-javascript/?q=javascript&orderBy=most_votes

/*

var isPalindrome = function (x) {
    if (x < 0) return false;
    let num = x;
    let reverse = 0;
    while (x > 0) {
        reverse = reverse * 10 + (x % 10)
        x = Math.floor(x / 10)
    }
    return reverse === num;
};

*/

/*Step one : declare two varables , one for reverse number and one for original number
since we are going to use reverse algorithm, the original number is gonna change so we need a refrence to the original number to compare it to the reversed one.

let num = x;
let reverse = 0
Step two : reverse algorithm
first of all if it's negative number, it is not Palindrome because in one side we have a negative sign and not on the other side
lets see how we can reverse a number like 124
so we have the reverse variable and it is set to 0 and we want to somehow get the last digit and add it to our variable.
we can find the last digit of a number by diving it by 10 , and the reminder is our last digit (we can get reminder of a number using % operator)

124 / 10 = 12.4  (124 % 10 = 4) // 4 is the reminder
321/10 = 32.1  (321 % 10 = 1)  // 1 is the reminder
awesome! so now we know how to find the last digit and we add it to reverse
now we need to find a way to remove the last digit so we can add another digit to our reverse variable
but how? when we divide our number by 10 , we get a decimal point. in the examples above we have 12.4 and 32.1. if we remove those we end up with 12 and 32 (in javascript we do it with Math.floor() method)
what now? now we divide the new number by 10 , and get the reminder, so lets do it

first step
124 / 10 = 12.4 // we get the 4 and add it to the reverse . remove the decimal point and we have 12
second step
12 / 10 = 1.2 // we get the 2  but we don't add it to reverse! because we will get 6. to go one level up we multipy the reverse by 10 so 4 * 10 = 40 and then we add the 2 so we have 42 .
we keep doing (aka loop) this untill when we remove the decimal point , we get 0 and that's when we are done!

Step three : lets implement this

// first if number is negative we return false, meaning it's not palindrome;
if(x < 0) return false;
// our variables
let num = x;
let reverse = 0;

// we use a while . we keep going untill we get x = 0
while( x > 0) {
    // multiply reverse by 10 and add the reminder
    reverse = reverse * 10 + ( x % 10 )
	
    // devide x by 10 and remove decimal point. if x === 0 then it exists the loop
    x = Math.floor(x / 10)
}

// now we are out of the while loop and we have the reverse number
// lastly we compare the original number with the reverse. we use return and compare these two numbers
// this will return True ( if they are equal ) or false( if they are not )
return reverse === num;

*/
