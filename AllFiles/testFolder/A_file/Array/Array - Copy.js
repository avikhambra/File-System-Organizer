//let array = [1 ,2 ,3 ,4 ,5 ,];

//console.log(array);

// add Last - (i)
//Array.push(6);
//console.log(Array);  --->[1,2,3,4,5,6]

// add First - (ii)
//Array.unshift(0);
//console.log(Array);  --->[0,1,2,3,4,5]

// remove Last - (iii)
//Array.pop();
//console.log(Array);  --->[1,2,3,4]

// remove First - (iv)
//Array.shift()
//console.log(Array);  --->[2,3,4,5]

// slice - (v)
//let newArray1 = array.slice(2,4);
//console.log(newArray1); --->[3,4] 2 se leker 4 tak ke index dedega.

// splice - (vi)
//let newArray2 = array.splice(2,3);
//console.log(newArray2); // --->[3,4,5] 2 ke baad ke 3 index delete kerke humko dedega.

// Array.of - (vii)

//let bb = Array.of(1,2,34,45,56);
//console.log(bb); // [1,2,34,45,56] , yee sari value ko array m dal dega. 

// ... (viii)

let aa = [4,5,77,88,99];
console.log(...aa );// 4,5,66,77,88,99 , ye array ko hta dega.


// Qustion (i) ---->
// 2 Array given h usme homko sare element print kerne h, subhi ek-2 bar,
// jo common h vo bi ek bar he print kervana h.


/*
let Avi = [1,4,3,6,5];
let Avi2 = [1,3,100,200];

for(let i = 0; i<Avi2.length; i++){
    let cElement = Avi2[i];

    let ispresent = Avi.includes(cElement);
    if(ispresent == false){
        Avi.push(cElement);
    }
}
console.log(Avi);
*/


// Answer =  [1,4,3,6,5,100,200]