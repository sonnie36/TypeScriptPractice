"use strict";
class Person {
    constructor(name, age, id, nationality) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.nationality = nationality;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getId() {
        return this.id;
    }
    static getComplexture() {
        return Person.Complexture;
    }
}
Person.Complexture = "Black";
class Trainee extends Person {
    constructor(name, age, id, nationality, traineeId) {
        super(name, age, id, nationality);
        this.traineeId = traineeId;
    }
    getTraineeDetails() {
        return (`Name : ${this.getName()} ,Id : ${this.getId()}, Nationality: ${this.nationality}`);
    }
}
let trainee1 = new Trainee("John", 13455, 45, "kENYAN", "QW23455");
console.log(trainee1);
console.log(trainee1.nationality);
console.log(Trainee.Complexture);
//Abstract Class
class Animal {
    move() {
        console.log(`${this.name} is moving`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} is barking`);
    }
}
class Cat extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} meows`);
    }
}
let cat = new Cat("Teddy");
cat.makeSound();
cat.move();
let dog = new Dog("Rex");
dog.move();
dog.makeSound();
class Car {
    getTopSpeed() {
        console.log(`Top speed of ${this.name} is ${this.topSpeed}`);
    }
    constructor(brand, name, engine, topSpeed) {
        this.brand = brand;
        this.name = name;
        this.engine = engine;
        this.topSpeed = topSpeed;
    }
}
