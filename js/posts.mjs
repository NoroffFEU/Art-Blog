import { POSTS_URL } from "./shared/constants.mjs";
import { doFetch } from "./utils/doFetch.mjs";

async function getPosts () {
    console.log("getting posts");
    const posts = await doFetch(POSTS_URL, true)
    console.log(posts);

}

function main () {
    getPosts();
    console.log("/posts/")
}

main();







