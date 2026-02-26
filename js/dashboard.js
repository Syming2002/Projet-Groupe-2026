const sidebar = document.querySelector(".sidebar");
const burgerButton = document.querySelector(".fa-bars");
const accessButton = document.querySelector(".fa-universal-access");

const iceDiv = document.querySelector(".ice-div");

const formDiv = document.querySelector(".form-div");
const trackButton = document.querySelector(".ice-add-button");

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

function onAddTrackButtonClick() {
    if (trackButton.textContent === '+') {
        trackButton.textContent = '-';
        formDiv.style.display = "flex";
    } else if (trackButton.textContent === '-') {
        trackButton.textContent = '+';
        formDiv.style.display = "none";
    }
}

async function getJSONData() {
    const root = "/json/list_statut_company.json";
    try {
        const response = await fetch(root);
        if (!response.ok) {
            throw new Error(`Statut de réponse: ${response.status}`);
        }

        const result = await response.json();
        const companies = result.results.suivis;
        companies.forEach(result => {

            const statutValue = result.statut;
            const postValue = result.poste_vise;
            const companyValue = result.nom_entreprise;
            const dateSendValue = result.date_envoi;

            const createBlackDiv = document.createElement("div");
            const createStatutText = document.createElement('p');
            const createPostText = document.createElement('p');
            const createCompanyText = document.createElement('p');
            const createDateSendText = document.createElement('p');

            createBlackDiv.style.backgroundColor = "#333";
            createBlackDiv.style.width = "453px";
            createBlackDiv.style.height = "200px";
            createStatutText.textContent = statutValue;
            createPostText.textContent = postValue;
            createCompanyText.textContent = companyValue;
            createDateSendText.textContent = dateSendValue;
            

            iceDiv.appendChild(createBlackDiv);
            createBlackDiv.append(createStatutText, createPostText, createCompanyText, createDateSendText);

            console.log("Black Div Created !!!!")
        });
        


    } catch (error) {
        console.error(error.message);
    }
}

function onCreateTrackClick() {
    getJSONData();
}