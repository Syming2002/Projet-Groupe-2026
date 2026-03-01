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

const createDetailButtonDisplay = document.createElement("button");

async function displayTrack(data) {

    (await data).results.forEach((res) => {
            const createBlackDiv = document.createElement("div");

            const mainDiv = document.createElement("div");

            const firstDiv = document.createElement("div");
            const secondDiv = document.createElement("div");
            const thirdDiv = document.createElement("div");
            const fourthDiv = document.createElement("div");
            const fifthDiv = document.createElement("div");
            const sixthDiv = document.createElement("div");

            

            mainDiv.style.display = "flex";
            mainDiv.style.alignItems = "center";
            mainDiv.style.gap = "20px";
            mainDiv.style.margin = "0 auto";

            firstDiv.style.display = "flex";
            firstDiv.style.flexDirection = "column";
            firstDiv.style.gap = "20px";

            secondDiv.style.display = "flex";
            secondDiv.style.flexDirection = "column";
            secondDiv.style.gap = "20px";

            thirdDiv.style.display = "flex";
            thirdDiv.style.flexDirection = "column";
            thirdDiv.style.gap = "20px";

            fourthDiv.style.display = "flex";
            fourthDiv.style.flexDirection = "column";
            fourthDiv.style.gap = "20px";

            fifthDiv.style.display = "flex";
            fifthDiv.style.flexDirection = "column";
            fifthDiv.style.gap = "20px";

            sixthDiv.style.display = "flex";
            sixthDiv.style.flexDirection = "column";
            sixthDiv.style.gap = "10px";
            sixthDiv.style.alignItems = "center";

            const createStatut = document.createElement('p');
            const createPost = document.createElement('p');
            const createCompany = document.createElement('p');
            const createDateSend = document.createElement('p');
            const createResendDate = document.createElement('p');
            const createDetails = document.createElement('p');

            createStatut.className = "ice-text";
            createPost.className = "ice-text";
            createCompany.className = "ice-text";
            createDateSend.className = "ice-text";
            createResendDate.className = "ice-text";
            createDetails.className = "ice-text";

            createStatut.textContent = "Statut";
            createPost.textContent = "Poste";
            createCompany.textContent = "Entreprise";
            createDateSend.textContent = "Date d'envoi";
            createResendDate.textContent = "Date de relance";
            createDetails.textContent = "Details";

            const createStatutText = document.createElement('p');
            const createPostText = document.createElement('p');
            const createCompanyText = document.createElement('p');
            const createDateSendText = document.createElement('p');
            const createResendDateText = document.createElement('p');

            createBlackDiv.className = "black-div";

            createDetailButtonDisplay.className = "ice-add-button";
            createDetailButtonDisplay.textContent = "+";

            createStatutText.className = "ice-text";

            createPostText.className = "ice-text";
            createCompanyText.className = "ice-text";
            createDateSendText.className = "ice-text";
            createResendDateText.className = "ice-text";

            if (window.screen.width >= 425 && window.screen.width <= 768) {

                mainDiv.style.display = "flex";
                mainDiv.style.gap = "10px";
                
                createStatut.style.fontSize = "8px";
                createStatutText.style.fontSize = "8px";

                createPost.style.fontSize = "8px";
                createPostText.style.fontSize = "8px";

                createCompany.style.fontSize = "8px";
                createCompanyText.style.fontSize = "8px";

                createDateSend.style.fontSize = "8px";
                createDateSendText.style.fontSize = "8px";

                createResendDate.style.fontSize = "8px";
                createResendDateText.style.fontSize = "8px";
            }


            if (window.screen.width < 425) {

                mainDiv.style.display = "flex";
                mainDiv.style.gap = "10px";
                
                createStatut.style.fontSize = "8px";
                createStatutText.style.fontSize = "8px";

                createPost.style.fontSize = "8px";
                createPostText.style.fontSize = "8px";

                createCompany.style.fontSize = "8px";
                createCompanyText.style.fontSize = "8px";

                createDateSend.style.fontSize = "8px";
                createDateSendText.style.fontSize = "8px";

                createResendDate.style.fontSize = "8px";
                createResendDateText.style.fontSize = "8px";
            }


            createStatutText.textContent = res.statut;
            createPostText.textContent = res.poste_vise;
            createCompanyText.textContent = res.nom_entreprise;
            createDateSendText.textContent = res.date_envoi;
            createResendDateText.textContent = res.date_cloture;

            iceDiv.appendChild(createBlackDiv);

            createBlackDiv.appendChild(mainDiv);

            mainDiv.append(firstDiv, secondDiv, thirdDiv, fourthDiv, fifthDiv, sixthDiv);

            firstDiv.append(createStatut, createStatutText);

            secondDiv.append(createPost, createPostText, createCompanyText, createDateSendText);

            thirdDiv.append(createCompany, createCompanyText);

            fourthDiv.append(createDateSend, createDateSendText);

            fifthDiv.append(createResendDate, createResendDateText !== null ? createResendDateText : '-');

            sixthDiv.append(createDetails, createDetailButtonDisplay);
        }
    );

    

    

    console.log("Black Div Created");
}

