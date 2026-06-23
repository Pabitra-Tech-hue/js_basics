// //! array
// //? numbered indexed  -> start from 0
// //! array constructor / new keyword
// // const arr = new Array(3,3,4,56);

// //! array literal
// const numbers = [5, 4, 5, 6, 45]; //

// //
// const el = numbers[0];
// // console.log(el);
// // console.log(numbers[numbers.length - 1]);
// // console.log(numbers[-1]);
// // console.log(numbers.length);

// //* adding new element
// // from end
// //* push()
// const res = numbers.push(100, 45, 67);
// console.log(res);

// //unshift()
// numbers.unshift(12, 32);

// //* removing element
// // ? from end index
// // pop()
// console.log(numbers);
// // const result = numbers.pop();
// // console.log(result);

// //? from start index
// // shift()
// numbers.shift();

// console.log(numbers);

// //splice()

// //! searching
// //* includes  -> return boolean
// console.log(numbers.includes(100));
// console.log(numbers.includes(200));

// //* indexOf
// console.log(numbers.indexOf(100));
// console.log(numbers.indexOf(200));

// //! at()
// console.log(numbers.at(0)); // numbers[0]
// console.log(numbers.at(-1));
// console.log(numbers.at(-2));

// //! splice
// //* arr_name.splice(start_index , delete_count , item1,item2,....item)
// const x = numbers.splice(2, 0, 456, 768, 897);
// console.log(numbers);
// console.log(x);



// let marks=[45,67,78,90,23,34];
// console.log(marks);
// console.log(marks.length)
// let marks=[34,67,89,90,68,];
// for(let index=0;index<marks.length;index++){
// console.log(marks[index]);
// }
// //!for of
// let marks=[45,35,556,67,78];
// for(let mark of marks){
//     console.log(mark);
// }


// for a given array with marks of  student =>[67,45,67,90,56]find the average marks of entire class.
// let marks=[45,35,556,67,78]
// let sum=0;
// for ( let value of marks){
//     sum+=value;
// }
// let avg=sum/marks.length;
// console.log(`avg marks of the class=${avg}`);




// push!
// var marks=[45,67,89,];
// var res=marks.push(56,34,23)
// console.log(res);




// var marks=[45,67,89,56,34,23];
// var res=marks.pop(56,34,23)
// console.log(res);



const numbers = [10, 20, 30, 40];

// adding new elements at the end
const res = numbers.push(100, 45, 67);

console.log(numbers);
