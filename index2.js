
//1,2 
function car(make, model, year, owners = []){
    this.make = make;
    this.model = model;
    this.year = year;
    this.owners = owners; //5
    this.getCarInfo= function(){
       return this.make + " " + this.model + " " + "is released in" +
       " " + this.year;
    }
    //6
    this.addOwner = function(owner){
        this.owners.push(owner);
    }
    this.removeOwner = function(owner){
        const index = this.owners.indexOf(owner);
        if (index > -1){
            this.owners.splice(index, 1);
        }
    }
    this.getOwnersCount = this.owners.length;
    this.getOwnerNames = function(){
        return this.fullName();
    }
    this.getFullInfo = function(){
        return this.make + " " + this. model + " " + "from" + " " + this.year +
        "." + " " + this.getOwnersCount() + " " + "person owns this car." +
        " " + "These are" + " " + this.getOwnerNames();
    }

}

//check if 1 and 2 are correct
/*const bb = new car("BMW", "635", 2020);
console.log(bb.getCarInfo());*/


//3
function Person(name, surname, age, gender, cars = []){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.cars = cars;
    this.fullName = function(){
        return this.name + " " + this.surname;
    }
    this.countCars = function(){
        return cars.length;
    }
    //7
    this.buysCar = function(car){
        this.cars.push(car);
        car.owners.push(this);
    }
    this.sellsCar = function(car){
      const index = this.cars.indexOf(car);
      if (index > -1){
        this.cars.splice(index, 1);
        const index2 = car.owners.indexof(this);
        if (index2 > -1){
            car.owners.splice(index2, 1);
        }
      }
      this.getAllCarsInfo = function(){
        return this.name + " " + "owns these cars:" + this.getCarInfo();
      }
    }
}

//check if 3 is right 
/*const YY = new Person("avto", "chubinidze", 25, "male", ["BMW", "Mercedes", "audi"]);
console.log(YY.fullName());
console.log(YY.countCars());*?




/*check the homework*/

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

