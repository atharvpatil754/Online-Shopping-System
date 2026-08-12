let cart = [];
let total = 0;

function addToCart(product, price) {

    cart.push({
        name: product,
        price: price
    });

    total = total + price;

    displayCart();
}

function displayCart() {

    let cartItems = document.getElementById("cartItems");

    cartItems.innerHTML = "";

    cart.forEach(function(item, index) {

        cartItems.innerHTML += `
            <p>
                ${item.name} - ₹${item.price}
                <button onclick="removeItem(${index})">
                    Remove
                </button>
            </p>
        `;

    });

    document.getElementById("total").innerText = total;
}

function removeItem(index) {

    total = total - cart[index].price;

    cart.splice(index, 1);

    displayCart();
}

function showProducts() {

    document.getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });
}