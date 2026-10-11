
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
        menuToggle.setAttribute("aria-expanded", "true");
    } else {
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    }
});

// CLOSE MENU WHEN A LINK IS CLICKED
const navItems = navLinks.querySelectorAll("a");

navItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// AUTOMATIC COPYRIGHT YEAR
document.getElementById("year").textContent =
    new Date().getFullYear();

// SELECT A PRODUCT TO REQUEST A QUOTE
const productLinks = document.querySelectorAll("[data-product]");
const materialSelect = document.getElementById("material");

productLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        materialSelect.value = link.dataset.product;
    });
});

// WHATSAPP ORDER FORM
const orderForm = document.getElementById("orderForm");

orderForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const customerName =
        document.getElementById("customerName").value.trim();

    const material =
        document.getElementById("material").value;

    const quantity =
        document.getElementById("quantity").value.trim();

    const location =
        document.getElementById("location").value.trim();

    const businessWhatsApp = "2349075577627";

    const message =
        `Hello Stephen! I would like to make an enquiry.\n\n` +
        `Name: ${customerName}\n` +
        `Material: ${material}\n` +
        `Quantity / truck size: ${quantity || "Not specified"}\n` +
        `Delivery location: ${location}\n\n` +
        `Please let me know the price and availability.`;

    const whatsappURL =
        "https://wa.me/" +
        businessWhatsApp +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
});
