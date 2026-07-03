function getCart(){
    return JSON.parse(localStorage.getItem("cart")) || [];
}

/* 🛒 ADD TO CART */
function addToCart(name, price){

    let cart = getCart();

    let found = cart.find(item => item.name === name);

    if(found){
        found.qty++;
    }else{
        cart.push({name, price, qty:1});
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
}

/* 🔥 CART COUNT (GLOBAL SAFE) */
function updateCartCount(){

    let cart = getCart();

    let count = cart.reduce((sum, item)=> sum + item.qty, 0);

    document.querySelectorAll("#cart-count").forEach(el=>{
        el.innerText = count;
    });
}

/* INIT ON EVERY PAGE */
document.addEventListener("DOMContentLoaded", ()=>{
    updateCartCount();
});
