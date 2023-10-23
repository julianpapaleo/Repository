// Para los botones con clase 'boton1'
document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.getElementsByClassName('boton1');
  for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function() {
          alert('Ahora recibirás emails con noticias sobre MATEÏ');
      });
  }
});

function addToCart(product) {
  var cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  window.location.href = 'carrito.html';
}

// Funciones específicas para cada producto que se llamarán desde el HTML
function addProduct1ToCart() {
  var quantity = parseInt(document.getElementById('cantidad1').value, 10);
  addToCart({
      name: 'MATEÏ SOCIAL CLUB - World Champion Edition',
      price: 26.25,
      quantity: quantity
  });
}

function addProduct2ToCart() {
  var quantity = parseInt(document.getElementById('cantidad2').value, 10);
  addToCart({
      name: 'MATEÏ SOCIAL CLUB',
      price: 21.00,
      quantity: quantity
  });
}

function addProduct3ToCart() {
  var quantity = parseInt(document.getElementById('cantidad3').value, 10);
  addToCart({
      name: 'MATEÏ Vinil',
      price: 29.99,
      quantity: quantity
  });
}

function addProduct4ToCart() {
  var quantity = parseInt(document.getElementById('cantidad4').value, 10);
  addToCart({
      name: 'MATEÏ Tote Bag',
      price: 15.00,
      quantity: quantity
  });
}
