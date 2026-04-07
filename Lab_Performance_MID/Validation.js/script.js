const UNIT_PRICE = 1000;
const DAYS = 30;

const quantityInput = document.getElementById("quantity");
const totalField = document.getElementById("total");
const error = document.getElementById("error");

let couponShown = false;

function updateTotal() {
  let qty = Number(quantityInput.value);

  if (quantityInput.value === "") {
    totalField.value = 0;
    error.textContent = "";
    couponShown = false;
    return;
  }

  if (qty < 0) {
    qty = 0;
    quantityInput.value = 0;
    error.textContent = "Quantity cannot be less than 0";
  } else {
    error.textContent = "";
  }

  const total = UNIT_PRICE * qty * DAYS;
  totalField.value = total;

  if (total > 1000 && !couponShown) {
    alert("You are eligible for a gift coupon");
    couponShown = true;
  }

  if (total <= 1000) {
    couponShown = false;
  }
}

quantityInput.addEventListener("input", updateTotal);
updateTotal();