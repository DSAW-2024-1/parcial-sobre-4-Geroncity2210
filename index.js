const form = document.querySelector("form");
const loginDisplay = document.querySelector(".login");
const message = document.querySelector(".success_msm");
form.addEventListener("submit",(e) => {
    e.preventDefault();
    loginDisplay.classList.add("hide");
    message.classList.remove("hide");
})