import * as listeners from "../handlers/index.mjs";

const path = location.pathname;

if (path.includes("/account/register.html")) {
    listeners.setRegisterFormListener();
  } else if (path.includes("/account/login.html")) {
    listeners.setLoginFormListener();
  } 