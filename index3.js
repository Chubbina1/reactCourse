class Vehicle {
    constructor(make,model){
        this.make = make;
        this.model - model;
    }
}
class Car extends Vehicle{
    constructor (make, model, year){
        super (make, model);
        this.year = year;
    }

    owners = [];
    addOwner(owner){
        this.owners.push(owner);
    }

    getCarInfo(){
        return this.make + " " + this.model + " " + "is released in" +
        " " + this.year;
    }

    removeOwner(owner){
        const index = this.owners.indexOf(owner);
        if (index > -1){
            this.owners.splice(index, 1);
        }
    }

    getOwnerNames(){
        return this.owners.map(fullName);
    }

    getOwnersCount(){
        return this.owners.length;
    }

    getFullInfo(){
        return this.make + " " + this. model + " " + "from" + " " + this.year +
        "." + " " + this.getOwnersCount() + " " + "person owns this car." +
        " " + "These are" + " " + this.getOwnerNames().join(", ");
    }

}

class Person {
    constructor (name, surname, age, gender, cars = []) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
        this.cars = cars;
    }

    fullName(){
        return this.name + " " + this.surname;
    }

    buysCar(car){
        this.cars.push(car);
        this.addOwner(this);
    }

    sellsCar(car){
        const index = this.cars.indexOf(car);
      if (index > -1){
        this.cars.splice(index, 1);
        const index2 = car.owners.indexof(this);
        if (index2 > -1){
            car.owners.splice(index2, 1);
       }
    }
   }

   constCars(){
    return this.cars.length;
   }

   getAllCarsInfo(){
    return this.name + " " + "owns these cars:" + this.cars.map(getCarInfo).join(", ");
   }
}


let daniel916 = new Person("Daniel", "Barbakadze", 21, "M", []);
let ilona = new Person("Elon", "Musk", 30, "M");
let duti_picoti = new Car("BMW", "525", "1999");
let stodevianosto = new Car("Mercedes", "E190", 1991);

daniel916.buysCar(duti_picoti); // adds passed car
daniel916.buysCar(stodevianosto); // adds passed car
daniel916.sellsCar(duti_picoti); // removes passed car
ilona.buysCar(stodevianosto); // adds passed car
ilona.buysCar(duti_picoti); // adds passed car

console.log({
  daniel: {
    fullName: daniel916.fullName(),
    countCars: daniel916.countCars(),
    getAllCarsInfo: daniel916.getAllCarsInfo(),
  },
  elon: {
    fullName: ilona.fullName(),
    countCars: ilona.countCars(),
    getAllCarsInfo: ilona.getAllCarsInfo(),
  },
  duti_picoti: {
    getOwnersCount: duti_picoti.getOwnersCount(),
    getOwnerNames: duti_picoti.getOwnerNames(),
    getFullInfo: duti_picoti.getFullInfo(),
    getCarInfo: duti_picoti.getCarInfo(),
  },
  stodevianosto: {
    getOwnersCount: stodevianosto.getOwnersCount(),
    getOwnerNames: stodevianosto.getOwnerNames(),
    getFullInfo: stodevianosto.getFullInfo(),
    getCarInfo: stodevianosto.getCarInfo(),
  },
});
