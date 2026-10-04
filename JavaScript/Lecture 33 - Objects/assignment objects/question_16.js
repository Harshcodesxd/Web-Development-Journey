// Question 16

const user = {
    name: "Rahul",
    role: "student"
}

const newUser = {...user , role : "developer"} // ye tarika good h
// newUser.role = "developer" ye tarika acha nhi hota

console.log("user :", user);
console.log("newUser :",newUser);