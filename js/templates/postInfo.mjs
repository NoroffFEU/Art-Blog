import { getPost } from "../api/posts/getPosts.mjs";
import { BASE_URL } from "../api/constants.mjs";

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

    const titleElement = document.createElement("h1");
    titleElement.textContent = post.title;

    const bodyElement = document.createElement("p");
    bodyElement.textContent = post.body;

    const container = document.querySelector(".post-container"); // Targeting the corrected class

    if (container) {
      container.appendChild(titleElement);
      container.appendChild(bodyElement);
    } else {
      console.error("Container element not found");
    }
  } catch (error) {
    console.error("Error fetching post data:", error);
  }
}

// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", displayPost);