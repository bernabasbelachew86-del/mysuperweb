const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", function () {
    const isOpen = navbar.classList.toggle("menu-open");

    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );
});


/* Close the menu after selecting a navigation link */
document.querySelectorAll(".navbar .nav-link").forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("menu-open");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");

    });

});