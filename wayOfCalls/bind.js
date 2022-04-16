// Bind -> Bind use karke hum apne se this ko set kar sakte hai.
let obj = {

    fun1 : function(a,b){
        console.log(" The person is called " + this.fullName + " Age is " + this.age);
        console.log(this.fullName +  " Say hello to " + a + ".");
        console.log(this.fullName +  " Say hello to " + b + ".");

        console.log(arguments);

    },
    
    fullName : " Avinash khambra",
    age : 21
};

let obj2 = {
    fullName : "sachin",
    age  : 20
};
let boundFunction = obj.fun1.bind(obj2, "mena" , "seena" , "kiya");
boundFunction("Avi");

// bind ne humko new function bna k dediya boundFunction, hum isko call kerge.