async function getData() {
    try {
        const fetchData = await fetch("/json/list_company.json");

        const data = await fetchData.json();

        console.log(data);
        return data;

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

async function onAddTrackButtonClick() {
    if (trackButton.textContent === '+') {
        trackButton.textContent = '-';
        formDiv.style.display = "flex";
    } else if (trackButton.textContent === '-') {
        trackButton.textContent = '+';
        formDiv.style.display = "none";
    }
}

const createDetailButtonForm = document.createElement("button");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const createBlackDiv = document.createElement("div");

            const mainDiv = document.createElement("div");

            const firstDiv = document.createElement("div");
            const secondDiv = document.createElement("div");
            const thirdDiv = document.createElement("div");
            const fourthDiv = document.createElement("div");
            const fifthDiv = document.createElement("div");
            const sixthDiv = document.createElement("div");

            

            mainDiv.style.display = "flex";
            mainDiv.style.alignItems = "center";
            mainDiv.style.gap = "20px";
            mainDiv.style.margin = "0 auto";

            firstDiv.style.display = "flex";
            firstDiv.style.flexDirection = "column";
            firstDiv.style.gap = "20px";

            secondDiv.style.display = "flex";
            secondDiv.style.flexDirection = "column";
            secondDiv.style.gap = "20px";

            thirdDiv.style.display = "flex";
            thirdDiv.style.flexDirection = "column";
            thirdDiv.style.gap = "20px";

            fourthDiv.style.display = "flex";
            fourthDiv.style.flexDirection = "column";
            fourthDiv.style.gap = "20px";

            fifthDiv.style.display = "flex";
            fifthDiv.style.flexDirection = "column";
            fifthDiv.style.gap = "20px";

            sixthDiv.style.display = "flex";
            sixthDiv.style.flexDirection = "column";
            sixthDiv.style.gap = "10px";
            sixthDiv.style.alignItems = "center";


            const createStatut = document.createElement('p');
            const createPost = document.createElement('p');
            const createCompany = document.createElement('p');
            const createDateSend = document.createElement('p');
            const createResendDate = document.createElement('p');
            const createDetails = document.createElement('p');

            createStatut.className = "ice-text";
            createPost.className = "ice-text";
            createCompany.className = "ice-text";
            createDateSend.className = "ice-text";
            createResendDate.className = "ice-text";
            createDetails.className = "ice-text";

            createStatut.textContent = "Statut";
            createPost.textContent = "Poste";
            createCompany.textContent = "Entreprise";
            createDateSend.textContent = "Date d'envoi";
            createResendDate.textContent = "Date de relance";
            createDetails.textContent = "Details";

            const createStatutText = document.createElement('p');
            const createPostText = document.createElement('p');
            const createCompanyText = document.createElement('p');
            const createDateSendText = document.createElement('p');
            const createResendDateText = document.createElement('p');

            createBlackDiv.className = "black-div";

            createDetailButtonForm.className = "ice-add-button";
            createDetailButtonForm.textContent = "+";

            createStatutText.className = "ice-text";

            createPostText.className = "ice-text";
            createCompanyText.className = "ice-text";
            createDateSendText.className = "ice-text";
            createResendDateText.className = "ice-text";


            if (window.screen.width >= 425 && window.screen.width <= 768) {

                mainDiv.style.display = "flex";
                mainDiv.style.gap = "10px";
                
                createStatut.style.fontSize = "8px";
                createStatutText.style.fontSize = "8px";

                createPost.style.fontSize = "8px";
                createPostText.style.fontSize = "8px";

                createCompany.style.fontSize = "8px";
                createCompanyText.style.fontSize = "8px";

                createDateSend.style.fontSize = "8px";
                createDateSendText.style.fontSize = "8px";

                createResendDate.style.fontSize = "8px";
                createResendDateText.style.fontSize = "8px";
            }


            if (window.screen.width < 425) {

                mainDiv.style.display = "flex";
                mainDiv.style.gap = "10px";
                
                createStatut.style.fontSize = "8px";
                createStatutText.style.fontSize = "8px";

                createPost.style.fontSize = "8px";
                createPostText.style.fontSize = "8px";

                createCompany.style.fontSize = "8px";
                createCompanyText.style.fontSize = "8px";

                createDateSend.style.fontSize = "8px";
                createDateSendText.style.fontSize = "8px";

                createResendDate.style.fontSize = "8px";
                createResendDateText.style.fontSize = "8px";
            }

            createStatutText.textContent = statutInput.value;
            createPostText.textContent = postInput.value;
            createCompanyText.textContent = companyInput.value;
            createDateSendText.textContent = dateSendInput.value;
            createResendDateText.textContent = dateResendInput.value;

            iceDiv.appendChild(createBlackDiv);

            createBlackDiv.appendChild(mainDiv);

            mainDiv.append(firstDiv, secondDiv, thirdDiv, fourthDiv, fifthDiv, sixthDiv);

            firstDiv.append(createStatut, createStatutText);

            secondDiv.append(createPost, createPostText, createCompanyText, createDateSendText);

            thirdDiv.append(createCompany, createCompanyText);

            fourthDiv.append(createDateSend, createDateSendText);

            fifthDiv.append(createResendDate, createResendDateText !== null ? createResendDateText : '-');

            sixthDiv.append(createDetails, createDetailButtonForm);
            
    });

displayTrack(getData());

createDetailButtonDisplay.addEventListener("click", () => {
    window.location.href = "/html/details_page.html";
})

createDetailButtonForm.addEventListener("click", () => {
    window.location.href = "/html/details_page.html";
})