# vanilla javascript shopping cart

## html and css
---
1. making html template
2. style the page
3. make the \*product grid responsive\* 

## javascript
---
### load products inside the products-container 

1. change the type of the script tag to **module**
2. create a js folder inside the src folder and put the main.js file in it
3. create the items.js file with an array of each products caracteristics
4. export this array with es6 syntax
6. import the products array in the main.js file
7. create the loadProducts function and set the products-container equal to the loadProducts function

### add select product functionnality

1. set pointer-event of everything inside the btn-add-to-cart to none
2. add **click** event listener to product-container to bubble in each button
3. create a cart empty array in the global scope
4. for every click add new Object in the cart array with the img, name, and price of the item

### add select product to the cart UI
1. create the renderCart function
2. loop through each item of the cart and display it in the product-cart-container
3. call renderCart function each time you add item in the cart array 

### update the total in the cart 
1. create updateTotal function
2. use the reduce function to sum of the product cart array price 
3. set the total to the total in the UI
4. call the updateTotal function each time you add item in the cart array 

### add to cart to the localstorage
1. create a key for the localstorage
2. check if the key thing exist in the localstorage in the beginning of the code if it exist, set cart to it else, set cart to an empty array
`JSON.parse(localStorage.getItem(KEY_LOCAL_CART)) || [];`
3. create the saveCart function to save cart in the localstorage
4. call the saveCart function in the renderCart function
5. call the renderCart function in the beginning of the code
























