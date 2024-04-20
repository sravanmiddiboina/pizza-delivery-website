document.addEventListener('DOMContentLoaded',function () {
    var pizzaSizeSelect = document.getElementById('pizzaSize');
    var pepperonicheckbox = document.getElementById('pepperoni');
    var mushroomscheckbox = document.getElementById('mushrooms');
    var sausagecheckbox = document.getElementById('sausage');
    var addressTextarea = document.getElementById('address');
    var totalAmountSpan = document.getElementById('totalAmount');
    var confirmButton = document.querySelector('button');

    var sizeCosts = {
        small : 120,
        medium: 150,
        large: 290
    };

    var toppingCosts = {
        pepperoni: 30,
        mushrooms: 50,
        sausage: 60,
    };
    function updateTotalAmount(){
        var selectedSize = pizzaSizeSelect.value;
        var baseCost = sizeCosts[selectedSize] ||0;
        var toppingCost = 0;
        if (pepperonicheckbox.checked){
            toppingCost += toppingCosts.pepperoni ||0;
        }
        if (mushroomscheckbox.checked){
            toppingCost += toppingCosts.mushrooms ||0;
        }
        if (sausagecheckbox.checked){
            toppingCost += toppingCosts.sausage ||0;
        }
        var totalAmount = baseCost + toppingCost;
        totalAmountSpan.textContent = totalAmount.toFixed(2);
    }
    pizzaSizeSelect.addEventListener('change',updateTotalAmount);
    pepperonicheckbox.addEventListener('change',updateTotalAmount);
    mushroomscheckbox.addEventListener('change',updateTotalAmount);
    sausagecheckbox.addEventListener('change',updateTotalAmount);
    confirmButton.addEventListener('click',function(){
        var shippingAddress  = addressTextarea.value;
        var totalAmount = totalAmountSpan.textContent;
        console.log('order confirmed');
        console.log('Shipping Address:',shippingAddress);
        console.log('Total Amount',totalAmount);
    });
});
function showPopup() {
    document.getElementById('popup-overlay').style.display = 'block';
    document.getElementById('popup-container').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup-overlay').style.display = 'none';
    document.getElementById('popup-container').style.display = 'none';
}
function updateTotal(PaneerTikkaPizza) {
    var quantity = document.querySelector('.quantity').value;
    var pizzaPrice = getPizzaPrice(PaneerTikkaPizza);
    var totalAmount = quantity * 120;
    document.querySelector('.pizza-price').textContent = 'Rs.${totalAmount.toFixed(2)}/-';
}

function addToCart(PaneerTikkaPizza) {
    var quantity = document.querySelector('.quantity').value;
    var pizzaPrice = getPizzaPrice(PaneerTikkaPizza);
    var totalAmount = quantity * 120;

    // Example: Adding to a list
    var cartItemsList = document.getElementById('cart-items');
    var listItem = document.createElement('li');
    listItem.textContent = '${PaneerTikkaPizza} - Quantity: ${quantity}, Total: Rs.${totalAmount.toFixed(2)}/-';
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
    document.getElementById('total-amount').textContent = 'Total Amount: Rs.${totalAmount.toFixed(2)}/-';
}

function calculateTotal() {
    // Implement any other logic you need before calculating the total
    updateTotalAmount();
    // Additional logic if needed...
}

function getPizzaPrice(pizzaName) {
    // Implement the logic to get the price of the pizza based on its name
    // This is a placeholder, modify as needed
    if (pizzaName === 'Paneer Tikka Pizza') {
        return 120;
    }
    // Add more cases for other pizzas as needed
}