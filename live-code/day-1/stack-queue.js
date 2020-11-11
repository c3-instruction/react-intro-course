// Arrays and objects are super powerful! Very overloaded



/*
'hello'

2
--------------------


push 12
pop => 12
pop => 10
pop => 4
push 'hello'

const myStack = []; // used as a stack

// 1. Clarify you know how a stack works
// 2. Go to mdn Array docs... and look for methods that we can use to treat an array like a stack
// 3. Experiment with these methods locally to get a defacto stack!

// Extra credit! Implement a queue
// Extra extra credit Experiment with any method that you are interested in on MDN
*/

const myStack = [];
myStack.push(10);
myStack.push(39);
myStack.pop(); 
console.log(myStack); // [10]
myStack.pop(); // 10
myStack.pop(); // undefined

// add to end with push. remove from beginning with shift
// add to the beginning with unshift. remove from the end with pop

