Function.prototype.myBind = function(){
    let orgFun = this;
   console.log(" 1 --> " + orgFun);//1

    let argsArray = Array.from(arguments);
    console.log( " 2 --> " + argsArray);//2

    let newThis = argsArray[0];
    console.log(" 3 --> " + newThis);//3

    let newParams = argsArray.slice(1);
    console.log( " 4 -->" + newParams);//4

    let myFun = function(){
        let moreparams = Array.from(arguments);
        let totalparams = newParams.concat( moreparams);
        console.log("Totl params is (5) --> ", totalparams);
        orgFun.apply(newThis , totalparams);
    }
    return myFun;
}

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
let boundFunction = obj.fun1.myBind(obj2, "mena" , "seena" , "kiya");
boundFunction("Avi", "sona" , "mona"); // boundFunction is myFun returned myBind
