//if i want to use this i need to go back to es5 for example:
const user = {
    name: 'Walter Figueiredo',
    countries: ['Angola','Portugal','Beijing'],
    placesLived() {
        this.countries.forEach((city) =>{
            console.log(this.name + ' Has lived in '  + city);
        });
    }
};
user.placesLived();

//arguments object -no longer bound with arrow functions

const add = (a,b) => {
    return a + b;
};
console.log(add(4,5));

const multiplier = {
    numbers:[1,2,3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};
console.log(multiplier.multiply());



