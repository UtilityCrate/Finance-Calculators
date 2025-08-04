
function calculateFD() {
    const P = parseFloat(document.getElementById("fdPrincipal").value);
    const R = parseFloat(document.getElementById("fdRate").value) / 100;
    const T = parseFloat(document.getElementById("fdYears").value);
    const N = 4; // Quarterly compounding

    if (!P || !R || !T) {
        alert("Please fill all fields correctly.");
        return;
    }

    const A = P * Math.pow(1 + R / N, N * T); // Compound Interest Formula
    const interest = A - P;

    document.getElementById("fdResult").innerHTML = `
        <p><strong>Maturity Amount:</strong> ₹${A.toFixed(2)}</p>
        <p><strong>Total Interest Earned:</strong> ₹${interest.toFixed(2)}</p>
    `;
}

