document
// Function to increase quantity
function increaseQuantity(button) {
    const itemDiv = button.parentNode.parentNode;
    const quantitySpan = itemDiv.querySelector('.quantity');
    const itemTotalSpan = itemDiv.querySelector('.item-total');
    const cartTotalSpan = document.getElementById('cart-total');

    let quantity = parseInt(quantitySpan.textContent);
    let price = parseInt(itemDiv.dataset.price);

    quantity++;
    quantitySpan.textContent = quantity;
    itemTotalSpan.textContent = quantity * price;

    updateTotal();
  }

  // Function to decrease quantity
  function decreaseQuantity(button) {
    const itemDiv = button.parentNode.parentNode;
    const quantitySpan = itemDiv.querySelector('.quantity');
    const itemTotalSpan = itemDiv.querySelector('.item-total');
    const cartTotalSpan = document.getElementById('cart-total');
  

    let quantity = parseInt(quantitySpan.textContent);
    let price = parseInt(itemDiv.dataset.price);

    if (quantity > 0) {
      quantity--;
      quantitySpan.textContent = quantity;
      itemTotalSpan.textContent = quantity * price;
    }

    updateTotal();
}

 // Function to toggle like
 function toggleLike(heart) {
    heart.classList.toggle('liked');
    heart.classList.toggle('fa-solid');
  }

  // Function to delete item
  function deleteItem(deleteButton) {
    const itemDiv = deleteButton.parentNode.parentNode;
    itemDiv.remove();

    updateTotal();
  }
 

    //  Function updateTotal();
    function updateTotal() {
        const itemTotalElements = document.querySelectorAll('.item-total');
        let cartTotal = 0;
    
        itemTotalElements.forEach((itemTotalElement) => {
          cartTotal += parseInt(itemTotalElement.textContent);
        });
    
        document.getElementById('cart-total').textContent = cartTotal;
      }