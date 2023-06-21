var cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', function() {
    displayCart();
});

function displayCart() {
    var cartItemsDiv = document.getElementById('cartItems');
    var total = 0;

    cartItemsDiv.innerHTML = '';

    for (var i = 0; i < cart.length; i++) {
        cartItemsDiv.innerHTML += '<p>' + cart[i].name + ' - ' + cart[i].price + ' x ' + cart[i].quantity + 
        ' <button class="cart-button" onclick="increaseQuantity(' + i + ')">+</button> ' + 
        '<button class="cart-button" onclick="decreaseQuantity(' + i + ')">-</button></p>';
        total += cart[i].price * cart[i].quantity;
    }

    cartItemsDiv.innerHTML += '<p>Total: ' + total + '</p>';
}

function increaseQuantity(index) {
    cart[index].quantity++;
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function decreaseQuantity(index) {
    cart[index].quantity--;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);  // remueve el producto si la cantidad es 0
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('checkout').addEventListener('click', function() {
        alert('Compra finalizada');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementsByClassName('boton1').addEventListener('click', function() {
        alert('Ahora recibiras emails con noticias sobre MATEÏ');
    });
  });