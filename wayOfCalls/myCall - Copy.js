Function.prototype.myCall = function(){
    let orgFun = this;
    //console.log(" orgFun(1)--> " + orgFun);//1

    let args = Array.from(arguments);
   // console.log(" args(2)--> " + args);//2

    let thisForCall = args[0];
   // console.log(" thisForCall(3)--> " + thisForCall)//3

    let params = args.slice(1);
   // console.log(" params(4)--> " + params);//4

    thisForCall.fun = orgFun;
   // console.log("thisForCall(5)--> " + thisForCall.fun)
    
    thisForCall.fun(...params);
  //  console.log("thisForCall(6)--> " + thisForCall.fun(...params) );


    delete thisForCall.fun;
}

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

let o2 = {
    fullName : "sachin",
    age  : 20
};

obj.fun1.myCall(o2, "mena" , "seena");
