// Question 5

const users = [
    { name: "Rahul", role: "student" },
    { name: "Priya", role: "student" }
]

const updatedRole = users.map(dev => {
    return {...dev , role : "Developer"};
})

console.log(users);

console.log(updatedRole);