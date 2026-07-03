/* ================= CART LOAD ================= */
let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ================= ADD TO CART ================= */
function addToCart(name, price){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let found = cart.find(item => item.name === name);

    if(found){
        found.qty++;
    }else{
        cart.push({
            name: name,
            price: Number(price),
            qty: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert("Added to Cart!");
}

/* ================= UPDATE CART COUNT ================= */
function updateCartCount(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let count = cart.reduce((sum,item)=>{
        return sum + (item.qty || 0);
    }, 0);

    let el = document.getElementById("cart-count");

    if(el){
        el.innerText = count;
    }
}

/* ================= INIT ================= */
document.addEventListener("DOMContentLoaded", function(){
    updateCartCount();
});

/* ================= SYNC ACROSS PAGES ================= */
window.addEventListener("storage", function(){
    updateCartCount();
});
