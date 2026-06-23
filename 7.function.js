//function express
// var greet =function greet(user="guest", role="guest"){
//     const msg='hello ${user}.you are ${role}.';
//     return msg;

// };
// console.log(greet());
// let add= function(a,b){
//     // let sum=a+b;
//     // return sum;
//     return a+b;
// };
// console.log(add(12,3));


//arrow function 
// const add=function(a,b) => {
//     return a+b;
// };
// console.log(add(34,5));

// const mul=function(x,y) => {
//     return x*y;
// };
// console.log(mul(5,4));//arrow syntax use hunxa jatibela hami direct return statement lekheko hunxau



//iS Even(num) by uisng arrow function return chaii boolean aaunu paryo true or false
// const num= (i) =>{
//     if (i%2===0){
//         return true;
//     }else{
//         return false
//     }
// }
// console.log(num(3));
// const num=function(i){
//     if (i%2===0){
//         return true;
//     }else{
//         return false
//     }
// }
// console.log(num(3));




// const num= (i) => i%2===0;

// console.log(num(6));

//callback function 
// const parent=function(a) {
//     console.log("parent");
//     a();
// };
//  const child=function() {
//     console.log("child");
//  };
//  parent("child");


// const child=function(){
//     console.log("child");
// };
// parent(child);
// parent(child());


// higher order function

// const outer=()  =>{
//     console.log("outer");
//     const inner= () => {
//         console.log ("inner");

//     };
//     return inner;
// };
// const x=outer();
// x();
//task:calculate(a,b,);
// calculate(10,2,add)



// function calculate(a,b, operation){
//     return operation (a,b)
// }
// function add(x,y){
//     return x+y;
// }
// function subtract(x, y) {
//     return x - y;
// }

// console.log(calculate(10, 5, add));      
// console.log(calculate(10, 5, subtract));


// const calculate = (a, b, operation) => {
//     const res = operation(a, b);
//     console.log("Result is:", res);
// };

// const add = (a, b) => a + b;

// calculate(10, 20, add);

// function factory
//  const factory=(a) => {
//      return (b) =>{
//          return a+b;
//     };
//  };
// const factory=(a)=> (b)=> a+b;
// const add5=factory(5);
// const add10=factory(10);
// console.log(add5(10));
// console.log(add5(20));
// console.log(add5(12));

//todo:generator function  *, yield
// function* Generatecount() {
// let i = 1;

// while (i > 0) {
//     console.log(i);
//    yield i++;
// }};
// function* Generatecount() {
// let count=1;
// while(true){
//     console.log(count);
//     yield count++;
// }};
//     console.log("start");

// //     yield 2;
// //     console.log("mid");

// //     yield 3;
// //     console.log("end");

// // }
// const count=Generatecount();
// console.log(count.next());
// console.log(count.next());
// console.log(count.next());
// console.log(count.next());
// console.log(count.next());
// console.log(count.next());
// console.log(count.next());
// console.log(count.next());

// async function







// todo:IIFE

// IIFE (Immediately Invoked Function Expression) in JavaScript

// // An IIFE is a function that runs immediately after it is defined.
// (
//     function(){
//         console.log("IIFE");
//     }

// )();

// Syntax:

// (function () {
//     console.log("Hello!");
// })();

//!scope
// global scope="global const";

// let global_let = "global let";
// const global_const=" global const";
// var global_var="global var";
//*block 
// if (true){
//     let block_let="block let";
//     const block_const="block const";
//     var block_var="block var";
// }
// console.log(block_const);
// console.log(block_let);
// console.log(block_var);
// // *funtion 
// if (true){
//     let function_let="function let";
//     // const function_const="function const";
//     // var function_var="function var";
//     console.log(function_var)
// }
// // console.log(function_const);
// // console.log(function_var);
// console.log(function_let);


// lexical scope

// function a(){
//     let x=10;
//     console.log(x);

//     function b(){
//         let x=11;
//         console.log(x);
//         function c(){
//             console.log(x);

//         }
//         c();


        
//     }
//     b();
// }
// a();





// *scope chain



// if(true){
//     let x="x";
//     if (true){
//         let x=20;
//         if (true){
//             console.log(x);
//             x=40;
//         }
//         console.log(x);

//     }
//     console.log(x);

// }
// // console.log(x);





// function myfunction(){
//     console.log("welcome to my college");
//     console.group("we are learning javasscript");
// }
// myfunction();


// function sum(x,y){
//     console.log(x+y)

// }
// sum(5,6);


// function sum(x,y){ 
//     // local variables x,y===parameter(x,Y)=>they are like local variables
//     // they are lies in block scope
//     s=x+y;
//     return s;
// }
// let val=sum(3,4);
// console.log(val);


// // Arrow function=>compact/short way of writing a program
// const arrowmul=(a,b)=>{
//     console.log(a*b);
// }


// function countvowels(str){
//     let count=0;
// for(const char of str){
//     if(char==="a"||char=== "e"|| char==="i"||char==="o"||char==="u")
//     count++;
// }
// }
// console.log(count);









