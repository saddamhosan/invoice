const date = new Date();
document.getElementById("date").innerText = date.toLocaleDateString();
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function () {
  const boyerDetail = document.getElementById("boyer-input-field");
  const invoiceText = document.getElementById("invoice-text");
  invoiceText.innerText = boyerDetail.value;
});
document.getElementById("add-btn").addEventListener("click", function () {
  const nameField = document.getElementById("name-field");
  const priceField = document.getElementById("price-field");
  const quantityField = document.getElementById("quantity-field");
  const addTable = document.getElementById("add-table");
  const total = priceField.value * quantityField.value;

  const tr = document.createElement("tr");
  tr.innerHTML = `<th>${nameField.value}</th> <td>${priceField.value}</td><td>${quantityField.value}</td><td class="total">${total}</td> `;
  addTable.appendChild(tr);
  const totalPrice = document.getElementsByClassName("total");
  let subTotal = 0;
  for (const element of totalPrice) {
    subTotal += parseInt(element.innerText);
  }
  const tex = subTotal * 0.2;
  const grandTotal = subTotal + tex;
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tex").innerText = parseFloat(tex.toFixed(2));
  document.getElementById("grand-total").innerText = grandTotal;
  document.getElementById("grand").innerText = grandTotal;
});
