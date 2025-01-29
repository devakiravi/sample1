// Add JavaScript code here
let cart = [];

document.querySelectorAll('.product button').forEach(button => {
	button.addEventListener('click', () => {
		const product = button.parentNode;
		const name = product.querySelector('h3').textContent;
		const price = product.querySelector('p').textContent;
		cart.push({ name, price });
		updateCart();
	});
});

function updateCart() {
	const cartItems = document.querySelectorAll('.cart-item');
	cartItems.forEach(item => item.remove());
	cart.forEach(item => {
		const cartItem = document.createElement('div');
		cartItem.className = 'cart-item';
		cartItem.innerHTML = `
			<p>${item.name}</p>
			<p>${item.price}</p>
			<button>Remove</button>
		`;
		document.querySelector('.cart').appendChild(cartItem);
	});
	const total = cart.reduce((acc, item) => acc + parseFloat(item.price), 0);
	document.querySelector('.cart p:last-child').textContent = `Total: $${total.toFixed(2)}`;
}