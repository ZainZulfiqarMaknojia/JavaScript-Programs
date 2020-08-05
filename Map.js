const colors = ['red' , 'green' , 'blue'];
const item = colors.map((color)=> {
    return(`<li>${color}{</li>`);
})
console.log(item);