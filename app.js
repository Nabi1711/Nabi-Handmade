let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* 🛒 ADD TO CART */
function addToCart(name, price){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let found = cart.find(item => item.name === name);

    if(found){
        found.qty++;
    }else{
        cart.push({
            name:name,
            price:price,
            qty:1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    console.log("cart updated:", cart);
}

/* 🔥 UPDATE CART COUNT */
function updateCartCount(){

    let data = JSON.parse(localStorage.getItem("cart")) || [];

    let count = 0;

    data.forEach(item=>{
        count += item.qty;
    });

    let el = document.getElementById("cart-count");
    if(el){
        el.innerText = count;
    }
}

/* INIT */
updateCartCount();
