const first = [1,2,3];
const second = [4,5,6];

// Concatenation in simple Javascript //

const combined1 = first.concat(second);
console.log(combined1);

// ES6 Spread Operator //
const combined2 = [...first , ...second];
console.log(combined2);

const clone = [...first];
console.log(clone);
console.log(first);


const nameObj = {name : 'John'};
const jobObj = {job : 'John'};

const combined = {...nameObj , ...jobObj, Location: 'Canada'};
console.log(combined);