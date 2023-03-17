// Add your code here
let form = document.querySelector("form");
// let signup = document.querySelectorAll("[name=option]");
let submit_button = document.querySelector("submit");
let reset_button = document.getElementById("reset-button");

reset_button.addEventListener("click", (event) => {
  event.preventDefault();
  form.reset();
});

let u_name = null;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = form.elements.usernameInput.value;
  const email = form.elements.emailInput.value;
  const message = form.elements.message.value;
  if (username === "") {
    alert("Please enter a username");
    return;
  }
  if (email === "") {
    alert("please enter an email address");
    return;
  }
  if (message === "") {
    alert("Please enter a short message");
    return;
  }
  form.reset();
});
