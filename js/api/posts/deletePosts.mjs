
import { BASE_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "blog/posts/tester0406";
const method = "delete";

export async function deletePost(id) {
    if (!id) {
        throw new Error("Delete requires a post ID");
    }

    const deletePostURL = `${BASE_URL}${action}/${id}`;

    const response = await authFetch(deletePostURL, {
        method
    });

    return await response.json()
};