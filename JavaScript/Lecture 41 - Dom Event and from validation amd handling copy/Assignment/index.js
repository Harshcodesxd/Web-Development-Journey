// que - 1 -> print message || que - 2 -> preventdefault()
const form = document.querySelector("#form")
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log("Form submitted successfully!");
// })

// que - 3 
const inputName = document.querySelector("#name")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = inputName.value
    console.log(value);
})


// que - 4
const skillList = document.querySelector("#skills")

// method - 1 mine
skillList.addEventListener("change", (e) => {
    if(e.target.value){
         console.log(skillList.value);
    }
})

// method - 2 sir
// skillList.addEventListener("change", (e) => {
//     if(e.target.value){
//          console.log(e.target.value);
//     }
// })


// que - 5
inputName.addEventListener("focus" , (e) => {
    console.log("focused");
    inputName.style.outlineColor = "red"
})

// que - 6
inputName.addEventListener("blur" , (e) => {
    console.log("You left the input field.");
})


// que - 7, que - 8, que - 9, que - 10
const inputEmail = document.querySelector("#email")
const inputPassword = document.querySelector("#password")


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameValue = inputName.value
    const email = inputEmail.value
    const password = inputPassword.value

    if (!nameValue) {
        console.log("Name Field is Required");
        return
    }
    if (!email) {
        console.log("Email Field is Required");    
        return
    }

    if (!password) {
        console.log("Password Field is Required");    
        return
    }
    if (password.length < 6) {
        console.log("Password must be at least 6 characters");    
        return
    }

    console.log({name : nameValue, email : email, password , skillList});
})

