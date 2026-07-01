/* =========================
   🛒 CART SYSTEM
========================= */

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){

    let found = cart.find(item => item.name === name);

    if(found){
        found.qty += 1;
    }else{
        cart.push({
            name: name,
            price: price,
            qty: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("🛒 Added: " + name);
}


/* =========================
   🧺 CART PAGE RENDER
========================= */

function renderCart(){

    let container = document.getElementById("cart");
    let totalBox = document.getElementById("total");

    if(!container) return;

    let html = "";
    let total = 0;

    cart.forEach((item, index) => {

        let itemTotal = item.price * item.qty;
        total += itemTotal;

        html += `
        <p>
            🛍 ${item.name} <br><br>

            <button onclick="decrease(${index})">-</button>
            ${item.qty}
            <button onclick="increase(${index})">+</button>

            <br><br>
            = ${itemTotal} MMK
        </p>
        <hr>
        `;
    });

    container.innerHTML = html;
    totalBox.innerText = "Total: " + total + " MMK";
}

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
}


/* =========================
   🔍 LIGHTBOX ZOOM
========================= */

function openZoom(img){

    let lightbox = document.getElementById("lightbox");
    let lightboxImg = document.getElementById("lightboxImg");

    if(!lightbox || !lightboxImg) return;

    lightbox.style.display = "flex";
    lightboxImg.src = img.src;

    // background scroll stop
    document.body.style.overflow = "hidden";
}

function closeZoom(){

    let lightbox = document.getElementById("lightbox");

    if(lightbox){
        lightbox.style.display = "none";
    }

    document.body.style.overflow = "auto";
}


/* =========================
   🧠 AUTO INIT
========================= */

renderCart();
