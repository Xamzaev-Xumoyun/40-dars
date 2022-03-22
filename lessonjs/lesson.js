// var userName = "Dilshod"; // Declaration

// console.log(userName);

// userName = "Nurillo"; // Re - assignment

// var userName = "Vazira"; // Re-declary

// console.log(userName);

// var userName = "Ali"

// function user(){
//   var userName = "Alijon"
// }

// console.log(userName);


// let userName = "Umidjon"; // Declaration
// userName = "Umid";//  Re -assignment
// // let userName = "Umidbek"; //Re - daclary NOT ALLOWED


// const userName = "Umidjon"; // Declaration
// // userName = "Umid";//  Re -assignment NOT ALLOW
// // let userName = "Umidbek"; //Re - daclary NOT ALLOWED

// console.log(userName);


// const arr = [];

// const age = 25;

{
  //  let age = 20; // re -assignment
  // const age = 20;
  // console.log(age);

}


// console.log(age);

// function add (){
//   var age = 25;
// }


// console.log(age);




// const animals = ["dog", "cat", "squirrel"];

// animals.push("horse")
// animals.shift()
// // animals= true ; => Re - assigment NOT  ALLOWED
// console.log(animals);



// let age = "Islom";

// Block scope
// {
// var age = "Islombek";
// }
// console.log(age);

const animals = [
  {
    name : "Mosh",
    type: "mushuk",
    weight:2,
  },
  {
    name : "Rex",
    type: "kuchuk",
    weight:5,
  },
  {
    name : "Brunduk",
    type: "olmaxon",
    weight:1,
  },
  {
    name : "Rokky",
    type: "kuchuk",
    weight:6,
  },

  {
    name : "Ponny",
    type: "ot",
    weight:300,
  },

]

// [Mosh , Rex, Brunduk,Rokky,Ponny]


// HIGHER ORDER Function

const result = animals.map( a => {
 if(a.name == "Mosh"){
   return a.name
 }
});

console.log(result);

// const result = animals.filter(a => a.weight >= 5);

// console.log(result);

// const result = [];

// for (let i = 0; i < animals.length; i++) {
//   result.push(animals[i].name);

// }

// console.log(result);

