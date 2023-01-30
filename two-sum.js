/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let obj = {};
    for(let i=0;i<nums.length;i++){
        if(target - nums[i] in obj) return [obj[target-nums[i]],i];
        obj[nums[i]] = i;
    }
}

// Commented code, explanation, and alternate code below.

/*
//COMMENTED CODE(delete block comments to view).

// In this method, we will create empty object that supports {key:value} pairs for storing all the elements from nums and their index positions.

var twoSum = function (nums, target) {
//new empty object for storing the numbers and respective index locations.
    let obj = {};
//START LOOP BLOCK
//loop traversing every element of the nums array.
    for (let i = 0; i < nums.length; i++) {
//  On each iteration, check if the difference between target and the element at the current index i is present in obj object. 
//If it IS present: answer is returned. The first part of the answer [first part, second part] is the value of the property located in obj object which represents the index position of that number found in the obj object. The second part of the answer is the current number of iterations that have happened already which is the current value of i;
        if (target - nums[i] in obj) {
            return [obj[target - nums[i]], i];
        }
// If NOT present: Place the element from index i in the obj object by defining a property and assigning its value, i, later to be used to check further combination pairs.
        obj[nums[i]] = i;
//END LOOP BLOCK
    }
}

*/

///////////////////////////////////

    //GENERAL EXPLANATION
    
    // There is a list of numbers and a target number that two different numbers from the list must add up to. The goal is to find out which numbers those are, and their respective index locations. So, to get the answer, we can test every combination pair of numbers in the list to check if they add up to the target number.

    // Some stuff to remember:
    // a + b = target; where c is target number, a is list number, and b is another list number
    // b will always equal target minus a.   b = target-a;
    // a will always equal target minus b.   a = target-b;

    // In this method, place each number from the list into a container that supports key:values(object) where we can list the number itself as the key and its corresponding index position as that keys value. These numbers (the keys) will represent candidates for the value of "a". So, to get the value of "b", we subtract target-a, as explained above. With the loop and if-statement, we test if any of those numbers in our object are equal to target-a. If true, whatever the index of "b" was during that loop iteration will be the second part of answer. And whatever the index of "a" was during that loop iteration is the fist part of answer. If there were no answer, this loop will effectively execute the comparison on every combination pair of numbers, which was the goal. The return statement stops the loop when the answer if found. If there is no answer, it returns "".
    // example:
    //nums = [a,b,c,d,e]; 
    // obj ={}     
    //first loop: check if target-nums[0] is equal to ANY number in obj nums = [a,b,c,d,e]  obj = {} 
    //second loop: check if target-minus nums[1] is equal to ANY number in obj; nums = [a,b,c,d,e]  obj = {a,1}
    //third loop: check if target-minus nums[2] is equal to ANY number in obj; nums = [a,b,c,d,e]  obj = {a:1,b:2}
    //and so on until every combination pair is checked or an answer is found.

///////////////////////////////

/*

     //ALTERNATE CODE
//Code to add every combination pair in a list to test if their sum equals target number. If true, break the loop and return the combination pair that past the test.


var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                var number = [i, j];
                break;
            }
        }
    }
    return number
};

*/
