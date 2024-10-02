
import { BASE_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "blog/posts/tester0406";
const method = "PUT";

export async function updatePost(postData) {
    if (!postData.id) {
        throw new Error("Update requires a post ID");
    }

    const updatePostURL = `${BASE_URL}${action}/${postData.id}`;

    const serializedData = JSON.stringify(postData);

    const response = await authFetch(updatePostURL, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: serializedData
    });

    if (!response.ok) {
        throw new Error("Failed to update post");
    }

    return await response.json();
}
