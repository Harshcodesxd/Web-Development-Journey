// Question 11

const users = [
    { name: "Rahul", role: "developer" },
    { name: "Priya", role: "student" }
]

const filterOutDev = users.filter(dev => {
    // if(dev.role === "developer"){
    //     return users
    // }
    return dev.role === "developer" // short syntax
})

console.log(filterOutDev);
