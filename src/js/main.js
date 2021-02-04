import products from './items.js';
const KEY_LOCAL_CART = 'cart';

//Take the localstorage cart or set an empty array for the cart
const cart = JSON.parse(localStorage.getItem(KEY_LOCAL_CART)) || [];

const log = console.log;

renderCart();

//Make the functionnality for showing the cart
(function() {
	const overlay = document.querySelector('.overlay');
	const cartUI = document.querySelector('.cart');
	const btnOpenCart = document.querySelector('.btn-cart');
	const btnCloseCart = document.querySelector('.btn-close');
	
	btnOpenCart.addEventListener('click', () => {
		if(!cartUI.classList.contains('open')) {
			cartUI.classList.add('open');
			overlay.style.display = 'block';
		} 
	});
	
	btnCloseCart.addEventListener('click', () => {
		if(cartUI.classList.contains('open')) {
			cartUI.classList.remove('open');
			overlay.style.display = 'none';
		}
	});
})();


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
			
			const productAdded = {img, name, price};
			cart.push(productAdded);

			renderCart();
			saveCart();
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

//render cart
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
	});
	updateTotal();
}

//update total
function updateTotal() {
	const totalCart = document.querySelector('.total');
	const total = cart.reduce((accumulator, product) => {
		return accumulator + product.price;
	}, 0)
	
	totalCart.textContent = total;
}

//save cart
function saveCart() {
	localStorage.setItem(KEY_LOCAL_CART, JSON.stringify(cart));
}

































































































