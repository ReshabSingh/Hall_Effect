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

  document.getElementById("mySVG").addEventListener("load", function() {
    let svgdoc = this.contentDocument;  // Get the SVG document inside the object
    let textElement = svgdoc.getElementById("text124"); // Adjust ID as needed

    // Update SVG text when the slider moves
    document.getElementById("range").addEventListener("input", function() {
        textElement.textContent = parseFloat(this.value).toFixed(4);
    });
});


