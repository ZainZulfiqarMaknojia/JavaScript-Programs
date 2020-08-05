// Simple Java Script //
const person1 = {
    name: 'Mosh',
    walk: function(){console.log("Walking");},
    talk:function() {}
};
person1.walk();

// ES6 //
const person = {
    name: 'Mosh',
    walk(){console.log("Walking");},
    talk(){console.log(this);}
};
person.walk();
person.talk();

// Without Bind //
const talk1 = person.talk;
talk1();

// With Bind //
const talk = person.talk.bind(person);
talk();