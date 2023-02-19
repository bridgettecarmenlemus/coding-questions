/**
 * what is "This", the reserved keyword in Javascript?
 * - The value of this is determined by how the function is called (runtime binding)
 * -It can't be set by assignment during execution, and it may different each time the function is called.
 * - Arrow functions don't provide their own "this" binding
 * -Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 * 
 * 
 * 
 */

const person = {
    name: 'Bridgette',
    car: "Mini Cooper",
    sayName: function () {
        console.log(this.name, this.car)
    }
}

// person.sayName() this works
const localSayName = person.sayName

// local SayName() // this does not work because this has lost it's runtime binding 

const boundSayName = person.sayName.bind(person)
boundSayName