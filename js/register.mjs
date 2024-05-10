
// 1. Fetch API

import { registerUser } from "./utils/registerUser.mjs";




const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);
    const name = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    console.log(name, email, password);
    registerUser(name, email, password);

})



