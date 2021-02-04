import products from './items.js';

//Make the functionnality for showing the cart
(function() {
	const overlay = document.querySelector('.overlay');
	const cart = document.querySelector('.cart');
	const btnOpenCart = document.querySelector('.btn-cart');
	const btnCloseCart = document.querySelector('.btn-close');
	
	btnOpenCart.addEventListener('click', () => {
		if(!cart.classList.contains('open')) {
			cart.classList.add('open');
			overlay.style.display = 'block';
		} 
	});
	
	btnCloseCart.addEventListener('click', () => {
		if(cart.classList.contains('open')) {
			cart.classList.remove('open');
			overlay.style.display = 'none';
		}
	});
})();


//Load products in the UI
(function() {
	const containerProduct = document.querySelector('.products-container');

	
	containerProduct.innerHTML = loadProducts();
	
})();

function loadProducts() {
	return products.map(product => {
		return `
			<div class="product">
				<div class="img-product">
					<img src="${product.img}" alt="table one">
				</div>
				<h3 class="name-product">${product.name}</h3>
				<p class="price-product">${product.price}</p>
				
				<div class="btn-add-to-cart">
					<i class="fa fa-cart-plus"></i>
					<p>add to cart</p>
				</div>
			</div>
		`
	}).join('');
}






































































































