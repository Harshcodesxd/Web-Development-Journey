// que - 1
let title = document.getElementById("title")
title.textContent = "Hello Javascript"

// que - 2
let desc = document.querySelector(".description");
desc.textContent = "New Description"

// que - 3
let colorChange = document.querySelectorAll(".item")

colorChange.forEach((l) => {
    l.style.color = "red"
})

// que - 4
let msg = document.querySelector("#message")
msg.textContent = "Welcome to JavaScript!"

// que - 5
const container = document.querySelector("#container")
container.innerHTML = `<h2>My Website</h2>
<p>Welcome to my website!</p>`

// que - 6
const imgChange = document.querySelector("#profileImage")
imgChange.setAttribute("src", "https://avatars.githubusercontent.com/u/291566521?v=4")
imgChange.setAttribute("alt", "New Image")

// que - 7
const btn = document.querySelector("#btn")
btn.classList.add("red") // add kr dega class
btn.classList.remove("red") // remove kr dega 
btn.classList.toggle("red") // lgi h to hta dega ( reverser )
  

// que - 8
const heading = document.querySelector("#heading")
heading.setAttribute("style", "background-color: orange; font-size: 100px; color:blue;")

// que - 9
const productBtn = document.querySelector("#productBtn")
const value = productBtn.dataset.id // reading from dataset
console.log(value);
productBtn.dataset.email = "hello@example.com" // writing 

// que - 10
const pTag = document.createElement("p")
pTag.textContent = "mera name pTag hai"
const body = document.querySelector("body")
body.append(pTag)

// que - 11
// Basic method
const ul = document.querySelector("#skills")
// const li1 = document.createElement("li")
// const li2 = document.createElement("li")
// const li3 = document.createElement("li")
// li1.textContent = "HTML"
// li2.textContent = "CSS"
// li3.textContent = "JavaScript"
// skills.appendChild(li1)
// skills.appendChild(li2)
// skills.appendChild(li3)
// skills.append(li1, li2, li3)

// Advance Method
// let skillsArr = ["HTML", "CSS", "JavaScript", "React"]
// skillsArr.forEach((skill) => {
//     const li = document.createElement("li")
//     li.textContent = skill
//     li.style.color = "red"
//     skills.append(li)
// })


// que - 12
// let skillsArr2 = ["HTML", "CSS", "JavaScript", "React"]
// skillsArr2.forEach((skill) => {
//     const li = document.createElement("li")
//     li.textContent = skill
//     li.style.color = "blue"
//     skills.prepend(li)
// })

// que - 13 
const skills2 = document.querySelector("#skills2")
const css = document.createElement("li")
css.textContent = "CSS"
skills2.insertBefore(css, skills2.children[1])

// que - 14
skills2.children[1].remove()

// que - 15
const btn2 = btn.cloneNode(true)

body.append(btn)
