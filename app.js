class Person {
  constructor(name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
  }

  sayHello() {
    console.log(`Hey! My name is ${this.name}. I am ${this.age} years old and live in ${this.city}.`);
  }
}
let p1 = new Person('Jack', 'Manchester', 22);
p1.sayHello();

class Vehicle {
  
}