// document.querySelectorAll('.dropdown-item').forEach((item) => {
//   item.addEventListener('click', function (event) {
//     event.preventDefault(); // Prevent default anchor behavior
//     const selectedValue = this.getAttribute('data-value');
//     const dropdownButton = document.getElementById('dropdownMenuButton');

//     // Update the dropdown button's text to show the selected option
//     dropdownButton.textContent = this.textContent;

//     if (selectedValue === 'MFC') { 
//       document.querySelectorAll('.hallEffect').forEach((element) => 
//       { element.style.display = "none"; }); 
//     } else { document.querySelectorAll('.hallEffect').forEach((element) =>
//     { element.style.display = ""; });
//    }
//     // Perform actions with the selected value
//     // console.log('Selected bias type:', selectedValue);
//     // Example: Update the SVG displayed
//     document.getElementById('main-svg').setAttribute('data', selectedValue);
//   });
// });


// document.querySelectorAll('.dropdown-item').forEach((item) => { item.addEventListener('click', function(event) { event.preventDefault(); // Prevent default anchor behavior 
//   const selectedValue = this.getAttribute('data-value'); 
//   const objectElement = document.getElementById('main-svg'); 
//   if (selectedValue === 'MFC') { 
//     objectElement.setAttribute('data', 'Hall_Effect_1.svg'); 
//   } else if (selectedValue === 'HE') { 
//     objectElement.setAttribute('data', 'Hall_Effect_2.svg'); 
//   } 
//   });
//   });


  document.addEventListener('DOMContentLoaded', function() {
    // Select all dropdown items
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const dropdownButton = document.querySelector('[data-bs-toggle="dropdown"]');
    
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the selected color
            const selectedColor = this.getAttribute('data-value');
            
            // Update dropdown button text
            dropdownButton.textContent = selectedColor;
            
            // Load corresponding SVG
            // Assuming SVGs are named like: red.svg, yellow.svg, etc.
            const svgPath = `./assets/${selectedColor.toLowerCase()}.svg`;
            
            // Find the container where SVG should be loaded
            const svgContainer = document.getElementById('svg-container'); // Add this div in your HTML
            
            // Load the SVG
            svgContainer.innerHTML = `<object data="${svgPath}" type="image/svg+xml"></object>`;
        });
    });
});
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

  // document.addEventListener('DOMContentLoaded', () => {
  //   const woodBlock = document.getElementById('g74');
  //   console.log(woodBlock);

  //   let translateX = -3.1517259;
  //   let translateY = -48.970253;

  //   woodBlock.addEventListener('click', () => {
  //     translateX += 10;
  //     translateY += 10;
  //     woodBlock.setAttribute('transform', `translate(${translateX}, ${translateY})`);
  //   });
  // });

  const slider = document.getElementById('range');

  // Listen for changes on the slider
  slider.addEventListener('input', function() {
      // Get current slider value
      const currentValue = this.value;
      console.log('Current value:', currentValue);
      
      // You can use the value here for calculations
      // Example: Update display
      // document.getElementById('value-display').textContent = currentValue;
  });
