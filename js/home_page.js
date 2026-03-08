const registerBtn = document.getElementById("register-btn");
const loginBtn = document.getElementById("login-btn");



const register = () => {
  const form = document.getElementById("home-form");
  form.innerHTML = '';
  const confirm = document.getElementById("confirm");
  confirm.innerHTML = '';
  const title = document.getElementById("form-title");
  title.textContent = "S'inscrire";

  const nameDiv = document.createElement("div");
  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Nom";
  const nameInput = document.createElement("input");

  const homeNamesDiv = document.createElement("div");
  homeNamesDiv.classList.add("names-div");

  form.appendChild(homeNamesDiv);

  nameInput.classList.add("name-input");
  nameInput.placeholder = "Nom";
  nameInput.required = true

  homeNamesDiv.appendChild(nameDiv);
  nameDiv.appendChild(nameLabel);
  nameDiv.appendChild(nameInput);

  const firstNameDiv = document.createElement("div");
  const firstNameLabel = document.createElement("label");
  firstNameLabel.textContent = "Prénom";
  const firstNameInput = document.createElement("input");

  firstNameInput.placeholder = "Prénom";
  firstNameInput.required = true;

  homeNamesDiv.appendChild(firstNameDiv);
  firstNameDiv.appendChild(firstNameLabel);
  firstNameDiv.appendChild(firstNameInput);

  const emailPasswordDiv = document.createElement("div");
  emailPasswordDiv.classList.add("email-password-div");

  form.appendChild(emailPasswordDiv);

  const emailDiv = document.createElement("div");
  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email";
  const emailInput = document.createElement("input");

  emailInput.placeholder = "Email";
  emailInput.required = true
  emailInput.type = "email";

  emailPasswordDiv.appendChild(emailDiv);
  emailDiv.appendChild(emailLabel);
  emailDiv.appendChild(emailInput);

  const passwordDiv = document.createElement("div");
  const passwordLabel = document.createElement("label");
  passwordLabel.textContent = "Mot de passe";
  const passwordInput = document.createElement("input");
  passwordInput.placeholder = "Mot de passe";
  passwordInput.required = true
  passwordInput.type = "password";
  emailPasswordDiv.appendChild(passwordDiv);
  passwordDiv.appendChild(passwordLabel);
  passwordDiv.appendChild(passwordInput);

  
  const confirmBtn = document.createElement("button")
  confirmBtn.id = "confirm-btn"
  confirmBtn.className = "ice-button"
  confirmBtn.innerText = "Valider"
  confirm.appendChild(confirmBtn)
};


const login = () => {
    const form = document.getElementById("home-form")
    form.innerHTML = ''  
    const confirm = document.getElementById("confirm")
    confirm.innerHTML = ''
  const title = document.getElementById("form-title");
  title.textContent = "Se connecter";

  const registerForm = document.getElementById("home-form");


  const emailDiv = document.createElement("div");
  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email";
  const emailInput = document.createElement("input");
  emailInput.placeholder = "Email";
  emailInput.type = "email";
  emailInput.required = true
  registerForm.appendChild(emailDiv);
  emailDiv.appendChild(emailLabel);
  emailDiv.appendChild(emailInput);

  const passwordDiv = document.createElement("div");
  const passwordLabel = document.createElement("label");
  passwordLabel.textContent = "Mot de passe";
  const passwordInput = document.createElement("input");
  passwordInput.placeholder = "Mot de passe";
  passwordInput.type = "password";
  passwordInput.required = true
  registerForm.appendChild(passwordDiv);
  passwordDiv.appendChild(passwordLabel);
  passwordDiv.appendChild(passwordInput);

  
  const confirmBtn = document.createElement("button")
  confirmBtn.id = "confirm-btn"
  confirmBtn.className = "ice-button"
  confirmBtn.innerText = "Valider"
  confirm.appendChild(confirmBtn)
};

registerBtn.addEventListener("click", register);
loginBtn.addEventListener("click", login);
