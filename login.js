function login(username, password) {
  const storedUsername = "admin";
  const storedPassword = "1234";

  if (username === storedUsername && password === storedPassword) {
    console.log("Login Successful");
  } else {
    console.log("Invalid Username or Password");
  }
}
