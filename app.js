let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ADD */
function addToCart(name, price){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let found = cart.find(i => i.name === name);

    if(found){
        found.qty++;
    }else{
        cart.push({name, price:Number(price), qty:1});
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
}

/* COUNT */
function updateCartCount(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let count = cart.reduce((s,i)=> s + (i.qty || 0), 0);

    let el = document.getElementById("cart-count");

    if(el) el.innerText = count;
}

/* RUN ON LOAD */
updateCartCount();

/* FIX REALTIME BETWEEN PAGES */
window.addEventListener("storage", updateCartCount);
window.addEventListener("focus", updateCartCount);
