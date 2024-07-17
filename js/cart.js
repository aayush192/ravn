let cartHTML='';
let total=0;
cart.forEach((item)=>{
    total+=item.price*item.quantity;
cartHTML+=`<div class="cart-item">
<img src=${item.img} alt="Product Image">
<div class="item-details">
    <h2>${item.name}</h2>
    <p>Price: ${item.price}</p>

    <button class="remove-button">Remove</button>
</div>
</div>

<div class="total">
<h3>Total:${total}</h3>
<button class="checkout-button">Checkout</button>
</div>`
})
document.querySelector('.cart-container').innerHTML=cartHTML;