
function calculateCI() {
  const principal = parseFloat(document.getElementById("ciPrincipal").value);
  const rate = parseFloat(document.getElementById("ciRate").value);
  const time = parseFloat(document.getElementById("ciTime").value);
  const freq = parseFloat(document.getElementById("ciFreq").value);
  const result = document.getElementById("ciResult");

  if (!principal || !rate || !time || !freq) {
    result.innerHTML = `<p class="text-red-600">Please fill in all fields.</p>`;
    return;
  }

  const amount = principal * Math.pow((1 + (rate / (freq * 100))), freq * time);
  const ci = amount - principal;

  result.innerHTML = `
    <p><strong>Total Amount:</strong> ₹${amount.toFixed(2)}</p>
    <p><strong>Compound Interest:</strong> ₹${ci.toFixed(2)}</p>
  `;
}

