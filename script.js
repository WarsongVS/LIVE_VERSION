document.getElementById("generateTableBtn").addEventListener("click", function () {
    const participants = parseInt(document.getElementById("participants").value);
    const quantity = parseInt(document.getElementById("quantity").value);
    const minValue = parseInt(document.getElementById("minValue").value);
    const maxValue = parseInt(document.getElementById("maxValue").value);

    if (participants > 0 && quantity > 0 && minValue < maxValue) {
        generateDynamicTable(participants, quantity, minValue, maxValue);
    } else {
        alert("Verifique los valores ingresados.");
    }
});

document.getElementById("clearBtn").addEventListener("click", function () {
    document.getElementById("resultArea").innerHTML = "";
    document.getElementById("tableTitle").style.display = "none";
});

document.getElementById("exportPdfBtn").addEventListener("click", function () {
    const element = document.querySelector(".container");
    const options = { filename: "dinamica.pdf", margin: 1, html2canvas: {}, jsPDF: { orientation: "portrait" } };
    html2pdf().from(element).set(options).save();
});

function generateDynamicTable(participants, quantity, minValue, maxValue) {
    const tableTitle = document.getElementById("tableTitle");
    tableTitle.style.display = "block";

    const resultArea = document.getElementById("resultArea");
    resultArea.innerHTML = "";

    for (let i = 0; i < participants; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        row.textContent = `Participante ${i + 1}: ${generateRandomNumbers(quantity, minValue, maxValue).join(", ")}`;
        resultArea.appendChild(row);
    }
}

function generateRandomNumbers(quantity, minValue, maxValue) {
    const numbers = [];
    for (let i = 0; i < quantity; i++) {
        numbers.push(Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
    }
    return numbers;
}
