// Singleton Objects

const { log } = require("console")


//const InstaUser2 = {} // normal Object or litrels

 const InstaUser = new Object() // Singleton Object

 InstaUser.id = "123abc"
 InstaUser.name = "SamayRaina"
InstaUser.isLoggedIn = false

//console.log(InstaUser);

const Xuser = {
    email: "user@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Rahul",
            lastname: "Karole"
        }
    }
}
// console.log(Xuser.fullname.userfullname.firstname);


// Objects Mearging

const obj1 = {1: "a", 2: "b"} // target
const obj2 = {3: "c",4:"d"} // source
const obj4 = {5:"e",6:"f"} // source


// Using Assign Mearging two Objects
const obj3 = Object.assign({},obj1,obj2) // take target source and reeturn target value ( Used to merge two objects)
//console.log(obj3);  // {} is used as a target container all object values is stored there

// Using spread Oprator Mearging two values
const obj5= {...obj1,...obj2}
console.log(obj5);




 


