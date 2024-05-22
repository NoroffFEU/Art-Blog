import { BASE_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "blog/posts/tester0406";
const method = "DELETE"; // Ensure method is uppercase

export async function deletePost(id) {
    if (!id) {
        throw new Error("Delete requires a post ID");
    }

    const deletePostURL = `${BASE_URL}${action}/${id}`;

    const response = await authFetch(deletePostURL, {
        method
    });

    if (!response.ok) {
        throw new Error("Failed to delete post");
    }

    // Check if there is a body in the response
    const responseText = await response.text();
    try {
        return JSON.parse(responseText);
    } catch (error) {
        // If parsing fails, return the raw text response
        return responseText;
    }
}
