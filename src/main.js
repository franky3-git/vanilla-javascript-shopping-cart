(function() {
	const overlay = document.querySelector('.overlay');
	const cart = document.querySelector('.cart');
	const btnOpenCart = document.querySelector('.btn-cart');
	const btnCloseCart = document.querySelector('.btn-close');
	
	btnOpenCart.addEventListener('click', () => {
		if(!cart.classList.contains('open')) {
			cart.classList.add('open');
		} 
	});
	
	btnCloseCart.addEventListener('click', () => {
		if(cart.classList.contains('open')) {
			cart.classList.remove('open');
		}
	});
})()