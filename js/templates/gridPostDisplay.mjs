import { getPosts } from "../api/posts/getPosts.mjs";
import { formatDate } from "../utils/formating.mjs";

export async function createPostDisplay() {
  const response = await getPosts();
  const posts = response.data;

  if (!Array.isArray(posts)) {
    throw new Error("Expected an array of posts, but got: " + JSON.stringify(posts));
  }

  const latestPosts = posts.slice(0, 12);

  const container = document.querySelector(".card-container");

  latestPosts.forEach(post => {
    if (post.media && post.media.url) { // Check if media and media.url exist
      const title = post.title;
      const body = post.body;
      const mediaUrl = post.media.url;
      const tags = post.tags;
      const date = formatDate(post.created);

      renderPosts(post.id, title, body, mediaUrl, tags, date, container, 200);
    }
  });
}

export function renderPosts(postId, title, body, mediaUrl, tags, created, container, maxLength = 250) {
  const blogPostBlockElement = document.createElement("div");
  blogPostBlockElement.classList.add("blog-posts-block");

  const cardContainerElement = document.createElement("div");
  cardContainerElement.classList.add("card-container");

  const verticalCardElement = document.createElement("a");
  verticalCardElement.classList.add("vertical-card");
  verticalCardElement.href = "./post/index.html?id=" + postId;

  const articleElement = document.createElement("article");

  const mediaElement = document.createElement("img");
  mediaElement.src = mediaUrl;
  mediaElement.alt = "Post Media";

  const cardContentElement = document.createElement("div");
  cardContentElement.classList.add("v-card-content");

  const dateElement = document.createElement("h6");
  dateElement.textContent = created;
  dateElement.classList.add("card-date");

  const titleElement = document.createElement("h4");
  titleElement.textContent = title;
  titleElement.classList.add("card-title");

  const bodyElement = document.createElement("p");
  bodyElement.textContent = body.length > maxLength ? body.slice(0, maxLength) + '...' : body;

  const tagContainerElement = document.createElement("div");
  tagContainerElement.classList.add("tag-marker");

  const tagsElement = document.createElement("p");
  tagsElement.textContent = tags;

  blogPostBlockElement.appendChild(cardContainerElement);
  cardContainerElement.appendChild(verticalCardElement);
  verticalCardElement.appendChild(articleElement);
  articleElement.append(mediaElement, cardContentElement);
  cardContentElement.appendChild(dateElement);
  cardContentElement.appendChild(titleElement);
  cardContentElement.appendChild(bodyElement);
  cardContentElement.appendChild(tagContainerElement);
  tagContainerElement.appendChild(tagsElement);

  container.appendChild(cardContainerElement);
}

async function filterPostsByTag(tag) {
  const container = document.querySelector(".card-container");
  container.innerHTML = ""; // Clear existing posts

  const response = await getPosts();
  const posts = response.data;

  if (!Array.isArray(posts)) {
    throw new Error("Expected an array of posts, but got: " + JSON.stringify(posts));
  }

  posts.forEach(post => {
    if (post.media && post.media.url && (tag === "All" || post.tags.includes(tag))) { 
      const title = post.title;
      const body = post.body;
      const mediaUrl = post.media.url;
      const tags = post.tags;
      const date = formatDate(post.created);

      renderPosts(post.id, title, body, mediaUrl, tags, date, container, 200);
    }
  });
}

// Event listener for dropdown change
const tagDropdown = document.getElementById("tag-dropdown");
tagDropdown.addEventListener("change", (event) => {
  const selectedTag = event.target.value;
  filterPostsByTag(selectedTag);
});


