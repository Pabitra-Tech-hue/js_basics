//?objects
// object is a complex structures that stores  the related values in single variable.
// let user_name="john";
// let user_email="john@gmail.com";
// let user_password="12345";


// ?object constructor 
// const obj=new object()

// ?object literal->{}
// const user={
//     name:"john doe",
//     email="john@gmail.com",
// };
// console.log(user);
// #accessing object properties
//  let name =user.name;
//  console.log(name);
//  console.log(user);

//  //!bracket notation []
//  console.log(user["email"]);
//  console.log(user["full nmae"]);

   const user={
    name:"john doe",
     email="john@gmail.com",
    user_key="1234",
  };
//  let user_key="email";
//  console.log(user.user_key);
//  console.log(user[user_key]);

 //adding new properties
 user.password="12345";
 user["password"]="12345";
 console.log(user);


 //?modify object properties
 user.password="password";
 console.log(user);
 //?delete object properties
 delete user.password;
 console.log(user);objects 



  
//  objects methods
const keys=object.keys(user);
console.log(keys);
const values=object.values(user);
console.log(values);


// entries()
console.log(object.entries(user));



// main memory
// 234-> x:10;
// 124-> y:10;
// 124-> user:2334;

// heap memory


//?object.seal()
object.seal(user);
user.age=10;
user.password("1234");
console.log(user);

// object.freeze()
object.freeze(user);
user.age=26;
user.password="1234";
console.log(user);


// spread operator , rest operator, destructuring

 