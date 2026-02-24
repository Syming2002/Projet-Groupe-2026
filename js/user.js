const sidebar = document.querySelector(".sidebar");
const burgerButton = document.querySelector(".fa-bars");
const accessButton = document.querySelector(".fa-universal-access");


function onWatchTracksButtonClick() {
    window.location.href = "/html/dashboard_page.html";
}

function onBurgerButtonClick() {
    if (burgerButton.classList.contains("fa-xmark")) {
        burgerButton.classList.remove("fa-xmark");
        burgerButton.classList.add("fa-bars");
        burgerButton.classList.remove("acitve");
        sidebar.classList.remove("active"); 
        accessButton.classList.remove("active");
    } else if (burgerButton.classList.contains("fa-bars")) {
        burgerButton.classList.add("fa-xmark");
        burgerButton.classList.remove("fa-bars");
        burgerButton.classList.add("acitve");
        sidebar.classList.add("active");
        accessButton.classList.add("active");
    }
}

function onLogoutClick() {
    window.location.href = "/html/home_page.html";
}