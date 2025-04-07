const currentValuesHE = [1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0];
const voltageValues = [28.75, 43.13, 57.17, 71.89, 86.26, 100.64, 115.02, 129.04, 143.77];

const currentValuesMagnetic = [0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0];
const magneticFieldValues = [550, 1130, 1720, 2300, 2880, 3450, 4030, 4600, 5180, 5750];

const currentValues = [1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0];

function fillTable(tableId, currentList, secondaryList) {
  const tableInputs = document.querySelectorAll(`#${tableId} .table-input`);

  if (!tableInputs.length) {
    console.error("No input elements found in the table.");
    return;
  }

  // Fill all rows at once
  for (let index = 0; index < currentList.length; index++) {
    const rowStart = index * 3;

    if (tableInputs[rowStart] && tableInputs[rowStart + 1] && tableInputs[rowStart + 2]) {
      tableInputs[rowStart].value = index + 1; 
      tableInputs[rowStart + 1].value = currentList[index]; // Current
      tableInputs[rowStart + 2].value = secondaryList[index]; // Voltage or Magnetic Field
    }
  }
}

// Update the event listener
document.addEventListener("DOMContentLoaded", () => {
  // Set default experiment
  const dropdownButton = document.getElementById("dropdownMenuButton");
  dropdownButton.textContent = "MFC"; // Set default value

  document.getElementById("fillTableValue").addEventListener("click", (event) => {
    event.preventDefault();
  
    const selectedValue = dropdownButton.getAttribute('data-value') || "MFC";
  
    if (selectedValue === "MFC") {
      fillTable("magneticFieldTable", currentValuesMagnetic, magneticFieldValues);
    } else if (selectedValue === "HE") {
      fillTable("hallEffectTable", currentValuesHE, voltageValues);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Values to plot
  const currentValues = [1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0];
  const voltageValues = [28.75, 43.13, 57.17, 71.89, 86.26, 100.64, 115.02, 129.04, 143.77];

  // Modal and canvas elements
  const graphModal = document.getElementById("graphModal");
  const plotGraphButton = document.getElementById("showGraph");
  const closeModal = document.getElementById("closeModal");
  const canvas = document.getElementById("popupGraph");

  let chart; // Store the chart instance

  // Function to show the modal
  function showModal(event) {
    event.preventDefault(); // Prevent the default button behavior
    graphModal.style.display = "block";

    if (chart) chart.destroy(); // Destroy existing chart to avoid duplicates

    // Create a new chart
    chart = new Chart(canvas, {
      type: "line",
      data: {
        labels: currentValues, // X-axis labels
        datasets: [
          {
            label: "Voltage (mV) vs Current (mA)",
            data: voltageValues,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            tension: 0.1, // Smooth curve
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: "Current (mA)",
            },
          },
          y: {
            title: {
              display: true,
              text: "Voltage (mV)",
            },
          },
        },
      },
    });
  }

  // Function to hide the modal
  function hideModal() {
    graphModal.style.display = "none";
  }

  // Event listeners
  plotGraphButton.addEventListener("click", showModal);
  closeModal.addEventListener("click", hideModal);
});

document.addEventListener("DOMContentLoaded", () => {
  // Add dropdown item event listeners
  document.querySelectorAll('.dropdown-item').forEach((item) => {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      const selectedValue = this.getAttribute('data-value');
      const dropdownButton = document.getElementById('dropdownMenuButton');
      dropdownButton.textContent = this.textContent;
      dropdownButton.setAttribute('data-value', selectedValue);
      
      // Rest of your dropdown logic...
    });
  });

  // Initialize canvas only if it exists
  const canvas = document.getElementById("popupGraph");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0, 0, 400, 300);
    ctx.fillStyle = "black";
    ctx.font = "16px Arial";
    ctx.fillText("Sample Graph", 150, 150);
  }
});

const thickness = 1e-3; // Sample thickness 
const magneticField = 0.5; // Magnetic field 
const electronCharge = 1.6e-19; // Charge of an electron 


