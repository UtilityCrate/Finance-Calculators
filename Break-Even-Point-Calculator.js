
function calculateBEP() {
  const fixedCost = parseFloat(document.getElementById("fixedCost").value);
  const variableCost = parseFloat(document.getElementById("variableCost").value);
  const sellingPrice = parseFloat(document.getElementById("sellingPrice").value);
  const result = document.getElementById("bepResult");

  if (!fixedCost || !variableCost || !sellingPrice || sellingPrice <= variableCost) {
    result.innerHTML = `<p class="text-red-600">Please enter valid inputs. Selling price must be greater than variable cost.</p>`;
    return;
  }

  const contribution = sellingPrice - variableCost;
  const breakEvenUnits = fixedCost / contribution;
  const breakEvenRevenue = breakEvenUnits * sellingPrice;

  result.innerHTML = `
    <p><strong>Break Even Units:</strong> ${breakEvenUnits.toFixed(2)} units</p>
    <p><strong>Break Even Revenue:</strong> ₹${breakEvenRevenue.toFixed(2)}</p>
  `;
}

