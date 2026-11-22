const loginForm = document.querySelector("#login-form");

//Validação de e-mail e senha

if (loginForm) {
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");
  const emailError = document.querySelector("#email-error");
  const passwordError = document.querySelector("#password-error");
  const feedback = document.querySelector("#form-feedback");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  //mensagem de erro para o usuario

  function showError(input, errorElement, message) {
    errorElement.textContent = message;
    input.setAttribute("aria-invalid", message ? "true" : "false");
  }

  //validação do email e senha
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let isValid = true;
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    showError(emailInput, emailError, "");
    showError(passwordInput, passwordError, "");
    feedback.textContent = "";
    feedback.className = "form-feedback";

    if (!email) {
      showError(emailInput, emailError, "Informe seu e-mail.");
      isValid = false;
    } else if (!emailPattern.test(email)) {
      showError(emailInput, emailError, "Digite um e-mail em formato válido.");
      isValid = false;
    }

    if (!password.trim()) {
      showError(passwordInput, passwordError, "Informe uma senha");
      isValid = false;
    }

    if (!isValid) {
      feedback.textContent = "Revise os campos destacados e tente novamente.";
      feedback.classList.add("error");
      (emailError.textContent ? emailInput : passwordInput).focus();
      return;
    }

    //login feito com sucesso!

    feedback.textContent = "Login com sucesso!";
    feedback.classList.add("success");
    loginForm.reset();
    emailInput.setAttribute("aria-invalid", "false");
    passwordInput.setAttribute("aria-invalid", "false");
  });
}
