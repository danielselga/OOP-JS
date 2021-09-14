'use strict'

// CONCEPTS

// OBJECT-ORIENTED-PROGRAMMING (OOP) is a programming paradigm based on the concept of objects. paradigm = style of the code.
// We use objects to model (describe) real-world or abstract features.
// Objects may contains data (properties) and code (methods). By Using objects, we pack data and the corresponding behavior into one block.
// In oop, objects are self-contained pieces/blocks of code.
// Objects are building blocks of aplications, and interact with one another.
// Interactions happens through a public interface (API): methods that the code outside of the object can access and use to comunicate with the project.
// OOP was developed with the global of organizing code, to make it more flexible and easier to maintain (avoid "spaghetti code").

// PRINCIPLES.

// Abstraction:
// Ignoring or hidding details that's dont matter, allowing us to get an overview perspective of the thing  we're implementing...
// intead of messing with details that don't really matter to our implementation.

// Encapsulation:
// Keeping properties and methods private inside the class, so they are not acessible from outside the class. Some methods can be exposed as a Public Interface (API).

// Inheritance:
// Making all properties and methods of a certain class avaliable to a child class, forming a hierarchical relationship between classes. this allows us to...
// reuse cummon logic and to model real-world relationship.

// Polymorphism:
// A child class can overwrite a method it inherithed the parent class.

// JS OOP
// Prototipal inheritance: The prototype contains methods (behavior) that are acessible to all objects linked to that prototype.

// How do we create prototypes? And how we links objects to prototypes? How can we create new object without having classes?
// 1 -> constructor functions
// Technique to create objects from a function.
// This is how built in Objects like Arrays, Maps or Sets.

// 2 -> ES6 Classes
// Modern alternative to constructor functions syntax.
// "Syntatic sugar": behind the scenes, es6 classes work exactly like constructor functions.
// ES5 Classes do NOT behave like classes in "Classical OOP".

// 3 -> Object.create()
// EASYEST and most straightforward way of linking an object to a prototype object.

const Person = function (fristName, birthYear) {
  // Instance properties.
  this.fristName = fristName
  this.birthYear = birthYear
  this.calcAge = () => {
    console.log(2037 - this.birthYear)
  } // Never do that.
}

const daniel = new Person('Daniel', 1997)
console.log(daniel)

// 1. New Object {} is created
// 2. function is called, this keyword is the {}.
// 3. {} linked to prototype
// 4. function automatically return {}

const gege = new Person('Gege', 1998)
console.log(gege)

const jay = 'jay'

console.log(daniel instanceof Person)

console.log(jay instanceof Person)

// PROTOTYPES
console.log(Person.prototype)

Person.prototype.calcAge = () => {
  console.log(2037 - this.birthYear)
}

daniel.calcAge()
gege.calcAge()

console.log(daniel.__proto__)
console.log(daniel.__proto__ === Person.prototype) // True, o prototype de person é o prototype que vai ser usado nos objetos criados a partir dele e não o prototype dele.
console.log(Person.prototype.isPrototypeOf(gege)) // True
console.log(Person.prototype.isPrototypeOf(daniel)) // True
console.log(Person.prototype.isPrototypeOf(Person)) // False

// .prototypeOfLinkedObjects
Person.prototype.species = 'Home Sapiens'
console.log(daniel.species, gege.species) // Passing properties by prototype. But they arent object own properties.

console.log(daniel.hasOwnProperty('fristName')) // Cheking if is a Own property. // True
console.log(daniel.hasOwnProperty('species')) // Cheking if is a Own property. // False

console.log(daniel.__proto__)
console.log(daniel.__proto__.__proto__)
console.log(daniel.__proto__.__proto__.__proto__)

const arr = [3, 6, 6, 5, 6, 9, 9]
console.log(arr.__proto__) // When we create a new array the array contains all the prototype methods beacuse array is a object.
console.log(arr.__proto__ === Array.prototype) // Will return true.
console.log(arr.__proto__.__proto__)

Array.prototype.unique = function () {
  return [...new Set(this)]
}

console.log(arr.unique())

const h1 = document.querySelector('h1')

console.dir(x => x + 1)
