<body>

    <div class="hero">
        <div class="hero-box">
            <img src="logo.png" class="logo">
            <h1>Nabi Handmade Studio</h1>
        </div>
    </div>

    <div class="container">
        ...
    </div>

    <a href="cart.html" class="cart-fixed">
        🛒 Cart <span id="cart-count">0</span>
    </a>

    <script src="app.js"></script>
</body>

function updateCartCount(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let count = cart.reduce((sum,item)=> sum + item.qty, 0);

    let el = document.getElementById("cart-count");

    if(!el) return;   // 🔥 IMPORTANT SAFETY

    el.innerText = count;
}
