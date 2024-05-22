class Person {
   public name: string;
   public age: number;
   private id: number;
   readonly nationality : string;
   static Complexture:string = "Black"

   constructor(name:string,age:number,id:number, nationality:string){
    this.name = name;
    this.age = age;
    this.id = id;
    this.nationality = nationality;
   }

   getName():string{
      return this.name;
   }

   private getAge():number{
      return this.age;
   }
   protected getId():number{
      return this.id;
   }

  static getComplexture():string{
   return Person.Complexture; 
 }
}

class Trainee extends Person{
   public traineeId :string;

   constructor(name:string,age:number,id:number,nationality:string,traineeId:string){
      super(name,age,id,nationality);
      this.traineeId = traineeId;
   }
   getTraineeDetails():string{
      return (`Name : ${this.getName()} ,Id : ${this.getId()}, Nationality: ${this.nationality}`)
   }
}

let trainee1 = new Trainee("John",13455,45,"kENYAN", "QW23455");
console.log(trainee1);
console.log(trainee1.nationality);
console.log(Trainee.Complexture);

//Abstract Class

abstract class  Animal{
   abstract name:string;
   abstract makeSound():void;

   move():void{
      console.log(`${this.name} is moving`)
   }

}

class Dog extends Animal{
   name : string;

   constructor(name:string){
      super();
      this.name=name;
   }
   makeSound(): void {
      console.log(`${this.name} is barking`)
   }
   
}

class Cat extends Animal{
   name:string;
   constructor(name:string){
      super()
      this.name = name;
   }
   makeSound(): void{
      console.log(`${this.name} meows`)
   }

}

let cat = new Cat("Teddy");
cat.makeSound();
cat.move();

let dog = new Dog("Rex");
dog.move();
dog.makeSound();

//InterFace Implementation
interface Locomotive{
   brand: string;
   name:string;
   sunroof?:boolean;
   readonly topSpeed:string;

   getTopSpeed():void

}
interface Vehicle extends Locomotive{
   engine:string;
}

class Car implements Vehicle{
   brand:string;
   name:string;
   engine: string;
   topSpeed:string;
   
   getTopSpeed(): void {
      console.log(`Top speed of ${this.name} is ${this.topSpeed}`)
   }

   constructor(brand:string,name:string,engine:string,topSpeed:string){
      this.brand = brand;
      this.name = name;
      this.engine = engine;
      this.topSpeed = topSpeed;
   }
}