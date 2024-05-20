import * as listeners from "./handlers/index.mjs";
import * as postMethods from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";




const path = location.pathname;

if (path.startsWith("/account/register.html")) {
    listeners.setRegisterFormListener();
} else if (path.startsWith("/account/login.html")) {
    listeners.setLoginFormListener();
} else if (path.startsWith("/post/create")) {
  listeners.setCreatePostListener();
} else if (path.startsWith("post/edit")) {
  listeners.setUpdatePostListener();
}

postMethods.getPosts().then(console.log)

