
import { BASE_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "blog/posts/tester0406";
const method = "put";

export async function updatePost(postData) {
    if (!postData.id) {
        throw new Error("Update requires a post ID");
    }

    const updatePostURL = `${BASE_URL}${action}/${postData.id}`;

    const response = await authFetch(updatePostURL, {
        method,
        body: JSON.stringify(postData)
    });

    return await response.json()
};