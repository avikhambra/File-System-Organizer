Function.prototype.cApply = function(){
    let orgFun = this;
    console.log("(1) --> ",orgFun);//1

    let args = Array.from(arguments);
    console.log("args (2) --> " ,args);      // 2

    let thisForCall = args[0];
    console.log("thisForCall (3) --> " ,thisForCall); // 3

    let params = args.slice(1);
    console.log("params (4) --> " ,params); // 4

    thisForCall.fun = orgFun;
    console.log("thisForCall2 (5) --> " ,thisForCall); // 5

    thisForCall.fun(...params); // spread Operator  
    delete thisForCall.fun;
    console.log("thisForCall3 (6) --> " ,thisForCall); //6

    // arr = [a,b,c]
    // ...arr = a,b,c
}

let obj = {

    fun1 : function(a,b){
        console.log(" The person is called " + this.fullName + " Age is " + this.age);
        console.log(this.fullName +  " Say hello to " + a + ".");
        console.log(this.fullName +  " Say hello to " + b + ".");

        console.log(arguments);

    },
    
    fullName : " Avi khambra ",
    age : 21
};

let o2 = {
    fullName : "sachin",
    age  : 20
};

obj.fun1.cApply(o2 , ["sonu" , "monu" , "mena" , "rena"]);