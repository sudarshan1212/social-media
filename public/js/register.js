const form = document.getElementById("frm");

const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("conifrm");
const email = document.getElementById("email");


var validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //EMAIL
  if (!email.value.trim().match(validRegex)) {
    email.classList.remove("border-gray-300", "border");
    email.classList.add("border-2", "border-red-500");
    return;
  } else {
    email.classList.add("border-gray-300", "border");
    email.classList.remove("border-2", "border-red-500");
  }
  //password
  if (passwordField.value.trim() != confirmPasswordField.value.trim()) {
    passwordField.classList.remove("border-gray-300", "border");
    passwordField.classList.add("border-2", "border-red-500");
    confirmPasswordField.classList.remove("border-gray-300", "border");
    confirmPasswordField.classList.add("border-2", "border-red-500");
    return;
  } else {
    passwordField.classList.add("border-green-300", "border-2");
    passwordField.classList.remove("border", "border-green-500");
    confirmPasswordField.classList.add("border-green-300", "border-2");
    confirmPasswordField.classList.remove("border", "border-green-500");
    form.submit();
  }
});
