import * as listeners from "./handlers/index.mjs";
import * as postMethods from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";





const path = location.pathname;

if (path.startsWith("/account/register.html")) {
  console.log("Setting register form listener"); // Log which listener is being set
  listeners.setRegisterFormListener();
} else if (path.startsWith("/account/login.html")) {
  console.log("Setting login form listener"); // Log which listener is being set
  listeners.setLoginFormListener();
} else if (path.startsWith("/post/create")) {
  console.log("Setting create post listener"); // Log which listener is being set
  listeners.setCreatePostListener();
} else if (path.startsWith("/post/edit")) { // Fixed the path to include leading slash
  console.log("Setting update post listener"); // Log which listener is being set
  listeners.setUpdatePostListener();
} else {
  console.log("No matching path found for setting listeners");
}

postMethods.getPost("70f62978-ca40-4e65-b370-7a2fa0a02148").then(console.log);
postMethods.getPosts().then(console.log)

//async function testTemplate() {
  //const posts = await postMethods.getPosts();
  //const container = document.querySelector("#post");
  //templates.renderPostTemplates(posts, container)

//}

