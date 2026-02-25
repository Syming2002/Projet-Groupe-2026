const registerBtn = document.getElementById("register-btn");
const loginBtn = document.getElementById("login-btn");



const register = () => {
  const form = document.getElementById("home-form")
  form.innerHTML = ''
  const confirm = document.getElementById("confirm")
  confirm.innerHTML = ''
  const title = document.getElementById("form-title");
  title.textContent = "S'inscrire";

  const registerForm = document.getElementById("home-form");

  const nameDiv = document.createElement("div");
  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Nom";
  const nameInput = document.createElement("input");
  nameInput.placeholder = "Nom";
  nameInput.required = true
  registerForm.appendChild(nameDiv);
  nameDiv.appendChild(nameLabel);
  nameDiv.appendChild(nameInput);

  const surnameDiv = document.createElement("div");
  const surnameLabel = document.createElement("label");
  surnameLabel.textContent = "Prénom";
  const surnameInput = document.createElement("input");
  surnameInput.placeholder = "Prénom";
  surnameInput.required = true
  registerForm.appendChild(surnameDiv);
  surnameDiv.appendChild(surnameLabel);
  surnameDiv.appendChild(surnameInput);

  const emailDiv = document.createElement("div");
  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email";
  const emailInput = document.createElement("input");
  emailInput.placeholder = "Email";
  emailInput.required = true
  emailInput.type = "email";
  registerForm.appendChild(emailDiv);
  emailDiv.appendChild(emailLabel);
  emailDiv.appendChild(emailInput);

  const passwordDiv = document.createElement("div");
  const passwordLabel = document.createElement("label");
  passwordLabel.textContent = "Mot de passe";
  const passwordInput = document.createElement("input");
  passwordInput.placeholder = "Mot de passe";
  passwordInput.required = true
  passwordInput.type = "password";
  registerForm.appendChild(passwordDiv);
  passwordDiv.appendChild(passwordLabel);
  passwordDiv.appendChild(passwordInput);

  
  const confirmBtn = document.createElement("button")
  confirmBtn.id = "confirm-btn"
  confirmBtn.className = "ice-button"
  confirmBtn.innerText = "Valider"
  confirmBtn.type = "submit"
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
  confirmBtn.type = "submit"
  confirm.appendChild(confirmBtn)
};

registerBtn.addEventListener("click", register);
loginBtn.addEventListener("click", login);
