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




async function testTemplate() {
  const response = await postMethods.getPosts();
  const posts = response.data;

  if (!Array.isArray(posts)) {
      throw new Error("Expected an array of posts, but got: " + JSON.stringify(posts));
  }

  const container = document.getElementById("post-container");

  posts.forEach(post => {
    if (post.media && post.media.url) { // Check if media and media.url exist
        const title = post.title;
        const body = post.body;
        const mediaUrl = post.media.url;
        const tags = post.tags;

        renderPosts(title, body, mediaUrl, tags, container);
    }
  });
}

function renderPosts(title, body, mediaUrl, tags, container) {
  const postElement = document.createElement("div");
  postElement.classList.add("post");

  const titleElement = document.createElement("h2");
  titleElement.textContent = title;

  const bodyElement = document.createElement("p");
  bodyElement.textContent = body;

  const mediaElement = document.createElement("img");
  mediaElement.src = mediaUrl;
  mediaElement.alt = "Post Media";

  const tagsElement = document.createElement("p");
  tagsElement.textContent = tags;

  postElement.appendChild(titleElement);
  postElement.appendChild(bodyElement);
  postElement.appendChild(mediaElement);
  postElement.appendChild(tagsElement);

  container.appendChild(postElement);
}

testTemplate();

postMethods.getPosts().then(console.log);