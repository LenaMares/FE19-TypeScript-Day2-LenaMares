"use strict";
//Basic 1
class Person {
    constructor(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    printInfo() {
        return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
    }
}
const person = new Person("Lia", 35, "nurse");
console.log(person.printInfo());
//Basic 2
class ExtendedPerson extends Person {
    constructor(name, age, jobTitle, salary, jobLocation) {
        super(name, age, jobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }
    printInfo() {
        return `${super.printInfo}`;
    }
    printMoreInfo() {
        return `and I get ${this.salary} every month, and I work in ${this.jobLocation}`;
    }
}
const extendedPerson = new ExtendedPerson("Jane Smith", 35, "Manager", 5000, "New York");
console.log(extendedPerson.printMoreInfo());
