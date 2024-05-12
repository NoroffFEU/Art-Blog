
import { BASE_URL } from "../api/constants.mjs";
import { register } from "../api/auth/register.mjs";


export function setRegisterFormListener() {
    const registerForm = document.querySelector("#register-form");
    registerForm.addEventListener("submit", (event) => {
        event.preventDefault()
        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries())

        //Send to api
        register(profile)
    })
}