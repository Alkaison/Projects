const darkToggle = document.getElementById("toggleTheme");

darkToggle.addEventListener("click", () => {
    if(darkToggle.classList.contains("fa-moon"))
    {
        darkToggle.classList.remove("fa-moon");
        darkToggle.classList.add("fa-sun");
        document.body.classList.add("light-theme");
    }
    else
    {
        darkToggle.classList.remove("fa-sun");
        darkToggle.classList.add("fa-moon");
        document.body.classList.remove("light-theme");
    }
});
