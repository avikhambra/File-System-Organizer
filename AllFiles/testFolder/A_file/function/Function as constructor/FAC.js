//Function as constructor ----->

function Person(name , age){

       this.name = name;
       this.age = age;
       this.sayHi = function(f1){
           console.log(this.name + "["+ this.age +"] SayHi to " + f1 );
       }
}

let p1 = new Person("Avi" , 21);
p1.sayHi("seena");