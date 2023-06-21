document.addEventListener('DOMContentLoaded', function() {
  // para el primer producto
  document.getElementById('producto1').addEventListener('click', function() {
      var quantity = document.getElementById('cantidad1').value;
      addToCart({
          name: 'MATEÏ SOCIAL CLUB - World Champion Edition',
          price: 26.25
      });
  });

  // para el segundo producto
  document.getElementById('producto2').addEventListener('click', function() {
      var quantity = document.getElementById('cantidad2').value;
      addToCart({
          name: 'MATEÏ SOCIAL CLUB',
          price: 21.00,
          quantity: quantity
      });
  });

  document.getElementById('producto3').addEventListener('click', function() {
    var quantity = document.getElementById('cantidad3').value;
    addToCart({
        name: 'MATEÏ Vinil',
        price: 29.99,
        quantity: quantity
    });
});

document.getElementById('producto4').addEventListener('click', function() {
  var quantity = document.getElementById('cantidad4').value;
  addToCart({
      name: 'MATEÏ Tote Bag',
      price: 15.00,
      quantity: quantity
  });
});



});

function addToCart(product) {
  product.quantity = 1;

  var cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);

  localStorage.setItem('cart', JSON.stringify(cart));

  window.location.href = 'carrito.html';
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementsByClassName('boton1').addEventListener('click', function() {
      alert('Ahora recibiras emails con noticias sobre MATEÏ');
  });
});