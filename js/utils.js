// Function Declaration
function dateFormat(format){

  var dates = new Date(format);
  var day = String( dates.getDate()).padStart(2,0);
  var month = String(dates.getMonth() + 1).padStart(2,0);
  var year = dates.getFullYear();

  return `${day}.${month}.${year}`;
}

// console.log(dateFormat());




// let a = "xumoyun";

// {
//   let a ="xumoyun"
// }

// console.log(a);



// const people = [
//   {
//     name:"Ulug'bek",
//     price:5000,
//     debt:false,
//   },

//   {
//     name:"Abdulaziz",
//     price:10000,
//     debt:false,
//   },

//   {
//     name:"Mirjalol",
//     price:100000,
//     debt:true,
//   },

//   {
//     name:"G'anisher",
//     price:50000,
//     debt:false,
//   },

//   {
//     name:"Shahboz",
//     price:70000,
//     debt:false,
//   },

//   {
//     name:"Humoyun",
//     price:90000,
//     debt:true,
//   },
// ]


// const getaverage = (people) =>{

// const add = people.reduce((qiymat, element) => {
//   return qiymat + element
//   },0)


//   return add / people.length;

// }

// console.log(add);


// const a = [4,5,8,2]

// const b = [a].sort((a,b) => a-b ).map(d => d * 10);

// console.log(a);
// console.log(b);

// let a = Array(100).fill(null).map(() => Math.floor(Math.random() * 2000) -1000 );

// console.log(a);


// const a = [-254, 578, -633, -421, 812, -235, 65, 814, -953, -449, -656, 415, 953, 613, 97, 444, -324, -898, -703, -979, -464, -484, 326, 866, 998, -287, -70, 393, 271, 821, -980, -723, -826, 237, -198, -748, 14, -490, 46, 638, -668, 674, -163, -607, -810, -244, -333, 34, -597, -548, 930, 316, 856, 332, 788, -787, -193, 455, 498, 746, -164, -958, 304, -534, 67, -644, 951, 758, -542, 109, -631, 334, 204, -796, 431, -922, -659, 319, 545, 360, -540, -263, -93, -876, -794, 461, -248, -165, 901, 924, -789, -289, -614, -187, 24, -591, -669, 822, -4, 431];


// const b = [...a].sort((a,b) => a - b);

// console.log(a);
// console.log(b);




// let a = [2,5,7,9,3,8,4,2,7,60,8]



// for (let i = 0; i < a.length; i++) {

//   if(a[i]<= 100){
//     console.log("yes");
//   }
  
  
// }

//   let b = a.some(b => b<32);

// console.log(b );


// let b = a.every(b => b < a.length);

// console.log(b + " false");


// const b = [...a].sort((a,b) => a - b);


// console.log(a);
// console.log(b);













// for (let i = 0; i < .length; index++) {
//   const element = array[index];
  






// const abs = [ 1,2 ,3,4,5,6,7,8,90,]

