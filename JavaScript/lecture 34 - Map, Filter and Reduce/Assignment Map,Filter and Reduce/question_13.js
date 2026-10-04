// Question 13

const users = [
    { name: "Rahul", isActive: true },
    { name: "Priya", isActive: false }
]

let activeUser = users.filter(({isActive}) => {
    return isActive ;
})

console.log(activeUser);