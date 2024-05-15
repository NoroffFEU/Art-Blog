import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import * as post from "./api/posts/index.mjs";



const path = location.pathname;

if (path.startsWith("/account/register.html")) {
    setRegisterFormListener();
} else if (path.startsWith("/account/login.html")) {
    setLoginFormListener();
}


console.log("hello my friend");

post.createPost({
    title: "Test post nt.2",
    body: "Test post tekst"
});

//post.createPost()
//post.updatePost()
//post.deletePost()
//post.getPost()

post.getPost(
    "e7d9fd66-889c-4638-84da-2fd8541200ce").then(console.log);