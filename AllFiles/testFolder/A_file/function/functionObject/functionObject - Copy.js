
let obj = {

    fun1 : function(){
        console.log(" The man is called " + this.fullName + " Age is " + this.age);
    },

    fun2 : function(){
        console.log(" The man is called " + obj.fullName + " Age is " + obj.age);
    },

    fun3 : function(){
        console.log(" The man is called " + fullName + " Age is " + age);
    },

    fullName : " Avinash khambra",
    age : 21
};
//obj.fun1();
//obj.fun2();
obj.fun3();