const sidebar = document.querySelector(".sidebar");
const burgerButton = document.querySelector(".fa-bars");
const accessButton = document.querySelector(".fa-universal-access");

const statutSelect = document.getElementById("statut-select");
const postSelect = document.getElementById("post-select");
const companySelect = document.getElementById("company-select");
const dateSendSelect = document.getElementById("date-send-select");
const dateResendSelect = document.getElementById("date-resend-select");

const logoutButton = document.querySelector(".logout-button");

const user = document.querySelector(".fa-user");

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