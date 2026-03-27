const btn = document.getElementById("menuButton");
const menu = document.getElementById("menuList");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});