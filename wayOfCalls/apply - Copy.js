
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

let o2 = {
    fullName : "sachin",
    age  : 20
};

obj.fun1.apply(o2 , ["sonu" , "monu" , "mena" , "rena"]);