
const logo = document.getElementById("logo");

logo.style.borderRadius = "50%";
logo.style.border = "3px solid #d4a32e";
logo.style.boxShadow = "0 0 20px #d4a32e";

logo.addEventListener("mouseenter", () => {
    logo.style.transform = "scale(1.1) rotate(5deg)";
});

logo.addEventListener("mouseleave", () => {
    logo.style.transform = "scale(1) rotate(0deg)";
});
