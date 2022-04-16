


let obj = {

    fun1 : function(a,b){
        console.log(" The person is called " + this.fullName + " Age is " + this.age);
        console.log(this.fullName +  " Say hello to " + a + ".");
        console.log(this.fullName +  " Say hello to " + b + ".");

       // console.log(arguments);
    }, 
    fullName : " Avinash khambra",
    age : 21
};
// (i)
//obj.fun1("sachin" , "golu"); 

// (ii)
//obj.fun1.call({
//    fullName : "vikas khambra",
//    age : 24
//}, "riya" , "siya")

// (iii)

let obj2 = {
    fullName : "sachin",
    age  : 20
};
obj.fun1.call(obj2, "mena" , "seena");
