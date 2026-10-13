
// let h1 = document.getElementById("hi")
// let h1 = document.querySelector("h1")
// let h1 = document.querySelector(".hi")
// let h1 = document.querySelector("#hi")

// let h1 = document.querySelectorAll("h1")
// console.log(h1);

// let p = document.querySelector("#desc")

// p.textContent = "Hi, Bacho kaise ho"
// p.innerHTML = "<h2>Hello Dostooooo</h2>" // very veryyy riskyy! 

// console.log(p);
// console.log(p.textContent);
// console.log(p.innerHTML);
// console.log(p.innerText);


// p.setAttribute("style", "background-color: red; font-size: 40px");

// let btn = document.querySelector("#btn")

// btn.setAttribute("disabled", "true")
// btn.textContent = "Remove"

// let res = p.getAttribute("style") // res = result ( short form)

// console.log(res);


// p.removeAttribute("style")


// p.classList.add("random")
// p.classList.remove("random")
// p.classList.toggle("random")

// console.log(p.classList.contains("random"));


// p.style.backgroundColor = "brown"

// p.dataset.helloDostoHii = "Hii"

// console.log(p.dataset.helloDostoHii);

// -----------------------------------------------


// let div = document.createElement("div")
// let div2 = document.createElement("div")

// div.textContent = "Hello"
// div2.textContent = "Div 2"

// let body = document.querySelector("body")

// body.appendChild(div)
// body.appendChild(div2)

// body.append(div, div2) // in this we can give multiple div in 1 line  // append = insert in last of body
// body.prepend(div, div2) // in this we can give multiple div in 1 line  // prepend = insert in start of body


let products = [
    {
        name : "iphone",
        price : 129999
    },
    {
        name : "samsung",
        price : 99999
    },
    {
        name : "MI 13",
        price : 29999
    },
    {
        name : "motorola",
        price : 459999
    },
    {
        name : "lava 12",
        price : 39999
    },
]

let productList = document.querySelector("#product-list")

products.forEach((product) => {
    const card = document.createElement("p")
    card.textContent = `${product.name} - ${product.price}`
    productList.append(card)
});