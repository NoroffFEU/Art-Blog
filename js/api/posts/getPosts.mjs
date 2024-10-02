import { BASE_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "blog/posts/tester0406";

export async function getPosts() {

    const getPostsURL = `${BASE_URL}${action}`;

    const response = await authFetch(getPostsURL);

    return await response.json()
};

export async function getPost(id) {
    if (!id) {
        throw new Error("Get post requires a post ID");
    }

    const getPostURL = `${BASE_URL}${action}/${id}`;

    const response = await authFetch(getPostURL);

    return await response.json()
};
