import { BASE_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "blog/posts/tester0406";
const method = "post";

export async function createPost(postData) {
    const createPostURL = BASE_URL + action;
    
    const response = await authFetch(createPostURL, {
        method,
        body: JSON.stringify(postData)
    });

    return await response.json();
}

