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




// toster notifiction

function createToster(confe) {
return function (str) {
  let div  = document.createElement("div");
  div.textContent= str;
  div.className="inline-block bg-gray-800 text-white px-6 py-3 rounded shadow-lg pointer-events-none transition-opacity duration-300"
  document.querySelector(".toast").appendChild(div);
  setTimeout(() => {
    document.querySelector(".toast").removeChild(div)
  }, confe.duration*1000);

};
    
}

let toster = createToster({
    positionX:"right",
    positionY:"top",
    theme:"dark",
    duration:3,
     
});
toster("downlod now")
setTimeout(() => {
  toster("adfghjTYU")
}, 2000);