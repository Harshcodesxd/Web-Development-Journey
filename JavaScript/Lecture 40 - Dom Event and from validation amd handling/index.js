/* 
🖱️ Mouse & Pointer Events
These trigger when a user interacts with a pointing device like a mouse or trackpad.
• click: Fires when an element is clicked.
• dblclick: Fires when an element is double-clicked.
• mouseenter / mouseover: Fires when the mouse pointer moves onto an element.
• mouseleave / mouseout: Fires when the mouse pointer leaves an element.
• mousedown: Fires when a mouse button is pressed down.
• mouseup: Fires when a pressed mouse button is released.
• mousemove: Fires continuously as the mouse moves over an element.

⌨️ Keyboard Events
These track user interactions with the physical keyboard.
• keydown: Fires the moment a key is pressed down (triggers for all keys).
• keyup: Fires when a pressed key is released.
• keypress: Fires when a key that produces a character value is pressed (deprecated in modern standards but still widely found).
 
📝 Form & Input Events
Essential for handling text inputs, checkboxes, and form submissions.
• submit: Fires when a user submits a form.
• change: Fires when an element's value changes and focus is lost (useful for <select> dropdowns and radio buttons).
• input: Fires instantly every single time a character is typed or altered inside an input field.
• focus: Fires when an element (like an input field) gains focus/is clicked into.
• blur: Fires when an element loses focus (e.g., clicking outside a text box).
• reset: Fires when a form's reset button is pressed.

🪟 Window & Lifecycle Events
These track state changes of the browser window or page document.
• DOMContentLoaded: Fires when the initial HTML document has been completely parsed, without waiting for stylesheets or images to load.
• load: Fires when the whole page has completely loaded, including all dependent resources like stylesheets and images.
• resize: Fires whenever the browser window is resized.
• scroll: Fires when the document view or an element is scrolled.
• error: Fires when a resource (like an image) fails to load properly.
 */


// let btn = document.querySelector("#btn")
// let div = document.querySelector("#reveal-gift")
// let h1 = document.querySelector("#gift")

// function revealGift(event) {
//     console.log("Iphone 18 Pro Max");
//     // h1.classList.remove("hidden")
//     // h1.classList.add("visible")
//     h1.classList.toggle("hidden")// can use toggle for off on with 1 button
//     console.log(event);
//     console.log(event.type);
//     console.log("Target :", event.target); // jis element p click kiya
//     console.log("Current-Target :", event.currentTarget); // jis element p event listner lga hua hai
// }
/* btn.addEventListener('click' , () =>{
    console.log("MIC CHECK");
}) */


// div.addEventListener("click", revealGift)

// function fun1(e) {
//     console.log(e);
// }

// btn.addEventListener('click', fun1) // for adding eventlistener
// btn.removeEventListener('click', fun1) // for removing event listener


// bit advance than above 
// let counter = 0;

// function fun1(e) {
//     if(counter < 3) {
//         console.log(e);
//         counter++
//     }
//     else {
//         btn.removeEventListener('click', fun1)
//     }
// }
// this for clicking  only "3" time 
// btn.addEventListener("click", fun1)


//        bubbling kaise hoti h ->
// let outter = document.querySelector("#outter")
// let inner = document.querySelector("#inner")
// let btn2 = document.querySelector("#btn2")
// let body = document.querySelector("body")

// body.addEventListener('click', (e)=> {
//     e.stopPropagation()
//     console.log("body"); 
// })

// outter.addEventListener('click', (e) => {
//     e.stopPropagation() // bubbling stop krta h
//     console.log("outter");
// })

// inner.addEventListener('click', (e) => {
//      e.stopPropagation()
//     console.log("inner");
// })

// btn2.addEventListener('click', (e) => {
//      e.stopPropagation()
//     console.log("btn2");
// })




// event delegation

let body = document.querySelector("body")

// body.appendChild(div)
// body.appendChild(div2)

// body.append(div, div2) // in this we can give multiple div in 1 line  // append = insert in last of body
// body.prepend(div, div2) // in this we can give multiple div in 1 line  // prepend = insert in start of body

let products = [
    {
        id: "1",
        name: "iphone",
        price: 129999,
        ImgUrl: "https://m.media-amazon.com/images/I/51Vs7ZwpSpL._AC_UY218_.jpg"
    },
    {
        id: "2",
        name: "samsung",
        price: 99999,
        ImgUrl: "https://m.media-amazon.com/images/I/618F1CD-gbL._AC_UY218_.jpg"
    },
    {
        id: "3",
        name: "MI 15",
        price: 29999,
        ImgUrl: "https://m.media-amazon.com/images/I/61mC0V8M+0L._AC_UY218_.jpg"
    },
    {
        id: "4",
        name: "motorola",
        price: 459999,
        ImgUrl: "https://m.media-amazon.com/images/I/61kN-e1U08L._AC_UY218_.jpg"
    },
    {
        id: "5",
        name: "Nothing",
        price: 51261,
        ImgUrl: "https://m.media-amazon.com/images/I/81P1ioEfxGL._AC_UY218_.jpg"
    },
];

let productList = document.querySelector("#product-list")

products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("singleProduct");

    card.dataset.productId = product.id;
    const dltBtn = document.createElement("button");
    const addToCartBtn = document.createElement("button");
    dltBtn.textContent = "Remove product"
    addToCartBtn.textContent = "Add to cart"

    // dltBtn.addEventListener("click" , (e) => {
    //     e.stopPropagation()
    //     card.remove()
    // })


    card.innerHTML = `<div>
       <img src=${product.ImgUrl} alt="">
    </div>
    <div class="productDetail">
        <p>${product.name}</p>
        <p>${product.price}</p>
        <div> 
          <div>
                <div> 
                    <div id="inner-div"> 

                    </div>
                </div> 
            </div>
        </div>
    </div>
    `

    // document.querySelector("inner-div").append(dltBtn)
    card.append(dltBtn)
    // card.append(addToCartBtn)

    productList.append(card)

})

productList.addEventListener("click", (e) => {
    e.stopPropagation();

    const dltBtn = e.target;

    // console.log(dltBtn.parentElement);
    // console.log(dltBtn.tagName);
    // console.log(dltBtn.textContent);

    // if (e.target.tagName === "BUTTON") {
    //     // e.target.parentElement.remove()
    // }

    // console.log(dltBtn.parentElement.dataset.productId);

    if (dltBtn.textContent === "Remove product" && dltBtn.tagName === "BUTTON") {
        // dltBtn.parentElement.remove()
        // dltBtn.closest(".singleProduct").remove()
    }

    // console.log(dltBtn.closest(".singleProduct"));

})