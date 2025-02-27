document.addEventListener("DOMContentLoaded", () => {
    const addButtons = document.querySelectorAll(".product button");
    const cartCount = document.getElementById("cart-count");

    // Get cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Update the cart count on the page
    function updateCartCount() {
        cartCount.textContent = cart.length;
    }

    // Event listener to add products to the cart
    addButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const product = document.querySelectorAll(".product")[index];
            const productName = product.querySelector("h3").textContent;
            const productPrice = product.querySelector("p").textContent;

            // Add product to cart
            const productDetails = { name: productName, price: productPrice };
            cart.push(productDetails);
            localStorage.setItem("cart", JSON.stringify(cart)); // Save cart to localStorage

            // Update cart count
            updateCartCount();
        });
    });

    // Initialize cart count on page load
    updateCartCount();
});
