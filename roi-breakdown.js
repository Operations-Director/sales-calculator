function calculateROI(leads, sales, price, margin, annualSales, annualProfit) {
  const leads10 = leads * 1.1;
  const sales10 = sales * 1.1;
  const annualSales10 = sales10 * 12 * price;
  const annualProfit10 = annualSales10 * (margin / 100);

  const leads20 = leads * 1.2;
  const sales20 = sales * 1.2;
  const annualSales20 = sales20 * 12 * price;
  const annualProfit20 = annualSales20 * (margin / 100);

  const additionalSales10 = annualSales10 - annualSales;
  const additionalProfit10 = annualProfit10 - annualProfit;
  const additionalSales20 = annualSales20 - annualSales;
  const additionalProfit20 = annualProfit20 - annualProfit;

  const investment = 5995;
  const roiMin = investment / additionalProfit20;
  const roiMax = investment / additionalProfit10;

  const formatMoney = (amount) =>
    parseFloat(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");

  document.getElementById("roi-breakdown").innerHTML = `
    <div class="results">
      <div><strong>10% Increase:</strong></div>
      <div>Leads per Month: ${leads10.toFixed(0)}</div>
      <div>Sales per Month: ${sales10.toFixed(1)}</div>
      <div>Annual Sales: £${formatMoney(annualSales10)}</div>
      <div>Annual Profit: £${formatMoney(annualProfit10)}</div>

      <div><strong>20% Increase:</strong></div>
      <div>Leads per Month: ${leads20.toFixed(0)}</div>
      <div>Sales per Month: ${sales20.toFixed(1)}</div>
      <div>Annual Sales: £${formatMoney(annualSales20)}</div>
      <div>Annual Profit: £${formatMoney(annualProfit20)}</div>
    </div>

    <div class="extra-info">
      <div><strong>With Improved Systems & Processes:</strong></div>
      <div>You could generate an additional <strong>£${formatMoney(additionalSales10)} to £${formatMoney(additionalSales20)}</strong> in annual sales.</div>
      <div>You could generate an additional <strong>£${formatMoney(additionalProfit10)} to £${formatMoney(additionalProfit20)}</strong> in annual profit.</div>
    </div>

    <div class="roi-info">
      <div><strong>Let us do the work for you with Digital Operations Director for as little as a 
        <span style="color:#00b7c2;">£${formatMoney(investment)}</span> investment</strong></div>
      <div>and get your return within <strong>${roiMin.toFixed(2)} to ${roiMax.toFixed(2)} years</strong>.</div>
    </div>
  `;
}
