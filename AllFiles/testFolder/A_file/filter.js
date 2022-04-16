// filter --> Ek new Array return kerta h , base upon condition in the function.
/*
// Example(i)
const ages = [32, 33, 16, 40];
const result = ages.filter(check);

console.log(result);

function check(age) {
  return age >= 18;
}
*/

// Example(ii)

//Odd
let A1 = [1,3,5,7,8,9];

function odd(number){
        return number % 2 == 1;
}
let oddArray = A1.filter(odd);
console.log('This Value is Odd ' , oddArray);// Answer - [1,3,5,7,9]

//Even
let A2 = [1,3,5,7,8,9];

function even(number){
        return number % 2 == 0;
}
let evenArray = A2.filter(even);
console.log('This Value is Even ' , evenArray);// Answer - [8]