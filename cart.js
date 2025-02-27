document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");
    const checkoutButton = document.getElementById("checkout-button");

    // Get cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Display cart items
    function displayCartItems() {
        cartItemsContainer.innerHTML = ""; // Clear current items

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        } else {
            cart.forEach((item, index) => {
                const cartItem = document.createElement("div");
                cartItem.classList.add("cart-item");
                cartItem.innerHTML = `
                    <span><strong>${item.name}</strong> - ${item.price}</span>
                    <button class="remove-item" data-index="${index}">Remove</button>
                `;
                cartItemsContainer.appendChild(cartItem);
            });

            // Add event listeners to remove buttons
            document.querySelectorAll(".remove-item").forEach(button => {
                button.addEventListener("click", (event) => {
                    const index = event.target.getAttribute("data-index");
                    cart.splice(index, 1); // Remove item from cart
                    localStorage.setItem("cart", JSON.stringify(cart)); // Update cart in localStorage
                    displayCartItems(); // Re-render cart
                });
            });
        }
    }

    // Checkout Button
    checkoutButton.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Your cart is empty.");
        } else {
            alert("Proceeding to checkout...");
            localStorage.removeItem("cart"); // Clear cart after checkout
            displayCartItems(); // Re-render cart
        }
    });

    // Display cart items on page load
    displayCartItems();
});
