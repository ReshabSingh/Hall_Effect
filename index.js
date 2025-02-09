 document.getElementById("svg1").addEventListener("load", function() {
        let svgdoc = this.contentDocument;  // Get the SVG document inside the object
        let textElement = svgdoc.getElementById("text124"); // Adjust ID as needed

        // Update SVG text when the slider moves
      document.getElementById("range").addEventListener("input", function() {
            textElement.textContent = parseFloat(this.value).toFixed(4);
      });
});
