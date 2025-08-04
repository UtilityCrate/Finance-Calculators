
function calculateTax() {
  const income = parseFloat(document.getElementById("annualIncome").value);
  let tax = 0;

  if (!income || income <= 0) {
    alert("Please enter valid annual income.");
    return;
  }

  if (income <= 250000) {
    tax = 0;
  } else if (income <= 500000) {
    tax = (income - 250000) * 0.05;
  } else if (income <= 1000000) {
    tax = (250000 * 0.05) + (income - 500000) * 0.2;
  } else {
    tax = (250000 * 0.05) + (500000 * 0.2) + (income - 1000000) * 0.3;
  }

  // Rebate u/s 87A if income < ₹5,00,000
  if (income <= 500000) tax = 0;

  document.getElementById("taxResult").innerHTML = `
    <p><strong>Estimated Tax Payable:</strong> ₹${tax.toFixed(2)}</p>
    <p><strong>Effective Tax Rate:</strong> ${(tax / income * 100).toFixed(2)}%</p>
  `;
}
