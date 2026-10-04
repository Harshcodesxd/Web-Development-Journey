// Question 14

const email = ["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"];

let checkGmail = email.filter(e => {
     return e.endsWith("@gmail.com"); // @gmail.com must be in end 
   // return e.includes("@gmail.com") // @gmail.com can be in center still it will provide
})

console.log(checkGmail);