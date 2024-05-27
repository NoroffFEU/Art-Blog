import * as listeners from "./handlers/index.mjs";
import * as postMethods from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";
import { openNavMobile } from "./nav.mjs";





const path = location.pathname;

if (path.startsWith("/account/register.html")) {
  listeners.setRegisterFormListener();
} else if (path.startsWith("/account/login.html")) {
  listeners.setLoginFormListener();
} else {
  console.log("No matching path found for setting listeners");
}


openNavMobile();