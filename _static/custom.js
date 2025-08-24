requirejs.config({
    paths: {
        base: '/static/base',
        plotly: 'https://cdn.plot.ly/plotly-2.12.1.min.js?noext',
    },
});

document.addEventListener("DOMContentLoaded", function() {
    // Find the logo element in the sidebar
    const logo = document.querySelector(".wy-side-nav-search .logo");

    if (logo) {
        // Create a new div with your text
        const newDiv = document.createElement("div");
        newDiv.textContent = "My Custom Text";   // <-- change this
        newDiv.style.marginTop = "8px";          // optional styling
        newDiv.style.fontWeight = "bold";
        newDiv.style.textAlign = "center";
        newDiv.style.color = "#444";

        // Insert right after the logo
        logo.parentNode.insertBefore(newDiv, logo.nextSibling);
    }
});