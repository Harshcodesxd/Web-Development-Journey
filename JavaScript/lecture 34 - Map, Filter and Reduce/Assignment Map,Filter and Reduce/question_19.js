// Question 19

const frontendtechnologies  = ["HTML", "CSS", "JavaScript"];

// console.log(frontendtechnologies.join(", ")); // but we have to use REDUCE couldn't do like this

const singlecomma = frontendtechnologies.reduce((a, b) => {
    return a + ", "+ b 
}) 

console.log(singlecomma);