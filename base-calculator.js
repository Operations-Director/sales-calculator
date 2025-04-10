function calculateAll() {
  const leads = parseFloat(document.getElementById("leads").value);
  const sales = parseFloat(document.getElementById("sales").value);
  const price = parseFloat(document.getElementById("price").value);
  const margin = parseFloat(document.getElementById("margin").value);

  const annualSales = sales * 12 * price;
  const annualProfit = annualSales * (margin / 100);

  const formatMoney = (amount) =>
    parseFloat(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");

  document.getElementById("results").innerHTML = `
    <div><strong>Current:</strong></div>
    <div>Annual Sales: £${formatMoney(annualSales)}</div>
    <div>Annual Profit: £${formatMoney(annualProfit)}</div>
  `;

  calculateROI(leads, sales, price, margin, annualSales, annualProfit);
}
