class Person {
  constructor(name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
  }

  sayHello() {
    console.log(
      `Hey! My name is ${this.name}. I am ${this.age} years old and live in ${this.city}.`
    );
  }
}
let p1 = new Person("Jack", "Manchester", 22);
p1.sayHello();

class Vehicle {
  constructor(manufacturer, numOfWheels) {
    this.manufacturer = manufacturer;
    this.numOfWheels = numOfWheels;
  }

  aboutVehicle() {
    console.log(
      `This is a ${type}, made by ${this.manufacturer}, and it has ${this.numOfWheels} wheels.`
    );
  }
}

class Truck extends Vehicle {
  constructor(numOfDoors, type, manufacturer, numOfWheels) {
    super(numOfDoors, type, manufacturer, numOfWheels);
    // this.type = type;
  }
  aboutVehicle() {
    this.type = "truck";
    this.numOfDoors = 4;
    this.bed = true;
    console.log(
      `This is a ${this.type}, made by ${this.manufacturer}, and it has ${this.numOfWheels} wheels and ${this.numOfDoors} doors.`
    );
    if (this.bed === true) {
      console.log(`This does have a truck bed.`);
    }
  }
}
let t1 = new Truck("Ford", 4);
t1.aboutVehicle();

class Sedan extends Vehicle {
  constructor(numOfDoors, type, manufacturer, numOfWheels) {
    super(numOfDoors, type, manufacturer, numOfWheels);
    // this.type = type;
  }
  aboutVehicle() {
    this.type = "sedan";
    this.numOfDoors = 4;
    this.size = "small";
    this.mpg = "30";
    this.bed = false;
    console.log(
      `This is a ${this.type}, made by ${this.manufacturer}, and it has ${this.numOfWheels} wheels and ${this.numOfDoors} doors. It is ${this.size} and gets ${this.mpg} miles per gallon`
    );
    if (this.bed === false) {
      console.log(`This does not have a truck bed.`);
    }
  }
}
let s1 = new Sedan("Nissan", 4);
s1.aboutVehicle();

class Motorcycle extends Vehicle {
  constructor(numOfDoors, type, manufacturer, numOfWheels, handlebars) {
    super(numOfDoors, type, manufacturer, numOfWheels, handlebars);
    // this.type = type;
  }
  aboutVehicle() {
    this.type = "motorcycle";
    this.numOfDoors = 0;
    // this.size = 'small';
    // this.mpg = '30';
    this.bed = false;
    this.handlebars = true;
    console.log(
      `This is a ${this.type}, made by ${this.manufacturer}, and it has ${this.numOfWheels} wheels and ${this.numOfDoors} doors.`
    );
    if (this.bed === false) {
      console.log(`This does not have a truck bed.`);
    }
    if (this.handlebars === true) {
      console.log(`This does have handlebars.`);
    }
  }
}
let m1 = new Motorcycle("Yamaha", 2);
m1.aboutVehicle();
