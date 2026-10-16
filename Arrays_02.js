// Stings In arrays 

const C1_Clients = ["Amit","Suresh" ,"Rahul", "Sersah"]

const C2_Clients = ["Devesh", "gitanjali","Tanisha", "Tasii"]

//console.log(Array.isArray("Rahul"));
//console.log(Array.from("Rahul")); ( From Convert it to Array)


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); // output:- 100, 200, 300







//C1_Clients.push(C2_Clients)
// console.log(C1_Clients);

// Concat (Combines two or more arrays. This method returns a new array without modifying any existing arrays. )

//const  newCompany= C1_Clients.concat(C2_Clients)
//console.log(newCompany);


// Spread Method Work same as concat ex.Glass drop Shaterd

// const UnicornCompany = [...C1_Clients,...C2_Clients]
// console.log(UnicornCompany);


// Flat ( Make single array of Sub Arrays ( give infinity for number of sub arrays) )

const d1 = ["data","technical-Data",["Sub-Datas"],"Bakup",["Recoverd"]];
const Vales = d1.flat(Infinity);

//console.log(Vales);
