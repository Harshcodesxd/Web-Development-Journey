// Question 15

const user = {
    name: "Rahul",
    role: "developer"
}

const newUser = {...user}
newUser.name = "random"

console.log(user);
console.log(newUser);