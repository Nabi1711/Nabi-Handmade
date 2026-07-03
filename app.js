function addToCart(name, price){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let found = cart.find(item => item.name === name);

    if(found){
        found.qty++;
    }else{
        cart.push({name, price, qty:1});
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount(); // 🔥 instant UI update
}

function updateCartCount(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let count = cart.reduce((sum,item)=> sum + item.qty, 0);

    document.querySelectorAll("#cart-count").forEach(el=>{
        el.innerText = count;
    });
}

/* 🔥 RUN ALWAYS */
setInterval(updateCartCount, 300);