function toggleHallEffectTable() {
  const resultsDiv = document.getElementById("results");

  // Check if the table is currently hidden
  if (resultsDiv.classList.contains("hidden")) {
    // Remove the 'hidden' class to show the table
    resultsDiv.classList.remove("hidden");

    // Populate and display the results
    let hallCoefficients = [];
    let carrierConcentrations = [];

    for (let i = 0; i < currentValues.length; i++) {
      const current = currentValues[i] / 1000; // Convert mA to A
      const voltage = voltageValues[i] / 1000; // Convert mV to V

      const hallCoefficient = (voltage * thickness) / (current * magneticField);
      hallCoefficients.push(hallCoefficient);

      const carrierConcentration = 1 / (electronCharge * hallCoefficient);
      carrierConcentrations.push(carrierConcentration);
    }

    resultsDiv.innerHTML = `
      <h3>Hall Effect Results</h3>
      <table border="1">
        <tr>
          <th>Sr No.</th>
          <th>Current (mA)</th>
          <th>Hall Voltage (mV)</th>
          <th>Hall Coefficient (R<sub>H</sub>) (m<sup>3</sup>/C)</th>
          <th>Carrier Concentration (n) (m<sup>-3</sup>)</th>
        </tr>
        ${currentValues
          .map(
            (current, index) => `
          <tr>
            <td>${index + 1}</td>
            <td>${current}</td>
            <td>${voltageValues[index]}</td>
            <td>${hallCoefficients[index].toExponential(3)}</td>
            <td>${carrierConcentrations[index].toExponential(3)}</td>
          </tr>
        `
          )
          .join("")}
      </table>
    `;
  } else {
    // Add the 'hidden' class to hide the table
    resultsDiv.classList.add("hidden");
  }
}


async function downloadPDF() {
  const { jsPDF } = window.jspdf;

  try {
    const graphCanvas = document.getElementById("popupGraph");

    // Create a temporary container for content
    const tempContainer = document.createElement('div');
    tempContainer.style.width = '100%';
    tempContainer.style.padding = '20px';
    tempContainer.style.backgroundColor = 'white';

    // Create tables with readings
    const magneticFieldTableHTML = `
      <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background-color: #f2f2f2;">
          <th style="border: 1px solid #ddd; padding: 8px;">Sr No.</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Current (mA)</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Magnetic Field (Gauss)</th>
        </tr>
        ${currentValuesMagnetic.map((current, index) => `
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">${index + 1}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${current}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${magneticFieldValues[index]}</td>
          </tr>
        `).join('')}
      </table>`;

    const hallEffectTableHTML = `
      <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background-color: #f2f2f2;">
          <th style="border: 1px solid #ddd; padding: 8px;">Sr No.</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Current (mA)</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Hall Voltage (mV)</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Hall Coefficient (m³/C)</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Carrier Concentration (m⁻³)</th>
        </tr>
        ${currentValuesHE.map((current, index) => {
          const hallCoefficient = (voltageValues[index] / 1000 * thickness) / 
                                (current / 1000 * magneticField);
          const carrierConcentration = 1 / (electronCharge * hallCoefficient);
          return `
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;">${index + 1}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${current}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${voltageValues[index]}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${hallCoefficient.toExponential(3)}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${carrierConcentration.toExponential(3)}</td>
            </tr>
          `;
        }).join('')}
      </table>`;

    // Add content to container
    tempContainer.innerHTML = `
      <h2 style="text-align: center; color: #333; margin-bottom: 30px;">Hall Effect Experiment Results</h2>
      <div style="margin: 20px 0;">
        <h3 style="color: #444;">Magnetic Field Current Readings</h3>
        ${magneticFieldTableHTML}
        <h3 style="color: #444; margin-top: 30px;">Hall Effect Readings</h3>
        ${hallEffectTableHTML}
        <div style="margin-top: 20px; font-size: 14px;">
          <p><strong>Sample Thickness:</strong> ${thickness} m</p>
          <p><strong>Applied Magnetic Field:</strong> ${magneticField} T</p>
        </div>
      </div>
    `;

    document.body.appendChild(tempContainer);

    // Generate high-quality canvas of tables
    const tablesCanvas = await html2canvas(tempContainer, {
      scale: 2,
      useCORS: true,
      logging: false,
      letterRendering: true,
      allowTaint: true,
      backgroundColor: '#ffffff'
    });

    // Remove temporary container
    document.body.removeChild(tempContainer);

    // Create PDF
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4"
    });

    // Add tables to first page
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const tablesImage = tablesCanvas.toDataURL("image/png", 1.0);
    
    // Calculate dimensions
    const tablesAspectRatio = tablesCanvas.height / tablesCanvas.width;
    const tablesWidth = pageWidth - 20;
    const tablesHeight = tablesWidth * tablesAspectRatio;

    // Add tables with margins
    pdf.addImage(tablesImage, "PNG", 10, 10, tablesWidth, tablesHeight);

    // Add new page for graph
    pdf.addPage();

    // Add graph
    const graphImage = graphCanvas.toDataURL("image/png", 1.0);
    const graphAspectRatio = graphCanvas.height / graphCanvas.width;
    const graphWidth = pageWidth - 20;
    const graphHeight = graphWidth * graphAspectRatio;
    
    pdf.addImage(graphImage, "PNG", 10, 10, graphWidth, graphHeight);

    // Add page numbers
    const totalPages = pdf.internal.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      pdf.setPage(i);
      pdf.setFontSize(10);
      pdf.text(`Page ${i} of ${totalPages}`, pageWidth / 2, pageHeight - 10, { align: 'center' });
    }

    // Save the PDF
    pdf.save("HallEffectExperiment.pdf");

  } catch (error) {
    console.error("Error generating PDF:", error);
    alert("There was an error generating the PDF. Please try again.");
  }
}

