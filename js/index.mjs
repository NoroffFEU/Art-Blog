

import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";




const path = location.pathname;

if (path.startsWith("/account/register.html")) {
    setRegisterFormListener();
} else if (path.startsWith("/account/login.html")) {
    setLoginFormListener();
}

console.log("hello my friend");