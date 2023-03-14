// Add your code here
let form = document.querySelector("form");
let signup = document.querySelectorAll("[name=option]");
//let date_value= document.querySelector("a_date");

let u_name = null;

form.addEventListener("submit", (event) => {
  console.log(`====== Form Submission =========`);
  const username = form.elements.username.value;
  const email = form.elements.email.value;
  if (
    username === "" &&
    email === "" &&
    option === undefined &&
    user_date === ""
  ) {
    console.warn("You must enter some data to submit this form");
  }
  console.log("Username: ", username);
  console.log("Email: ", email);

  event.preventDefault();
});
