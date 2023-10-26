const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const table = document.querySelector("table");
const tr = document.createElement("tr");
const td = document.createElement("td");
let total = 0;
const getSum = () => {
//Add your code here

	total = 0;
	 const prices = document.querySelectorAll(".price");

    prices.forEach((price) => {
        total += parseInt(price.textContent);
    });

    // Clear any previous total in the table
    td.textContent = "";
    
    // Display the updated total in the table cell
    td.textContent = total;
    tr.appendChild(td);

    // If a total row already exists, remove it before adding the new one
    const existingTotalRow = table.querySelector(".total-row");
    if (existingTotalRow) {
        table.removeChild(existingTotalRow);
    }

    tr.className = "total-row";
    table.appendChild(tr);
  
};

getSumBtn.addEventListener("click", getSum);

