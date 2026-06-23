// !synchronous programming(blocking)
console.log("start")
//!settimeout
setTimeout(() =>{
    console.log("processing","a","b","c");
},
200,
"a",
"b",
21,
);

console.log("end");
// // clearTimeout(timer_id);
// // console.log("end");



// console.log("start");

// // setTimeout
// setTimeout(() => {
//     console.log("processing", "a", "b", 21);
// }, 200, "a", "b", 21);

// console.log("end");



// !setinterval
// setInterval(()=>{
//     console.log("interval");

// },2000);
// console.log("end");

// let i=0;
// const id=setInterval(()=>{
//     if(i===10){
//         clearInterval(id);
//     }
//     console.log(i);
//     i++;

// },2000);
// console.log("end");


let totalSeconds = 60;

const timer = setInterval(() => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");

    console.log(`${hours}:${minutes}:${seconds}`);

    totalSeconds--;

    if (totalSeconds < 0) {
        clearInterval(timer);
        console.log("Time's up!");
    }
}, 1000);




