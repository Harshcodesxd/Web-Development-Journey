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

let body = document.querySelector("body")

// body.appendChild(div)
// body.appendChild(div2)

// body.append(div, div2) // in this we can give multiple div in 1 line  // append = insert in last of body
// body.prepend(div, div2) // in this we can give multiple div in 1 line  // prepend = insert in start of body

let products = [
  {
    name: "iphone",
    price: 129999,
    ImgUrl : "https://m.media-amazon.com/images/I/51Vs7ZwpSpL._AC_UY218_.jpg"
  },
  {
    name: "samsung",
    price: 99999,
    ImgUrl : "https://m.media-amazon.com/images/I/618F1CD-gbL._AC_UY218_.jpg"
  },
  {
    name: "MI 15",
    price: 29999,
    ImgUrl : "https://m.media-amazon.com/images/I/61mC0V8M+0L._AC_UY218_.jpg"
  },
  {
    name: "motorola",
    price: 459999,
    ImgUrl : "https://m.media-amazon.com/images/I/61kN-e1U08L._AC_UY218_.jpg"
  },
  {
    name: "Nothing",
    price: 51261,
    ImgUrl : "https://m.media-amazon.com/images/I/81P1ioEfxGL._AC_UY218_.jpg"
  },
];

let productList = document.querySelector("#product-list");

products.forEach((product) => {
  const card = document.createElement("p");
  card.classList.add("singleProduct");

  //BAD METHOD BELOW ->
  // const upperDiv = document.createElement("div")
  // const lowerDiv = document.createElement("div")
  // const img = document.createElement("img")
  // img.setAttribute("src", "https://m.media-amazon.com/images/I/51Vs7ZwpSpL._AC_UY218_.jpg")
  // upperDiv.append(img)
  // card.append(upperDiv)
  // productList.append(card)

  card.innerHTML = ` 
      <div>
        <img
          src= ${product.ImgUrl}
          alt="iphone 16 pro max"
        />
      </div>
      <div class="productDetails">
        <p>${product.name}</p>
        <p>${product.price}</p>
      </div>`

      productList.append(card)
});


/* how to remove 

// body.removeChild(h2) //you have to perform on parent

h2.remove() //directly on the element you want to remove
*/


let clone = productList.cloneNode(true);

// Body.append(clone)


const items = productList.children


// productList.insertBefore(h2, item[2])
// item[2].after(h2) ache se samaj nhi aya + not img