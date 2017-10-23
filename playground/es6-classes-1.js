

class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi, i'am ${this.name}!`
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old,`;
    }
}

class Student extends Person{
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return!!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += `and, their Major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation(){
        return!!this.homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();

        if(this.hasHomeLocation()){
            greeting += `and by the way i'am visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}

const me = new Traveler('Walter Figueiredo',28,'Luanda-Angola');
console.log(me.getGreeting());


const you = new Traveler('Yeraldin Rosas',25,'Mexico-city');
console.log(you.getGreeting());


const other = new Traveler(undefined,undefined,'Beijing-China');
console.log(other.getGreeting());
