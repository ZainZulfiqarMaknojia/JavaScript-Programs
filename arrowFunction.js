// Simple JS //
const square1 = function (number) {
    return number * number;
}
console.log(square1(5));
// ES6 //
const square = number=> number * number;
console.log(square(5));

const jobs = [
    { id: 1 , isActive: true},
    { id: 2 , isActive: true},
    { id: 3 , isActive: false}
];

const job = jobs.filter(function(job){ return job.isActive;});
const job1 = jobs.filter(job => job.isActive);

const person = {
    talk(){
        setTimeout(function () {
            console.log("this" , this);
        },1000);
    }
};
person.talk();

const person1 = {
    talk(){
        var self = this;
        setTimeout(function () {
            console.log("this" , self);
        },1000);
    }
};
person1.talk();

const person2 = {
    talk(){
        var self = this;
        setTimeout(()=> {
            console.log("this" , self);
        },1000);
    }
};
person2.talk();