
function calculateSIP() {
    const P = parseFloat(document.getElementById("sipAmount").value); // Monthly Investment
    const R = parseFloat(document.getElementById("sipRate").value) / 100 / 12; // Monthly Interest Rate
    const N = parseFloat(document.getElementById("sipYears").value) * 12; // Total months

    if (!P || !R || !N) {
        alert("Please fill all fields correctly.");
        return;
    }

    // SIP Maturity Formula
    const maturity = P * ((Math.pow(1 + R, N) - 1) / R) * (1 + R);
    const invested = P * N;
    const gain = maturity - invested;

    document.getElementById("sipResult").innerHTML = `
        <p><strong>Maturity Amount:</strong> ₹${maturity.toFixed(2)}</p>
        <p><strong>Total Investment:</strong> ₹${invested.toFixed(2)}</p>
        <p><strong>Wealth Gained:</strong> ₹${gain.toFixed(2)}</p>
    `;
}

