// Singleton

const { log } = require("node:console");
const { loadavg } = require("node:os");

// object literals


const Sym = Symbol("key1")

 const c1_User = {
    name: "Abhi",
    age: 21,
    location: "Indore",
   [Sym]: "key1",
    email: "Abhishekyadav44121@gmail.com",
    isWorking: false,
    daysOfworking: ["Monday","Tuesday"]

 }

 console.log(c1_User.email);// two ways to access
 console.log(c1_User["email"]);










 // values Overide & Freez
 c1_User.email = "Gamerboy@123.com" // over ride the value
 //Object.freeze(c1_User) // freez that object no changes after that
 c1_User.age = 30;
 c1_User.email = "Yadavji123@gmail.com"

 console.log(c1_User);
 
 
 





 // Interview quation
 // take A symbol value asigne it to object and print it 

 const symbol = Symbol("keyValue1");

const Interview = {
  [symbol]: "keyValue1"
};

console.log(Interview[symbol]);







c1_User.greetings = function(){
    console.log("Welcom To this Company");
    
}


c1_User.greetingsTwo = function(){
    console.log(`Wlcome to the Company, ${this.name}`);
    
}
console.log(c1_User.greetings());
console.log(c1_User.greetingsTwo());

