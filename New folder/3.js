// let a = 12;
// {
//     let a=13;
//     console.log("inside:", a);
// }
// console.log("outside:",a);
// let a = 12;

// let b=a;
// a = a+2;


// * lexical scoping ---> ki aap kha pr phycicale avalible ho ye totely depend krta h ki aap kya access kr paoge ,( )this his follow in js


// * dynamic scoping ---> kha se call kr rhe ho us pr depend krta h ki kya value milegi

// * closuers --->  closures hote h function but wo function jo kisi perent function ko ke kisi varbile ko print kr rha ho  
// ? advantages --->  ues to this make privet varibles
// closuers are make a backlinks of variables, use  of [[environment]]




//* toster notifiction

// function createToster(confe) {
// return function (str) {
//   let div  = document.createElement("div");
//   div.textContent= str;
//   div.className=`inline-block ${confe.theme ==="dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none`
//   document.querySelector(".toast").appendChild(div);
//   setTimeout(() => {
//     document.querySelector(".toast").removeChild(div)
//   }, confe.duration*1000);

// };

// }

// let toster = createToster({
//     // positionX:"right",
//     // positionY:"top",
//     theme:"dark",
//     duration:3,

// });
// toster("downlod now")
// setTimeout(() => {
//   toster("adfghjTYU")
// }, 2000);





// ! this keyword special keyword 
//  this keyword special keyword ---> Because other keywords are not chang values and nature but this keyword his chang value and neture depend where use this keyword....

// * value of this in global scope
// console.log(this);

// output-------Window {window: Window, self: Window, document: document, name: '', location: Location, …}


// * value of this in function scope 
// function abcd() {
//   console.log(this)

// }
// abcd()

// output----- Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// * value of this in method
// let obj = {
//   name: "raj",
//   sayname: function () {
//     console.log(this.name)
//   }
// }
// obj.sayname()

// otuput----- object in object

// * event handler

// document.querySelector("h").addEventListener("click",
//   function () {
//     console.log(this)
//   })

// ! call apply bind

// let obj = {
//   name: "raj",
//   age: 25,
// }

// function abcd() {
//   console.log(this)

// }
// abcd.call(obj)

// ! constructer function

// function Rammllm(name, age, work, color, day) {
//   this.name = name;
//   this.age = age;
//   this.work = work;
//   this.color = color;
//   this.day = day;
//   this.any4 = function (text) {
//     let ra = document.createElement("h")
//     ra.textContent = text
//     ra.style.color = color
//     document.body.append(ra)

//   }
// }
// Rammllm.prototype.time ="12:35"



// let ram = new Rammllm("raj", 23, "shopciper", "red", "sturday")
// let rajj = new Rammllm("raju", 23, "head", "black", "sturday")

// ! classes 


class Rammllm {
  constructor(name, age, work, color, day){
  this.name = name;
  this.age = age;
  this.work = work;
  this.color = color;
  this.day = day;
  }
 any4 (text) {
    let ra = document.createElement("h")
    ra.textContent = text
    ra.style.color = this.color
    document.body.append(ra)

  }
}
Rammllm.prototype.time = "12:35"



let ram = new Rammllm("raj", 23, "shopciper", "red", "sturday")
let rajj = new Rammllm("raju", 23, "head", "white", "sturday")

