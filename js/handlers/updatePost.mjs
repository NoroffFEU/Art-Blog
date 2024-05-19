
import { updatePost} from "../api/posts/index.mjs"


export function setUpdatePostListener() {
    const form = document.querySelector("#editPost");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");
    

    if (form) {
    
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries());
            post.id = id;
            //Send to api
            updatePost(post);
            try {
                const updatedPost = updatePost(post);
                console.log("Post updated successfully:", updatedPost);
                // Display success message or navigate to a different page
            } catch (error) {
                console.error("Failed to update post:", error);
                // Display error message to the user
            }
        })
    }
}