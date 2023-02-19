/**
 * What is hoisting?
 * -Javascript hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to the execution of the code. 
 * reference:  https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
 * 
 */


//foo()
console.log(foo)

function foo () {
    console.log('hey guys, whats going on!')
}

/**
 * let and const do  not hoist
 * declaratiosn hoist
 * assignments do not hoist
 * 
 */

var foo = function () {
    console.log('hey peeps with foo')
}