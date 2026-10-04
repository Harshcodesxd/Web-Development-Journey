// Question 10

const user = {
    name: "Rahul",
    email: "rahul@example.com"
};

Object.entries(user).forEach(property => {
    const [keys,value] = property;
    console.log(`${keys}:${value}`);
})