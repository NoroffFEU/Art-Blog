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


postMethods.getPosts().then(console.log);



//async function testTemplate() {
    //const response = await postMethods.getPosts();
    //const posts = response.data; // Accessing the array of posts within the "data" property

    //if (!Array.isArray(posts)) {
      //  throw new Error("Expected an array of posts, but got: " + JSON.stringify(posts));
    //}

    //const post = posts.pop(3); // Get the last post
    //const container = document.getElementById("post-container");
  //  templates.renderPostTemplates(posts, container);

//}

//testTemplate();