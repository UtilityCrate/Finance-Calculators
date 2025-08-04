
function calculateEMI() {
    const P = parseFloat(document.getElementById("loanAmount").value);
    const R = parseFloat(document.getElementById("interestRate").value) / 12 / 100;
    const N = parseFloat(document.getElementById("loanTenure").value) * 12;

    if (!P || !R || !N) {
        alert("Please fill all fields correctly.");
        return;
    }

    const EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const totalPayment = EMI * N;
    const totalInterest = totalPayment - P;

    document.getElementById("emiResult").innerHTML = `
        <p><strong>Monthly EMI:</strong> ₹${EMI.toFixed(2)}</p>
        <p><strong>Total Interest:</strong> ₹${totalInterest.toFixed(2)}</p>
        <p><strong>Total Payment:</strong> ₹${totalPayment.toFixed(2)}</p>
    `;
}
