// // // this =>it is objcect
// // // common js->
// // this.name="abc"

// // //module.experts.name="abc";//modyfyinf the same object
// // module.experts={
// //     name="abc",
// // };   //reassigned gereko xam
// // console.log(this);




// // function a(){
// //     console.log(this);
// // }
// // a();

// const a=()=>{
//     console.log(this);
// }
// a();


// //!object method
// const user={
//     name:"john doe",
//     email:"john@gmail.com",
//     getname:function(){
//         console.log(this);
//         // console.log(this.name);
//     }
// };
// user.getname();



// const user={
//     name:"john doe",
//     email:"john@gmail.com",
//     getname:function(){
//         const b=()=>{
              
//         console.log(this);

//         }
//         b();
//     }
//     }
       
        // console.log(this.name);
    
// user.getname();

// const user={
//     name:"john doe",
//     email:"john@gmail.com",
//     getname:function(){
//         console.log(this.name);
//     }
// }
// const fn=user.getname;
// fn();


// //construnctor and class
// class user{
//    constructor(name,email,pass){
//        this.name=name;
//         this.email=email;
//         this.pass=pass;
//     }
// }
//     getname(){
//         return this.name;
//     }
    
// }
// const u1=new user("ram","ram@gmail.com" ,"ram1234");
// const u2=new user("ram","ram@gmail.com" ,"ram1234");



// console.log(u1.getname());
// console.log(u2.getname());





// !function object
const user={
    name:"john doe",
    email:"john@gmail.com",
    getname:function(){
        console.log(this);
        // console.log(this.name);
    }
};
function introduce(){
    console.log(this)
}
    console.log(introduce.name);


    //! methods
    // apply,call,bind
let ob={
    c:"c",
    d:"d",
}
let ob1={
    a:"a",
    e:"e",
}
function introduce (a,b){
    console.log("introduce");
    console.log(this.name,a,b);
}
introduce.call(user,23,12);
introduce.apply(user,[23,42]);




// bind

 const boundfn= introduce.bind(user,23,45);
 boundfn();



 const user={
    name: "john doe",
    email:
 }









  