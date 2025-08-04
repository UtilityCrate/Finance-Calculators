
function addGST() {
  const amount = parseFloat(document.getElementById("gstAmount").value);
  const rate = parseFloat(document.getElementById("gstRate").value);
  const result = document.getElementById("gstResult");

  if (!amount || !rate) return alert("Please enter both amount and GST rate.");

  const gstAmount = amount * (rate / 100);
  const totalAmount = amount + gstAmount;

  result.innerHTML = `
    <p><strong>GST Amount:</strong> ₹${gstAmount.toFixed(2)}</p>
    <p><strong>Total Amount (Including GST):</strong> ₹${totalAmount.toFixed(2)}</p>
  `;
}

function removeGST() {
  const amount = parseFloat(document.getElementById("gstAmount").value);
  const rate = parseFloat(document.getElementById("gstRate").value);
  const result = document.getElementById("gstResult");

  if (!amount || !rate) return alert("Please enter both amount and GST rate.");

  const baseAmount = amount / (1 + rate / 100);
  const gstAmount = amount - baseAmount;

  result.innerHTML = `
    <p><strong>Base Amount (Excluding GST):</strong> ₹${baseAmount.toFixed(2)}</p>
    <p><strong>GST Amount:</strong> ₹${gstAmount.toFixed(2)}</p>
  `;
}

