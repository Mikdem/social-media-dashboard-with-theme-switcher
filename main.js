let darkModeToggle = document.querySelector("#dark");
let myPage = document.querySelector("html");
darkModeToggle.onchange = () => {
    myPage.classList.toggle("dark");
};