
const form = document.querySelector("#form")
const btn = document.querySelector("#btn")
const username = document.querySelector("#username")
const bio = document.querySelector("#bio")
const charCount = document.querySelector("#char-count")
const checkbox = document.querySelector("#checkbox")

const limit = 69

charCount.textContent = `${limit} characters remaining`

form.addEventListener("submit", (e) => {
    e.preventDefault(); // for not letting page refresh defaultly on submission
    const password = document.querySelector("#password").value
    const email = document.querySelector("#email").value

    console.log({ username: username.value, password, email });

})

bio.addEventListener("input" , (e) => {
    let remaining = limit - bio.value.length;
    charCount.textContent = `${remaining} characters remaining`
})


username.addEventListener("change", (e) => {
    console.log("change event", username.value);
})

username.addEventListener("input", (e) => {
    console.log("input event", username.value);
})

checkbox.addEventListener("change" , (e) => {
    console.log(checkbox.checked);
})





