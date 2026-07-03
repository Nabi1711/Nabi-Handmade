let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* 🛒 ADD TO CART (MAIN FUNCTION) */
function addToCart(name, price){

    let found = cart.find(item => item.name === name);

    if(found){
        found.qty += 1;
    }else{
        cart.push({
            name:name,
            price:price,
            qty:1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();   // 🔥 IMPORTANT
}

/* 🛒 UPDATE CART COUNT */
function updateCartCount(){

    let cartData = JSON.parse(localStorage.getItem("cart")) || [];

    let count = 0;

    cartData.forEach(item=>{
        count += item.qty;
    });

    let el = document.getElementById("cart-count");
    if(el){
        el.innerText = count;
    }
}

/* 🛒 CART RENDER */
function renderCart(){

    let container = document.getElementById("cart");
    let totalBox = document.getElementById("total");

    if(!container) return;

    let html = "";
    let total = 0;

    cart.forEach((item,i)=>{
        let sum = item.price * item.qty;
        total += sum;

        html += `
        <p>
        ${item.name}<br>
        <button onclick="decrease(${i})">-</button>
        ${item.qty}
        <button onclick="increase(${i})">+</button>
        <br>
        ${sum} MMK
        </p>
        `;
    });

    container.innerHTML = html;
    totalBox.innerText = "Total: " + total + " MMK";
}

/* ➕ ➖ QTY */
function increase(i){
    cart[i].qty++;
    saveCart();
}

function decrease(i){
    if(cart[i].qty > 1){
        cart[i].qty--;
    }else{
        cart.splice(i,1);
    }
    saveCart();
}

function saveCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
    updateCartCount();
}

/* 🔍 LIGHTBOX */
function openZoom(img){
    document.getElementById("lightbox").style.display="flex";
    document.getElementById("lightboxImg").src = img.src;
}

function closeZoom(){
    document.getElementById("lightbox").style.display="none";
}

/* 🚀 INIT */
updateCartCount();
renderCart();
