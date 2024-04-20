function updateTotal(PaneerTikkaPizza) {
    var quantity = document.querySelector('.quantity').value;
    var pizzaPrice = getPizzaPrice(pizzaName);
    var totalAmount = quantity * pizzaPrice;
    document.querySelector('.pizza-price').textContent = `Rs.${totalAmount.toFixed(2)}/-`;
}

function addToCart(PaneerTikkaPizza) {
    var quantity = document.querySelector('.quantity').value;
    var pizzaPrice = getPizzaPrice(PaneerTikkaPizza);
    var totalAmount = quantity * 120;

    // Example: Adding to a list
    var cartItemsList = document.getElementById('cart-items');
    var listItem = document.createElement('li');
    listItem.textContent = `${pizzaName} - Quantity: ${quantity}, Total: Rs.${totalAmount.toFixed(2)}/-`;
    cartItemsList.appendChild(listItem);

    // Example: Clearing quantity and updating total amount
    document.querySelector('.quantity').value = 0;
    updateTotalAmount();
}

function updateTotalAmount() {
    var totalAmount = 0;
    document.querySelectorAll('.pizza-price').forEach(function (element) {
        totalAmount += parseFloat(element.textContent.replace('Rs.', '').replace('/-', ''));
    });
    document.getElementById('total-amount').textContent = `Total Amount: Rs.${totalAmount.toFixed(2)}/-`;
}

function calculateTotal() {
    updateTotalAmount();
}

function getPizzaPrice(PaneerTikkaPizza) {
    var sizeSelect = document.querySelector('.quantity');
    var sizeRates = JSON.parse(sizeSelect.getAttribute('data-size-rates'));
    var selectedSize = sizeSelect.value || 'medium';
    return sizeRates[selectedSize] || 0;
}