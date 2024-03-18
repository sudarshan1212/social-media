const form = document.getElementById("frm");

const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("conifrm");
const email = document.getElementById("email");
const closepopups = document.getElementById("closebutton");
const caution = document.getElementById("caution");
const errorMessage = document.getElementById("errorMessage");

var validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //EMAIL
  if (!email.value.trim().match(validRegex)) {
    errorMessage.innerText = "invalid email id";
    caution.classList.remove("hidden");
    return;
  } else {
  }
  //password
  if (passwordField.value.trim() != confirmPasswordField.value.trim()) {
    errorMessage.innerText = "incorrect password";
    caution.classList.remove("hidden");
    return;
  } else {
    form.submit();
  }
});
function closepopup() {
  caution.classList.add("hidden");
  //   addclasses([popup], ["hidden"]);
}

// function addclasses(elements, classes) {
//   elements.forEach((element) => {
//     classes.forEach((className) => {
//       element.classList.add(className);
//     });
//   });
// }
