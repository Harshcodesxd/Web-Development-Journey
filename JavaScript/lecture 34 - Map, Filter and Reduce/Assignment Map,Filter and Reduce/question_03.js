// Question 3

const users = [
    {
        name: "Rahul",
        email: "rahul@example.com"
    },
    {
        name: "Priya",
        email: "priya@example.com"
    }
]


const userName = users.map(user => {
    return user.name;
    
})


console.log(userName);