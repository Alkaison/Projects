const themeToggleBtn = document.getElementById("theme-icon");

themeToggleBtn.addEventListener("click", () => {

    themeToggleBtn.classList.toggle("fa-sun");
    themeToggleBtn.classList.toggle("fa-moon");
    document.body.classList.toggle("light-theme");
});
