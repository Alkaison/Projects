const themeToggleBtn = document.getElementById("theme-icon");

themeToggleBtn.addEventListener("click", () => {
    if(themeToggleBtn.classList.contains("fa-sun"))
    {
        themeToggleBtn.classList.remove("fa-sun");
        themeToggleBtn.classList.add("fa-moon");
        document.body.classList.add("light-theme");
    }
    else
    {
        themeToggleBtn.classList.remove("fa-moon");
        themeToggleBtn.classList.add("fa-sun");
        document.body.classList.remove("light-theme");
    }
});
