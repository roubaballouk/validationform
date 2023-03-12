let fullname = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("pass");
let message = document.getElementById("msg");

function checkFormValidation() {
  if (
    fullname.value.length < 5 ||
    fullname.value == "number" ||
    fullname.value == null
  ) {
    message.innerText = "please enter a valid username";
    return false;
  } else if (
    email.value.length < 5 ||
    email.value == "number" ||
    email.value == null
  ) {
    message.innerText = "please enter a valid email";
    return false;
  } else if (password.value == null || password.value.length < 5) {
    message.innerText = "please enter a valid password";
    return false;
  } else {
    alert("thank you");

    return true;
  }
}
