function addToCart(name, price){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: price,
        qty: 1
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount(); // 🔥 ADD THIS

    alert("Added!");
}

function updateCartCount(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let count = 0;

    cart.forEach(item=>{
        count += item.qty;
    });

    let el = document.getElementById("cart-count");
    if(el){
        el.innerText = count;
    }
}

updateCartCount(); // run on load
