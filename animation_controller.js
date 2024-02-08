window.addEventListener("resize", lightenInstantly);

function darken() {
    const darkener = document.getElementById("darkener");
    darkener.classList.remove("inactive");
    darkener.classList.add("active");
}
  
function lighten() {
    const darkener = document.getElementById("darkener");
    darkener.classList.remove("active");
    darkener.classList.add("inactive");
}

function lightenInstantly() {
    if (window.innerWidth >= 728) {
        const darkener = document.getElementById("darkener");
        darkener.classList.remove("active");
        darkener.classList.remove("inactive");
    }
}