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
  sendEmail(username, email, message);
  form.reset();
});

function sendEmail(username, email, message) {
  Email.send({
    SecureToken: "77301c31-1bb2-4a67-b65b-fd0f5d832574",
    To: "reachalo6@gmail.com",
    From: email,
    Subject: "From" + username,
    Body: message,
  }).then((message) => alert(message));
}
