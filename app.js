let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ================= ADD ================= */
function addToCart(name, price, image){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let found = cart.find(i => i.name === name);

    if(found){
        found.qty++;
    }else{
        cart.push({
            name,
            price: Number(price),
            image:image,
            qty: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

alert("Added to Cart!);
      }
/* ================= COUNT ================= */
function updateCartCount(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let count = cart.reduce((s,i)=>{
        return s + (i.qty || 0);
    }, 0);

    let el = document.getElementById("cart-count");

    if(el) el.innerText = count;
}

/* ================= INIT ================= */
document.addEventListener("DOMContentLoaded", ()=>{
    updateCartCount();
});

/* ================= CROSS PAGE SYNC ================= */
window.addEventListener("storage", updateCartCount);
window.addEventListener("focus", updateCartCount);
