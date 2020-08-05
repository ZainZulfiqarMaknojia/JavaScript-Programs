function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle1 = new Circle(1);
const circle2 = new Circle(2);
circle1.draw();
circle2.draw();