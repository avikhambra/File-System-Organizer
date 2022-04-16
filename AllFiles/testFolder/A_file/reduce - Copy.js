     // Exapmle(i)
     
        //   s e 
let array = [1,2,3,4,5];

// 1+2
// 3+3
// 6+4
// 10+5
function sum(stroage,ele){
    return stroage+ele;
}
let finalSum = array.reduce(sum);
console.log(finalSum); // Answer = 15

// Example(ii)

        //   s e 
let array1 = [1,2,3,4,5];

        // 1*2
        // 2*3
        // 6*4
        // 24*5
    function mlt(stroage,ele){
            return stroage*ele;
    }
let finalMlt = array1.reduce(mlt);
console.log(finalMlt); // Answer = 120






