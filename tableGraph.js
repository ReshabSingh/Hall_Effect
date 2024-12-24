const currentValues = [1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0];
const voltageValues = [28.75, 43.13, 57.17, 71.89, 86.26, 100.64, 115.02, 129.04, 143.77];

// const filltablebtn = document.getElementById("fill-table");

// function fillTable(tableId, currentValues, voltageValues, intervalTime = 500) {
//     // Select all input elements in the table
//     const tableInputs = document.querySelectorAll(`#${tableId} .table-input`);

//     // Index to keep track of the current row
//     let index = 0;

//     // Set an interval to update the table inputs
//     const interval = setInterval(() => {
//       if (index < currentValues.length) {
//         // Calculate the row start index in the table (each row has 3 inputs)
//         const rowStart = index * 3;

//         // Fill the serial number, current, and voltage values
//         tableInputs[rowStart].value = index + 1; // Serial number column
//         tableInputs[rowStart + 1].value = currentValues[index]; // Current column
//         tableInputs[rowStart + 2].value = voltageValues[index]; // Voltage column

//         // Increment index for the next row
//         index++;
//       } else {
//         // Clear the interval when all rows are filled
//         clearInterval(interval);
//       }
//     }, intervalTime); // Update interval in milliseconds
// }


// document.getElementById("fillTableValue").addEventListener("click", (event) => {
//   event.preventDefault();
//   document.addEventListener("DOMContentLoaded", () => {
//     function fillTable(tableId, currentValues, voltageValues, intervalTime = 1000) {
//       // Select all input elements in the table
//       const tableInputs = document.querySelectorAll(`#${tableId} .table-input`);

//       // Index to keep track of the current row
//       let index = 0;

//       // Set an interval to update the table inputs
//       const interval = setInterval(() => {
//         if (index < currentValues.length) {
//           // Calculate the row start index in the table (each row has 3 inputs)
//           const rowStart = index * 3;

//           // Fill the serial number, current, and voltage values
//           tableInputs[rowStart].value = index + 1; // Serial number column
//           tableInputs[rowStart + 1].value = currentValues[index]; // Current column
//           tableInputs[rowStart + 2].value = voltageValues[index]; // Voltage column

//           // Increment index for the next row
//           index++;
//         } else {
//           // Clear the interval when all rows are filled
//           clearInterval(interval);
//         }
//       }, intervalTime); // Update interval in milliseconds
//     }

//     // Call the function to fill the table
//     fillTable("table1", currentValues, voltageValues);
//     // alert("Table filled successfully!");


//     // 
//   });
// });


document.addEventListener("DOMContentLoaded", () => {
  // Define current and voltage values for the table

  const currentValues = [1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0];
const voltageValues = [28.75, 43.13, 57.17, 71.89, 86.26, 100.64, 115.02, 129.04, 143.77];

  // Add a click event listener to the button
  document.getElementById("fillTableValue").addEventListener("click", (event) => {
    event.preventDefault();

    // Function to fill the table with data
    function fillTable(tableId, currentValues, voltageValues, intervalTime = 1000) {
      const tableInputs = document.querySelectorAll(`#${tableId} .table-input`);

      if (!tableInputs.length) {
        console.error("No input elements found in the table.");
        return;
      }

      let index = 0;

      const interval = setInterval(() => {
        if (index < currentValues.length) {
          const rowStart = index * 3;

          if (tableInputs[rowStart] && tableInputs[rowStart + 1] && tableInputs[rowStart + 2]) {
            tableInputs[rowStart].value = index + 1; // Serial number column
            tableInputs[rowStart + 1].value = currentValues[index]; // Current column
            tableInputs[rowStart + 2].value = voltageValues[index]; // Voltage column
          }

          index++;
        } else {
          clearInterval(interval);
        }
      }, intervalTime);
    }

    // Call the function to fill the table
    fillTable("table1", currentValues, voltageValues);
  });
});


  


  // Graph Modal for the table values

//   document.addEventListener("DOMContentLoaded", () => {
//     // Values to plot
//     const currentValues = [1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0];
//     const voltageValues = [28.75, 43.13, 57.17, 71.89, 86.26, 100.64, 115.02, 129.04, 143.77];
  
