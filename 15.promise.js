// @@ -0,0 +1,133 @@
//! promise  ->  {}
//* is a object that represents eventual completion or failure of async task

// states of promise
//* pending
//* fulfilled / resolved
//* rejected

// const promise = new Promise((resolve, reject) => {
//   // fetch user
//   setTimeout(() => {
//     resolve({ message: "Promise resolved" });
//     // reject({ message: "Promise rejected" });
//   }, 3000);
// });

// // console.log("start");

// // console.log(promise);

// // ? handling promise

// // promise
// //   .then((data) => {
// //     console.log(data);
// //     console.log(promise);
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //     console.log(promise);
// //   })
// //   .finally(() => {
// //     console.log("finally");
// //   });

// // const promiseFunc = () => {
// //   return new Promise((resolve, reject) => {
// //     // fetch user
// //     setTimeout(() => {
// //       resolve({ message: "Promise resolved" });
// //       // reject({ message: "Promise rejected" });
// //     }, 3000);
// //   });
// // };

// // const add = (a, b) => {
// //   return a + b;
// // };

// // const c = add(12, 3);

// // promiseFunc()
// //   .then((data) => {
// //     console.log(data);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });
// // a.then




const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;

      console.log("user fetched");

      if (error) {
        reject({ message: "User fetch failed" });
      } else {
        resolve({
          _id: 1,
          name: "John Doe",
          email: "john@gmail.com",
        });
      }
    }, 2000);
  });
};

const fetchPosts = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;

      console.log("posts fetched");

      if (error) {
        reject({ message: "Posts fetch failed" });
      } else {
        resolve([
          {
            _id: 1,
            userId,
            title: "Post 1",
          },
          {
            _id: 2,
            userId,
            title: "Post 2",
          },
        ]);
      }
    }, 2000);
  });
};
const fetchComments = (postId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;

      if (error) {
        reject({ message: "Comments fetch failed" });
      } else {
        resolve([
          { _id: 1, postId, text: "Nice Post" },
          { _id: 2, postId, text: "Great Work" }
        ]);
      }
    }, 2000);
  });
};
// Promise Chaining
fetchUser()
  .then((user) => {
    return fetchPosts(user._id);
  })
  .then((posts) => {
    console.log("Posts:", posts);

    
    return fetchComments(posts[0]._id);
  })
  .then((comments) => {
    console.log("Comments:", comments);
  })
  .catch((err) => {
    console.log("Error:", err.message);
  });

console.log("end");

// // !fetch api
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response)=>{
//   return response.json();
// })
// .then((posts)=>{
//   console.log(posts);

// })
// .catch((err)=>{
//   console.log(err);
// });

// *async function
// *async/await
// *try/catch block
// syntatic sugar over promises
const fetchdata=async()=>{
  try{
  console.log("async start")
  const user=await fetchuser();
  console.log(user);
  const post=await fetchposts(user._id);
  console.log(posts);
  const comments=await fetchcomments(posts[1]._id);
  console.log(comments);
  console.log("async end")
} catch(error){
  console.log("catch");
  console.log(error);
}finally{
  console.log("finally");
}
};
fetchdata();
console.log("end");






