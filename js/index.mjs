import * as listeners from "./handlers/index.mjs";
import { openNavMobile } from "./nav.mjs";


const path = location.pathname;

if (path.startsWith("/account/register.html")) {
  listeners.setRegisterFormListener();
} else if (path.startsWith("/account/login.html")) {
  listeners.setLoginFormListener();
} 

openNavMobile();