document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.getElementById('overlay');
  const closeOverlay = document.getElementById('closeOverlay');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartBtn = document.getElementById('cart');
  const closeCart = document.getElementById('closeCart');
  const cartItems = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');

  overlay.classList.remove('hidden');

  closeOverlay.addEventListener('click', function () {
    overlay.classList.add('hidden');
  });

  cartBtn.addEventListener('click', function () {
    cartOverlay.classList.remove('hidden');
  });

  closeCart.addEventListener('click', function () {
    cartOverlay.classList.add('hidden');
  });

  let cart = [];
  document.querySelectorAll('.add-to-cart').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const name = btn.dataset.name;
      cart.push(name);
      cartCount.textContent = cart.length;
      const li = document.createElement('li');
      li.textContent = name;
      cartItems.appendChild(li);
    });
  });

  document.getElementById('subscribe').addEventListener('click', function () {
    const email = document.getElementById('email').value;
    if (email) {
      alert('Danke für dein Interesse!');
    }
  });
});
