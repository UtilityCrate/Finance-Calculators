
function calculateProfitMargin() {
  const cost = parseFloat(document.getElementById("pmCost").value);
  const sell = parseFloat(document.getElementById("pmSell").value);
  const result = document.getElementById("pmResult");

  if (!cost || !sell || cost <= 0) {
    result.innerHTML = `<p class="text-red-600">Please enter valid cost and selling price.</p>`;
    return;
  }

  const profit = sell - cost;
  const profitPercent = (profit / cost) * 100;
  const marginPercent = (profit / sell) * 100;

  result.innerHTML = `
    <p><strong>Profit:</strong> ₹${profit.toFixed(2)}</p>
    <p><strong>Profit % on Cost:</strong> ${profitPercent.toFixed(2)}%</p>
    <p><strong>Margin % on Sale:</strong> ${marginPercent.toFixed(2)}%</p>
  `;
}

