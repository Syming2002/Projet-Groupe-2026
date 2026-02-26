const sidebar = document.querySelector(".sidebar");
const burgerButton = document.querySelector(".fa-bars");
const accessButton = document.querySelector(".fa-universal-access");

const iceDiv = document.querySelector(".ice-div");

const form = document.querySelector(".track-form");
const formDiv = document.querySelector(".form-div");
const statutInput = document.getElementById("statut-input");
const postInput = document.getElementById("post-input");
const companyInput = document.getElementById("company-input");
const dateSendInput = document.getElementById("date-send-input");
const dateResendInput = document.getElementById("date-resend-input");


const trackButton = document.querySelector(".ice-add-button");

const statutSelect = document.getElementById("statut-select");
const postSelect = document.getElementById("post-select");
const companySelect = document.getElementById("company-select");
const dateSendSelect = document.getElementById("date-send-select");
const dateResendSelect = document.getElementById("date-resend-select");

const logoutButton = document.querySelector(".logout-button");

const user = document.querySelector(".fa-user");

const dataArray = [];

async function getData() {
    try {
        const fetch = await fetch("/json/list_company.json");

        const data = await fetch.json();
        dataArray = data;

    } catch (error) {
        console.error("Erreur: ", error);
    }
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

function onAddTrackButtonClick() {
    if (trackButton.textContent === '+') {
        trackButton.textContent = '-';
        formDiv.style.display = "flex";
    } else if (trackButton.textContent === '-') {
        trackButton.textContent = '+';
        formDiv.style.display = "none";
    }

    const createBlackDiv = document.createElement("div");

    const createDetailButton = document.createElement("button");

    const createStatutText = document.createElement('p');
    const createPostText = document.createElement('p');
    const createCompanyText = document.createElement('p');
    const createDateSendText = document.createElement('p');
    const createResendDateText = document.createElement('p');

    const createStatut = document.createElement('p');
    const createPost = document.createElement('p');
    const createCompany = document.createElement('p');
    const createDateSend = document.createElement('p');
    const createResendDate = document.createElement('p');

    createBlackDiv.className = "black-div";

    createDetailButton.className = "ice-add-button";
    createDetailButton.textContent = "+";

    createStatutText.className = "ice-text";

    createPostText.className = "ice-text";
    createCompanyText.className = "ice-text";
    createDateSendText.className = "ice-text";
    createResendDateText.className = "ice-text";
    

    dataArray.forEach((res) => {

            createStatutText.textContent = res.statut
            createPostText.textContent = res.poste_vise
            createCompanyText.textContent = res.nom_entreprise
            createDateSendText.textContent = res.date_envoi
            createResendDateText.textContent = res.date_cloture
        }
    );

    iceDiv.appendChild(createBlackDiv);
    createBlackDiv.append(createStatutText, createPostText, createCompanyText, createDateSendText, createResendDateText ? createResendDateText : '-', createDetailButton);

    

    console.log("Black Div Created");
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // const statutValue = statutInput.value;
    // const postValue = postInput.value;
    // const companyValue = companyInput.value;
    // const dateSendValue = dateSendInput.value;
    // const dateResendValue = dateResendInput.value;

    const createBlackDiv = document.createElement("div");

    const createDetailButton = document.createElement("div");

    const createStatutText = document.createElement('p');
    const createPostText = document.createElement('p');
    const createCompanyText = document.createElement('p');
    const createDateSendText = document.createElement('p');
    const createResendDateText = document.createElement('p');

    createBlackDiv.className = "black-div";

    createDetailButton.className = "ice-add-button";

    createStatutText.className = "ice-text";
    createPostText.className = "ice-text";
    createCompanyText.className = "ice-text";
    createDateSendText.className = "ice-text";
    createResendDateText.className = "ice-text";


    // createStatutText.textContent = statutValue;
    // createPostText.textContent = postValue;
    // createCompanyText.textContent = companyValue;
    // createDateSendText.textContent = dateSendValue;
    // createResendDateText.textContent = dateResendValue;
    
    const data = fetch("/json/list_company.json")
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.error(err));

    const results = data.results;


    iceDiv.appendChild(createBlackDiv);
    createBlackDiv.append(createStatutText, createPostText, createCompanyText, createDateSendText, createResendDateText ? createResendDateText : '-');

    results.forEach(res => 
        createStatutText.textContent = res.statut,
        createPostText.textContent = res.post_vise,
        createCompanyText.textContent = res.nom_entreprise,
        createDateSendText.textContent = res.date_envoi,
        createResendDateText.textContent = res.date_cloture
    );

    console.log("Black Div Created !!!!");
})