// Sample code to draw a graph in the canvas (to simulate dynamic graph rendering)
const ctx = document.getElementById("popupGraph").getContext("2d");
ctx.fillStyle = "lightblue";
ctx.fillRect(0, 0, 400, 300); // Draw background
ctx.fillStyle = "black";
ctx.font = "16px Arial";
ctx.fillText("Sample Graph", 150, 150); // Add text for demonstration



document.querySelectorAll('.dropdown-item').forEach((item) => {
  item.addEventListener('click', function (event) {
    event.preventDefault();

    const selectedValue = this.getAttribute('data-value');
    const dropdownButton = document.getElementById('dropdownMenuButton');
    const objectElement = document.getElementById('main-svg');

    // Update dropdown button label
    dropdownButton.textContent = this.textContent;

    // ✅ Update the SVG source based on the selected value
    if (selectedValue === 'MFC') {
      objectElement.setAttribute('data', 'assets/Hall_Effect_1.svg');
    } else if (selectedValue === 'HE') {
      objectElement.setAttribute('data', 'assets/Hall_Effect_2.svg');
    }

    // ✅ Show/Hide .hallEffect elements
    if (selectedValue === 'MFC') {
      document.querySelectorAll('.hallEffect').forEach(el => el.style.display = "none");
    } else {
      document.querySelectorAll('.hallEffect').forEach(el => el.style.display = "");
    }

    // ✅ Toggle between tables if you have them
    const magneticFieldTable = document.getElementById('magneticFieldTable');
    const hallEffectTable = document.getElementById('hallEffectTable');

    if (magneticFieldTable && hallEffectTable) {
      if (selectedValue === 'MFC') {
        magneticFieldTable.style.display = 'table';
        hallEffectTable.style.display = 'none';
      } else if (selectedValue === 'HE') {
        magneticFieldTable.style.display = 'none';
        hallEffectTable.style.display = 'table';
      }
    }
  });
});
