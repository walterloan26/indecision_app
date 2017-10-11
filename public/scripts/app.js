'use strict';

//if i want to use this i need to go back to es5 for example:
var user = {
    name: 'Walter Figueiredo',
    countries: ['Angola', 'Portugal', 'Beijing'],
    placesLived: function placesLived() {
        var _this = this;

        this.countries.forEach(function (city) {
            console.log(_this.name + ' Has lived in ' + city);
        });
    }
};
user.placesLived();

//arguments object -no longer bound with arrow functions

var add = function add(a, b) {
    return a + b;
};
console.log(add(4, 5));
