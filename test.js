  document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with class name .artwork_piece
    var artworkPieces = document.querySelectorAll(".artwork_piece");

    // Loop through all elements
    artworkPieces.forEach(function (artworkPiece) {
      // Create a button element
      var button = document.createElement("button");

      button.innerText = "View in AR";
      button.className = "ar-button";

      button.style.backgroundColor = "#4404D3";
      button.style.color = "#FFFFFF";
      button.style.border = "none";
      button.style.borderRadius = "5px";
      button.style.padding = "10px 20px";
      button.style.fontFamily = "Questrial, sans-serif";

      // Append the button to the artwork piece
      artworkPiece.appendChild(button);

      // Get the hidden <img> element inside the artwork piece to retrieve its URL
      const img = artworkPiece.querySelector("img");
      const imgUrl = img ? img.src : "";

      // Add click event to the button to redirect to the modified image URL
      button.addEventListener("click", function () {
        if (imgUrl) {
          const fullUrl = `https://staging.d2cexajfiatdqk.amplifyapp.com/?textureLink=https://corsproxy.io/?${imgUrl}`;
          // https://corsproxy.io/?https%3A%2F%2Fartbytes.co.uk%2Fwp-content%2Fuploads%2F2024%2F03%2FLiana-e11917eed0deb8f4da76c87dd181f80c.png
          console.log("Redirecting to:", fullUrl);
          window.open(fullUrl, "_blank");
        } else {
          console.warn("Image URL not found.");
        }
      });
    });
  });
