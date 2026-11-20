
const certificate = document.getElementById("certificate");
const zoomViewer = document.getElementById("zoomViewer");
const zoomImage = document.getElementById("zoomImage");
const closeZoom = document.getElementById("closeZoom");

// Open certificate zoom
certificate.addEventListener("click", () => {
    zoomImage.src = certificate.src;
    zoomViewer.classList.add("active");
});

// Close zoom
closeZoom.addEventListener("click", () => {
    zoomViewer.classList.remove("active");
});

// Close when clicking outside the image
zoomViewer.addEventListener("click", (event) => {
    if (event.target === zoomViewer) {
        zoomViewer.classList.remove("active");
    }
});

// Close with Escape key
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        zoomViewer.classList.remove("active");
    }
});