//     // Modal and canvas elements
//     const graphModal = document.getElementById("graphModal");
//     const plotGraphButton = document.getElementById("showGraph");
//     const closeModal = document.getElementById("closeModal");
//     const canvas = document.getElementById("popupGraph");
  
//     let chart; // Store the chart instance
  
//     // Function to show the modal
//     function showModal() {
//       graphModal.style.display = "block";
//       if (chart) chart.destroy(); // Destroy existing chart to avoid duplicates
  
//       // Create a new chart
//       chart = new Chart(canvas, {
//         type: "line",
//         data: {
//           labels: currentValues, // X-axis labels
//           datasets: [
//             {
//               label: "Voltage (mV) vs Current (mA)",
//               data: voltageValues,
//               borderColor: "rgba(75, 192, 192, 1)",
//               backgroundColor: "rgba(75, 192, 192, 0.2)",
//               tension: 0.1, // Smooth curve
//               fill: true,
//             },
//           ],
//         },
//         options: {
//           responsive: true,
//           scales: {
//             x: {
//               title: {
//                 display: true,
//                 text: "Current (mA)",
//               },
//             },
//             y: {
//               title: {
//                 display: true,
//                 text: "Voltage (mV)",
//               },
//             },
//           },
//         },
//       });
//     }
  
//     // Function to hide the modal
//     function hideModal() {
//       graphModal.style.display = "none";
//     }
  
//     // Event listeners
//     showGraph.addEventListener("click", showModal);
//     closeModal.addEventListener("click", hideModal);
//   });
  

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
  

const thickness = 1e-3; // Sample thickness 
const magneticField = 0.5; // Magnetic field 
const electronCharge = 1.6e-19; // Charge of an electron 

// function calculateHallEffect(event) {
//   if (event) event.preventDefault(); 
//   let hallCoefficients = [];
//   let carrierConcentrations = [];

  
//   for (let i = 0; i < currentValues.length; i++) {
//     const current = currentValues[i] / 1000; // Convert mA to A
//     const voltage = voltageValues[i] / 1000; // Convert mV to V

//     // Calculate Hall Coefficient (R_H)
//     const hallCoefficient = (voltage * thickness) / (current * magneticField);
//     hallCoefficients.push(hallCoefficient);

//     // Calculate Carrier Concentration (n)
//     const carrierConcentration = 1 / (electronCharge * hallCoefficient);
//     carrierConcentrations.push(carrierConcentration);
//   }

//   // Display the results
//   const resultsDiv = document.getElementById("results");
//   resultsDiv.innerHTML = `
//     <h3>Hall Effect Results</h3>
//     <table border="1">
//       <tr>
//         <th>Sr No.</th>
//         <th>Current (mA)</th>
//         <th>Hall Voltage (mV)</th>
//         <th>Hall Coefficient (R<sub>H</sub>) (m<sup>3</sup>/C)</th>
//         <th>Carrier Concentration (n) (m<sup>-3</sup>)</th>
//       </tr>
//       ${currentValues
//         .map(
//           (current, index) => `
//         <tr>
//           <td>${index + 1}</td>
//           <td>${current}</td>
//           <td>${voltageValues[index]}</td>
//           <td>${hallCoefficients[index].toExponential(3)}</td>
//           <td>${carrierConcentrations[index].toExponential(3)}</td>
//         </tr>
//       `
//         )
//         .join("")}
//     </table>
//   `;
// }


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

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// download pdf function
// async function downloadPDF() {
//   const { jsPDF } = window.jspdf;

//   // Get the element containing the tables and graph
//   const content = document.getElementById("contentToDownload");

//   // Generate a canvas using html2canvas
//   const canvas = await html2canvas(content);

//   // Get the canvas image as data URL
//   const imgData = canvas.toDataURL("image/png");

//   // Create a jsPDF instance
//   const pdf = new jsPDF("p", "mm", "a4");

