//if i want to use this i need to go back to es5 for example:
const user = {
    name: 'Walter Figueiredo',
    countries: ['Angola','Portugal','Beijing'],
    placesLived: function () {
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