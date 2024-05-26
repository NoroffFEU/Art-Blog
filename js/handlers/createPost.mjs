
import { createPost} from "../api/posts/index.mjs"


export function setCreatePostListener() {
    const form = document.querySelector("#createPost");
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const post = Object.fromEntries(formData.entries());

        // Handle tags field to be an array of strings
        if (post.tags) {
            post.tags = post.tags.split(',').map(tag => tag.trim());
        }

        // Handle media field to be an object if needed
        if (post.media) {
            post.media = { url: post.media };
        } else {
            post.media = null;

        }

        // Send to API
        const response = await createPost(post);
        alert("a new post has been created");
        console.log(response);
    });
}

