// return-(i)
/*
function A(name){
    //(i) 
    console.log(name + ' Khambra ');
    //(ii) 
    return{brotherName : "Vikas khambra"}; 
}
let rval = A('Avinash');
console.log( " My big brother -->" , rval );
*/

// chotafunction-(ii) ------------------------------------------------->

// Example(a)

/*
function sayhi(age){
         console.log(age);
         age();
}

function chotafunction(){
        console.log('I am chota function');
}
*/

//console.log(sayhi);
// note -> console me function ka name lekhne se ye output milte h,[Function: sayhi]

// Example (b)

/*
 hello(name){   
    console.log(name) 
 }
myName = "Avi"
hello(myName);
*/

/*

// map function (iii) --->

let array = [1,2,3,4,5];

function square(x){
         return x*x;
}
let squareArray = array.map(square);
console.log(' This value is Square ' + squareArray);

// function Expersion (iv) --->

let Avi = function(){
    console.log("function Expersion");
}
Avi();

*/


// Qustion(1) --->

function f(a,b){
      return a+b;
}
console.log(f(2,3,4,5));

function f(x,y,z,t){
    return x+y+z+t;
}
console.log(f(2,3,4,5)); 
// Answer = 14
        //  14

