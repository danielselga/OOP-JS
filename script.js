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

// const Person = function (fristName, birthYear) {
//   // Instance properties.
//   this.fristName = fristName
//   this.birthYear = birthYear
//   this.calcAge = () => {
//     console.log(2037 - this.birthYear)
//   } // Never do that.
// }

// const daniel = new Person('Daniel', 1997)
// console.log(daniel)

// 1. New Object {} is created
// 2. function is called, this keyword is the {}.
// 3. {} linked to prototype
// 4. function automatically return {}

// const gege = new Person('Gege', 1998)
// console.log(gege)

// const jay = 'jay'

// console.log(daniel instanceof Person)

// console.log(jay instanceof Person)

// PROTOTYPES
// console.log(Person.prototype)

// Person.prototype.calcAge = () => {
//   console.log(2037 - this.birthYear)
// }

// daniel.calcAge()
// // gege.calcAge()

// console.log(daniel.__proto__)
// console.log(daniel.__proto__ === Person.prototype) // True, o prototype de person é o prototype que vai ser usado nos objetos criados a partir dele e não o prototype dele.
// console.log(Person.prototype.isPrototypeOf(gege)) // True
// console.log(Person.prototype.isPrototypeOf(daniel)) // True
// console.log(Person.prototype.isPrototypeOf(Person)) // False

// // .prototypeOfLinkedObjects
// Person.prototype.species = 'Home Sapiens'
// console.log(daniel.species, gege.species) // Passing properties by prototype. But they arent object own properties.

// console.log(daniel.hasOwnProperty('fristName')) // Cheking if is a Own property. // True
// console.log(daniel.hasOwnProperty('species')) // Cheking if is a Own property. // False

// console.log(daniel.__proto__)
// console.log(daniel.__proto__.__proto__)
// console.log(daniel.__proto__.__proto__.__proto__)

// const arr = [3, 6, 6, 5, 6, 9, 9]
// console.log(arr.__proto__) // When we create a new array the array contains all the prototype methods beacuse array is a object.
// console.log(arr.__proto__ === Array.prototype) // Will return true.
// console.log(arr.__proto__.__proto__)

// Array.prototype.unique = function () {
//   return [...new Set(this)]
// }

// console.log(arr.unique())

// const h1 = document.querySelector('h1')

// console.dir(x => x + 1)

// Car challenger

const Car = function (make, speed) {
  this.speed = speed
  this.make = make
  this.accelerate = (speed) => {
    console.log(`This ${this.make} is currently ${this.speed - speed} km/h`)
  }
  this.break = (freio) => {
    console.log(`This ${this.make} is currently ${this.speed - freio} km/h`)
  }
}

Car.prototype.stop = function () {
  console.log(`This car is stoped! the currently velocity is ${this.speed * 0}`)
}

const bmw = new Car('BMW', 120)
bmw.accelerate(50)
bmw.break(80)
bmw.stop()

// ES6 Syntax

// // Class expression
// const PersonCl = class {}

// Class declaration
class PersonCl {
  constructor(fristName, birthYear) { //Any class needs a constructor this will be the objects key: value.
    this.fristName = fristName
    this.birthYear = birthYear
  }

  calcAge() {
    console.log(2037 - this.birthYear)
  }

  greet() { // Will work exat the same way.
    console.log(`Hey my name is ${this.fristName}`)
  }

  get age() {
    console.log(2037 - this.birthYear)
  }

    // Set a property that already exist
  set fullName(name) {
    console.log(name)
    if(name.includes(' ')) {
      this._fullName = name
    } else {
      alert(`${name} is not a full name!`)
    }
  }

  get fullName(){
    return this._fullName
  }

  // Static Methods
  static hey() {
    console.log('Hey there!')
  }

}

const georgia = new PersonCl('Georgia', 1998)
console.log(georgia)
georgia.calcAge()

console.log(georgia.__proto__ === PersonCl.prototype)

PersonCl.prototype.greet = function () {
  console.log(`Hey my name is ${this.fristName}`)
}

georgia.greet()

PersonCl.hey()

// 1. Classes are NOT hoisted
// 2. Classes are frist class citzens (can be passed in a function and return by a function)
// 3. Classes are executed in strict Mode.

// Getter and Setter

// Getter e Setter são formas de interagir dinamicamente via função com uma classe. Setter so podem ter 1 parametro passado, e 1 paramentro que é agregado e não declarado como se fosse uma função. Já o getter é uma função que é chamada sem () e serve para interagir com o objeto, ele não possui parametro.

const walter = new PersonCl('walter white', 1969)

const account = {
  owner: 'Daniel',
  movements: [200, 300 , 599, 600, 1000],
  
  get latest () {
    return this.movements.slice(-1).pop()
  },

  set latest(mov){
    this.movements.push(mov)
  } // Needs to have only one param.
}

console.log(account.latest) // Get are callede used as a property

account.latest = 50

console.log(account.movements)

// Object create
const  PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear)
  },

  init(fristName, birthYear) {
    this.fristName = fristName
    this.birthYear = birthYear
  }
}

const steven = Object.create(PersonProto) // Creating a new object wich inherit from the PersonProto.

console.log(steven)

console.log(steven.__proto__)

steven.name = 'Steven'
steven.birthYear = 2002

steven.calcAge()

const zack = Object.create(PersonProto)

zack.init('Zack', 2020)
zack.calcAge()

// Challenger #2 ES6 Class

class CarCl {
  constructor(make, speed) {
    this.make = make
    this.speed = speed
  }

  accelerate() {
    this.speed += 10
    console.log(`${this.make} is going at ${this.speed} Km/h`)
  }

  break() {
    this.speed -= 5
    console.log(`${this.make} is breaking at ${this.speed} Km/h`)
  }

  get speedUS() {
    console.log(Math.trunc(this.speed / 1.6))
  }

  set speedUS (speed) {
    this.speed = speed * 1.6 
  }
}

const ford = new CarCl('Ford', 120)

console.log(ford.speedUS)
ford.accelerate()
ford.break()
ford.speedUS //Get
ford.speedUS = 63 //Set
console.log(ford.speed)

// Inheritance between "classes"

const Person = function (fristName, birthYear) {
  this.fristName = fristName
  this.birthYear = birthYear
}

Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear)
}

const Student = function(fristName, birthYear, course) {
  Person.call(this, fristName, birthYear)
  this.course = course
}

Student.prototype = Object.create(Person.prototype) //Object.create vai retornar um objeto vazio caso a gente declare o codigo a baixo em cima desse declarado ele iria sobreescrever o objeto.

Student.prototype.introduce = function () {
  const h1 = document.querySelector('h1')
  console.log(h1)
  console.log(`My name is ${this.fristName} i have ${2021 - this.birthYear} years, and i'm studing ${this.course} `)
  return h1.textContent = `My name is ${this.fristName} i have ${2021 - this.birthYear} years, and i'm studing ${this.course} `
}

const daniel = new Student('Daniel', 1997, 'Computer Science')
console.log(daniel)
daniel.introduce()
daniel.calcAge()

console.log(daniel.__proto__)
console.log(daniel.__proto__.__proto__)

console.log(daniel instanceof Student)
console.log(daniel instanceof Person)


Student.prototype.constructor = Student
console.dir(Student.prototype.constructor)