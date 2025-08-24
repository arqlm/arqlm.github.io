
    const logo = document.querySelector(".wy-side-nav-search .wy-dropdown > a img.logo, .wy-side-nav-search > a img.logo");

    if (logo) {
        // Create the new div
        const newDiv = document.createElement("div");
        newDiv.textContent = "My Custom Text"; // <-- change your text here
        newDiv.style.marginTop = "8px";  // optional styling
        newDiv.style.fontWeight = "bold";
        newDiv.style.textAlign = "center";
        newDiv.style.color = "#444";

        // Insert it right after the logo
        logo.parentNode.insertBefore(newDiv, logo.nextSibling);
    }