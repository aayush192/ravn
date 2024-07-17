
let productHTML='';
const product={

};
arr.forEach((product)=>{
    
    productHTML+=`<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.img}">
          </div>

          <div class="product-name limit-text-to-2-lines">
          ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="${product.rating}">
          </div>

          <div class="product-price">
            Rs ${product.price}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>
          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-order-id=${product.id}>
            Add to Cart
          </button>
        </div>
  `;
  
});
document.querySelector('.grid').innerHTML=productHTML;

