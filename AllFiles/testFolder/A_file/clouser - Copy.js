

// Clouser(Example-1) -->

var A = "A is Global variable";

function hi(){
     var B = "B is local variable of hi function";
     console.log(B);
     console.log(A);
}
hi();

//(Example-2) -->

function k(first){
     console.log('In');

     return function k1(second){
         console.log('out');
         return first*second;
     }
}
let rVal = k(2);
console.log('Beforr');
let ans = rVal(4);
console.log(ans);



// example

function add(){
    let a = 4
    function addChild(){
        console.log(a + 4);
    }
    addChild();
}








// Qustion(1) --->

function outer(){

    var arr = [];
    for(var i = 0; i<3; i++){
        arr.push(function(){
           console.log(i);
        })
    }
    return arr;
}
console.log('Before calling outer');
var arr = outer();
arr[0]();
arr[1]();
arr[2]();
console.log('After calling outer');

/*
// Qustion(2) --->

function outer(){

    var arr = [];
    for(var i = 0; i<3; i++){

        function outer(){
            var j = i;
            return function(){
                console.log(j);
            }
        }
        arr.push(outer());
    }
    return arr;
}
console.log('Before calling outer');
var arr = outer();
arr[0]();
arr[1]();
arr[2]();
console.log('After calling outer');

*/