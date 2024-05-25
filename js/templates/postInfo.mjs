import { getPost } from "../api/posts/getPosts.mjs";
import { BASE_URL } from "../api/constants.mjs";
import { formatDate } from "../utils/formating.mjs";

function getPostIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

const action = "blog/posts/tester0406";

export async function getPostById(id) {
  console.log(`Fetching post with ID: ${id}`);
  const response = await fetch(`${BASE_URL}${action}/${id}`);
  const post = await response.json();
  return post;
}

async function displayPost() {
  const postId = getPostIdFromURL();
  console.log(`Post ID from URL: ${postId}`);

  if (!postId) {
    console.error("Post ID is missing from the URL");
    return;
  }

  try {
    const response = await getPostById(postId);
    const post = response.data;
    console.log(`Fetched post: ${JSON.stringify(post)}`);

    if (!post) {
      throw new Error("Post not found");
    }

    // Select elements inside the post-container
    const container = document.querySelector(".post-container");

    if (container) {
      const titleElement = container.querySelector("h1");
      const bodyElement = container.querySelector(".wrapper > p:last-of-type");
      const authorElement = container.querySelector(".info-block .author");
      const dateElement = container.querySelector(".info-block .date");
      const imageElement = container.querySelector(".image-container img");

  


      // Set the content of the elements
      titleElement.textContent = post.title;
      bodyElement.textContent = post.body;
      authorElement.textContent = post.author.name;
      dateElement.textContent = formatDate(post.created);
      imageElement.src = post.media.url; 
      imageElement.alt = "Post Media";

    } else {
      console.error("Container element not found");
    }
  } catch (error) {
    console.error("Error fetching post data:", error);
  }
}

// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", displayPost);