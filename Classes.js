class Person{
    constructor(name){
        this.name = name;
    }
    walk(){
        console.log("Walking");
    }
};

const person = new Person('John');
person.walk();
console.log(person.name);

class Teacher extends Person{
    constructor(name , degree){
        super(name);
        this.degree = degree;
    }
    teach(){
        console.log("teach");
    }
};

const teacher = new Teacher('John', 'phd');
console.log(teacher.name , teacher.degree);
teacher.teach();
teacher.walk();
