function switchTheme() {
  let body = document.querySelector("body");
  // body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}
let themeButton = document.querySelector(".change");
themeButton.addEventListener("click", switchTheme);

function contactUs() {
  let name = prompt("What is your first name?");
  let email = prompt("What is your e-mail address?");
  if (name.length > 3 && email.length > 5) {
    alert(
      `Hi ${name}, thank you for contacting us! We'll be soon in touch via e-mail. 🛼🛼`
    );
  } else {
    alert(
      `Sorry ${name}, we didn't get your answer, please retry with full information.✨🛼`
    );
  }
}
let contactButton = document.querySelector(".interact");
contactButton.addEventListener("click", contactUs);
