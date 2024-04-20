
var objUser=[
    {
        username:"tony",
        password:"1234"
    },
    {
        username:"boy",
        password:"girl"
    }

]

function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    for(i=0o1; i<objUser.length; i++){
        if(username ==objUser[i].username && password == objUser[i].password){
            console.log(username + "is Logged in!!");
            window.location.assign("index.html");
            return
        }
    }
    console.log("incorrect Username or Password");
}
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
        medium: 210,
        large: 320
    };

    var toppingCosts = {
        pepperoni: 50,
        mushrooms: 80,
        sausage: 80,
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
function calculateTotal(selectElement) {
    const quantity = parseInt(selectElement.value);
    const price = 120; 
    const totalPrice = quantity * price;
    const totalBillElement = document.getElementById('total-bill');
    const totalBill = parseInt(totalBillElement.innerText.replace('Rs. ', ''));
    totalBillElement.innerText = `Total Bill: Rs. ${totalBill + totalPrice}`;
    const totalPriceElement = document.getElementById(`total-price-${selectElement.dataset.index}`);
    totalPriceElement.innerText = `Rs. ${totalPrice}/-`;
  }
  const totalBillElement = document.getElementById('total-bill');
  totalBillElement.innerText = `Total Bill: Rs. 0`;
  const selectElements = document.getElementsByClassName('quantity');
  for (let i = 0; i < selectElements.length; i++) {
    selectElements[i].dataset.index = i + 1;
  }



