//   // Calculate image dimensions for A4 page
//   const pageWidth = pdf.internal.pageSize.getWidth();
//   const pageHeight = pdf.internal.pageSize.getHeight();
//   const imgWidth = pageWidth;
//   const imgHeight = (canvas.height * pageWidth) / canvas.width;

//   // Add the image to the PDF
//   pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
  

//   // Download the PDF
//   pdf.save("HallEffectExperiment.pdf");
// }

// const ctx = document.getElementById("popupGraph").getContext("2d");
// ctx.fillStyle = "lightblue";
// ctx.fillRect(0, 0, 400, 300); // Draw background
// ctx.fillStyle = "black";
// ctx.font = "16px Arial";
// ctx.fillText("Sample Graph", 150, 150); // Add text for demonstration

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// async function downloadPDF() {
//   const { jsPDF } = window.jspdf;

//   // Render the graph (make sure it's visible)
//   const canvasElement = document.getElementById("popupGraph");
//   const canvasImage = canvasElement.toDataURL("image/png");

//   // Get the content div
//   const content = document.getElementById("contentToDownload");

//   // Generate the rest of the content as a canvas
//   const contentCanvas = await html2canvas(content);

//   // Get the canvas image as data URL
//   const contentImage = contentCanvas.toDataURL("image/png");

//   // Create a jsPDF instance
//   const pdf = new jsPDF("p", "mm", "a4");

//   // Calculate dimensions for content
//   const pageWidth = pdf.internal.pageSize.getWidth();
//   const contentHeight = (contentCanvas.height * pageWidth) / contentCanvas.width;

//   // Add content image to PDF
//   pdf.addImage(contentImage, "PNG", 0, 0, pageWidth, contentHeight);

//   // Add graph on the next page (if it doesn’t fit)
//   if (contentHeight > pdf.internal.pageSize.getHeight()) {
//     pdf.addPage();
//   }
//   pdf.addImage(canvasImage, "PNG", 10, 10, pageWidth - 20, 100);

//   // Download the PDF
//   pdf.save("HallEffectExperiment.pdf");
// }

// // Sample code to draw a graph in the canvas (to simulate dynamic graph rendering)
// const ctx = document.getElementById("popupGraph").getContext("2d");
// ctx.fillStyle = "lightblue";
// ctx.fillRect(0, 0, 400, 300); // Draw background
// ctx.fillStyle = "black";
// ctx.font = "16px Arial";
// ctx.fillText("Sample Graph", 150, 150); // Add text for demonstration

async function downloadPDF() {
  const { jsPDF } = window.jspdf;

  // Render the graph (make sure it's visible)
  const graphCanvas = document.getElementById("popupGraph");
  const graphImage = graphCanvas.toDataURL("image/png");

  // Get the content div
  const content = document.getElementById("contentToDownload");

  // Generate the tables content as a canvas
  const tablesCanvas = await html2canvas(content);

  // Get the canvas image as data URL
  const tablesImage = tablesCanvas.toDataURL("image/png");

  // Create a jsPDF instance
  const pdf = new jsPDF("p", "mm", "a4");

  // Calculate dimensions for tables content
  const pageWidth = pdf.internal.pageSize.getWidth();
  const tablesHeight = (tablesCanvas.height * pageWidth) / tablesCanvas.width;

  // Add the tables image to the first page
  pdf.addImage(tablesImage, "PNG", 0, 0, pageWidth, tablesHeight);

  // Add the graph on the next page
  pdf.addPage();
  const graphWidth = pageWidth - 20; // Keep some margin
  const graphHeight = (graphCanvas.height * graphWidth) / graphCanvas.width;
  pdf.addImage(graphImage, "PNG", 10, 10, graphWidth, graphHeight);

  // Download the PDF
  pdf.save("HallEffectExperiment.pdf");
}

// Sample code to draw a graph in the canvas (to simulate dynamic graph rendering)
const ctx = document.getElementById("popupGraph").getContext("2d");
ctx.fillStyle = "lightblue";
ctx.fillRect(0, 0, 400, 300); // Draw background
ctx.fillStyle = "black";
ctx.font = "16px Arial";
ctx.fillText("Sample Graph", 150, 150); // Add text for demonstration
