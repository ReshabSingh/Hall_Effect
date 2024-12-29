
// // Get the <tspan> element by its ID
// let tspanElement = document.getElementById("tspan2");

// // Get the current value
// let currentValue = tspanElement.textContent; // or innerHTML

// // Log the current value
// console.log("Current value:", currentValue);

// // Set a new value
// tspanElement.textContent = "0.123"; // or any other value you want

// // Log the new value
// console.log("Updated value:", tspanElement.textContent);

  document.addEventListener('DOMContentLoaded', () => {
    const woodBlock = document.getElementById('g74');
    console.log(woodBlock);

    let translateX = -3.1517259;
    let translateY = -48.970253;

    woodBlock.addEventListener('click', () => {
      translateX += 10;
      translateY += 10;
      woodBlock.setAttribute('transform', `translate(${translateX}, ${translateY})`);
    });
  });