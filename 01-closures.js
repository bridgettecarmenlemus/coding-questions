/***
 * What is Closure?
 * A closure is the combination of a function bundled together (enclosed) with references to it's surrounding state (the lexical environment)
 * In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript. closures are created every time a function is created, at function creation time
 * 
 * A closure is a function having access to the parent scope even though the parent function has closed.
 * ***/

let x = 1000 // global scope

// function logxForMe() {
// console.log(x) // inside function scope
// }

// logForMe() 

function myAddFunction(x) {
    return function (y) {
        return x + y
    }
}
console.log(myAddFunction(9))