import { getPosts } from "../api/posts/getPosts.mjs";

export async function populateCarousel() {
    const response = await getPosts();
    const posts = response.data;

    if (!Array.isArray(posts)) {
        throw new Error("Expected an array of posts, but got: " + JSON.stringify(posts));
    }
    // Sort posts by date in descending order
    posts.sort((a, b) => new Date(b.created) - new Date(a.created));

    const carouselSlides = document.querySelectorAll(".carousel-slide");

    // Populate each carousel slide with post data
    for (let i = 0; i < carouselSlides.length && i < 3; i++) {
        const slide = carouselSlides[i];
        const post = posts[i];

        const titleElement = slide.querySelector("h1");
        const bodyElement = slide.querySelector("p");
        const imgElement = slide.querySelector("img");

        // Update HTML elements with post data
        titleElement.textContent = post.title;
        bodyElement.textContent = post.body.substring(0,250) + "...";
        imgElement.src = post.media.url;
        imgElement.alt = "Post Media";
    }
}
