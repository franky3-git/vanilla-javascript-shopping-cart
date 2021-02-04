import products from './items.js';

const log = console.log;

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

const cart = [];

//Load products in the UI, eventHandler to add product to cart
(function() {
	const containerProduct = document.querySelector('.products-container');

	
	containerProduct.innerHTML = loadProducts();
	
	containerProduct.addEventListener('click', (e) => {
		if(e.target.matches('.btn-add-to-cart')) {
			const product = e.target.parentElement;
			const img = product.querySelector('img').getAttribute('src');
			const name = product.querySelector('.name-product').textContent;
			const price = parseFloat(product.querySelector('.price-product').textContent);
			
			const productAdded = {img, name, price}
			//log(productAdded);
			cart.push(productAdded);
			log(cart);
			renderCart();
		}
	})
		
})();

//load product in the UI function
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

function renderCart() {
	const cartContainer = document.querySelector('.product-cart-container');
	cartContainer.innerHTML =  cart.map(product => {
		return `
			<div class="product-cart">
				<div class="product-cart-img">
					<img src="${product.img}" alt="${product.name}">
				</div>
				<div class="product-cart-middle">
					<p class="product-cart-name">${product.name}</p>
					<p class="product-cart-price">${product.price}</p>
					<p class="btn-remove-from-cart">remove</p>
				</div>
				<input type="number" min="1" class="qty" value="1">
			</div>
		`
	})
}




































































































