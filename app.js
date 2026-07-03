let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ================= ADD TO CART ================= */
function addToCart(name, price){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let found = cart.find(item => item.name === name);

    if(found){
        found.qty++;
    }else{
        cart.push({name, price, qty:1});
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount(); // instant update
}

/* ================= CART COUNT ================= */
function updateCartCount(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let count = cart.reduce((sum,item)=> sum + (item.qty || 0), 0);

    document.querySelectorAll("#cart-count").forEach(el=>{
        el.innerText = count;
    });
}

/* run on page load */
updateCartCount();


function copyOrder(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if(cart.length === 0){
        alert("Cart is empty!");
        return;
    }

    let text = "🧾 ORDER\n\n";
    let total = 0;

    cart.forEach(item=>{

        let price = Number(item.price || 0);
        let qty = Number(item.qty || 0);

        let sum = price * qty;
        total += sum;

        text += ${item.name} x${qty} = ${sum} MMK\n;
    });

    text += \nTOTAL: ${total} MMK;

    /* SAFE COPY METHOD */
    if(navigator.clipboard && window.isSecureContext){
        navigator.clipboard.writeText(text)
        .then(()=> alert("Copied!"))
        .catch(()=> fallbackCopy(text));
    }else{
        fallbackCopy(text);
    }
}

/* fallback for mobile */
function fallbackCopy(text){
    let textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    alert("Copied!");
}
