
// let h1 = document.getElementById("hi")
// let h1 = document.querySelector("h1")
// let h1 = document.querySelector(".hi")
// let h1 = document.querySelector("#hi")

// let h1 = document.querySelectorAll("h1")
// console.log(h1);

let p = document.querySelector("#desc")

// p.textContent = "Hi, Bacho kaise ho"
// p.innerHTML = "<h2>Hello Dostooooo</h2>" // very veryyy riskyy! 

// console.log(p);
// console.log(p.textContent);
// console.log(p.innerHTML);
// console.log(p.innerText);


p.setAttribute("style", "background-color: red; font-size: 40px");

let btn = document.querySelector("#btn")

btn.setAttribute("disabled", "true")
btn.textContent = "Remove"

let res = p.getAttribute("style") // res = result ( short form)

console.log(res);


p.removeAttribute("style")


p.classList.add("random")
p.classList.remove("random")
p.classList.toggle("random")

console.log(p.classList.contains("random"));


// p.style.backgroundColor = "brown"

p.dataset.helloDostoHii = "Hii"

console.log(p.dataset.helloDostoHii);