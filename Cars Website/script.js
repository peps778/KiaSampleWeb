document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinksContainer = document.querySelector(".navLinksContainer");

    hamburger.addEventListener("click", function () {
        navLinksContainer.classList.toggle("active");
    });
});

/* Images JS */
