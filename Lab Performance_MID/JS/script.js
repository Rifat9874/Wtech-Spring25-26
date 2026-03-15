var unitPrice = 1000;
var days = 30;

var quantity = document.getElementById("quantity");
var totalPrice = document.getElementById("totalPrice");

quantity.addEventListener("input", function () {
  var q = quantity.value;

  if (q < 0) {
    alert("Quantity cannot be less than 0");
    quantity.value = 0;
    q = 0;
  }

  var total = unitPrice * q * days;

  if (q == "") {
    total = 0;
  }

  totalPrice.value = total;

  if (total > 1000) {
    alert("Congratulations! You are eligible for a gift coupon.");
  }
});
