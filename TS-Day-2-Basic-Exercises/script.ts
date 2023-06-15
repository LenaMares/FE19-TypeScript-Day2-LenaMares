//Basic 1

class Person {
    name: string
    age: number
    jobTitle: string

    constructor(name:string, age: number, jobTitle: string) {
        this.name = name
        this.age = age
        this.jobTitle = jobTitle
    }


printInfo() : string {
    return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`
}

}

const person = new Person("Lia", 35, "nurse")
console.log(person.printInfo())




//Basic 2

class ExtendedPerson extends Person {
    salary: number
    jobLocation: string

    constructor(name:string, age: number, jobTitle: string, salary: number, jobLocation: string) {
        super(name, age, jobTitle)
        this.salary = salary
        this.jobLocation = jobLocation
    }

printInfo() {
    return `${super.printInfo}`
}

printMoreInfo(): string {
    return `and I get ${this.salary} every month, and I work in ${this.jobLocation}`
}

}

const extendedPerson = new ExtendedPerson("Jane Smith", 35, "Manager", 5000, "New York");
console.log(extendedPerson.printMoreInfo());