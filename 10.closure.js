// //?closure
// console.log(x);
// var x=10;
// console.log(x);

// function a(){
//     console.log(b);
//     var b=30;
//     console.log(b);
// }
// a();
// a();

// //!
// const parent=()=>{
//     let x="parent var";
//     const children=()=>{
//         console.log(x);
//     };
//     return children;

// };
// const inner=parent();
// const inner1=parent();
// const inner1=parent();
// // // 
// const counter=()=>{
//     let count=0;

//     return ()=>{
//         count++;
//         console.log(count);

//     };
// };
// const c1=counter();
// const c2=counter();
// c1();
// c2();
// c1();
// c2();

// const c1=counter();
// const c2=counter();
// c1();
// c2();
// c1();
// c2();


// const increment=()=>{
   
//        const incrementt=()=>{
//         return count;

//     };
// };

// ]decrement
// const decrement=()=>{
     
//         const decrement=()=>{
//       return count;

//     };
// };

//     const getcount=()=> {
    
       
//         return count;

//     };
//     return{
//         increment,
//         decrement,
//         getcount
//     };

//     const c1=counter();
//     console.log(c1);
//     c1.increment();
//     c1.increment();
//     c1.increment();
    // console.log(c1.getcount());



    // const createcounter=()=>{
    //     let count=0;
    //     return{
    //         increment:()=>{
    //             count++;
    //         },
    //         decrement:()=>{
    //             count--;
    //         },
    //         getcount:(){
    //            return count;
    //         }

            
    //     };
    // };
    // const conter=createcounter();
    // Counter.increment();
//     // counter.increment();
//     // console.log(counter.getcount());

//     // counter.decrement();
//     // console.log(counter.getcount());
//     const createCounter = () => {
//     let count = 0;

//     return {
//         increment: () => {
//             count++;
//         },

//         decrement: () => {
//             count--;
//         },

// //         getCount: () => {
// //             return count;
// //         }
// //     };
// // };

// // const counter = createCounter();

// // counter.increment();
// // counter.increment();
// // console.log(counter.getCount()); // 2

// // counter.decrement();
// // console.log(counter.getCount());



// const createAccount=(aa_name,initial_amount)=>{
//   let  balance=1000;
//   const name=Account_name;


//     deposit=(amount=5000)=>{
        
//         if(amount<=0){
//             console.log("invalid deposit amount");
//             balance=balance+amount;
//             console.log("new balance is :",balance)
//         }

//     },
//     withdraw=(amount=500)=>{
//         if (amount<0){
//             console.log("invalid withdrawamount ",amount);
//             return;
//         }
//         if (balance_amount<500){
//             console.log("insufficinet balance")
//             return;
//         }
//         balance=balance-amount;
//         console.log("new balance is:",balance);


//     balance_inq=()=>{
//         return balance
//     }
// }
// };
// const acc1=Account("john doe",1500);
// acc1.deposit(500);
// acc1.deposit(-500);
// acc1.deposit(0);
// acc1.withdraw(2500);
// console.log("balance:",acc1.balance_inq);


//!caching
const outer=()=>{
    let cache={};
    return(a)=>{
        if (cache[a]){
            return cache[a];
        }
        console.log("calculating");
        for (let i=0;i<=900000;i++){}
        cache[a]=a*a;
            return cache[a];

        };
    };
    const square=outer();
    console.log(square(2));
    console.log(square(2));
    console.log(square(20));
    console.log(square(30));

    

