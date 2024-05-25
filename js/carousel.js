import { getPosts } from "./api/posts/getPosts.mjs";


// Function to generate carousel slides with posts data
async function generateCarousel() {
    const response = await getPosts();
    const posts = response.data;

    if (!Array.isArray(posts)) {
        throw new Error("Expected an array of posts, but got: " + JSON.stringify(posts));
    }

    const carouselTrack = document.querySelector("[data-slides]");
    carouselTrack.innerHTML = ''; // Clear any existing slides

    posts.slice(0, 3).forEach((post, index) => {
        const slide = document.createElement("li");
        slide.classList.add("carousel-slide");
        slide.setAttribute("data-post-id", post.id); // Set post ID as a data attribute

        slide.innerHTML = `
            <div class="slider-text">
                <h1>${post.title}</h1>
                <p>${post.body.length > 100 ? post.body.slice(0, 100) + '...' : post.body}</p>
                <div class="button" data-post-id="${post.id}">Read more</div>
            </div>
            <img class="carousel-img" src="${post.media.url}" alt="${post.title}">
        `;

        if (index === 0) {
            slide.setAttribute('data-active', 'true'); // Set the first slide as active
        }

        carouselTrack.appendChild(slide);
    });

    setupCarouselButtons();
    setupReadMoreButtons();
}

// Function to handle carousel navigation
function setupCarouselButtons() {
    const buttons = document.querySelectorAll("[data-carousel-btn]");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const offset = button.dataset.carouselBtn === "next" ? 1 : -1;
            const slides = button.closest("[data-carousel-container]").querySelector("[data-slides]");

            const activeSlide = slides.querySelector("[data-active]");
            let newIndex = [...slides.children].indexOf(activeSlide) + offset;
            if (newIndex < 0) newIndex = slides.children.length - 1;
            if (newIndex >= slides.children.length) newIndex = 0;

            slides.children[newIndex].dataset.active = 'true';
            delete activeSlide.dataset.active;
        });
    });
}

// Function to handle "Read more" button clicks
function setupReadMoreButtons() {
    const readMoreButtons = document.querySelectorAll(".button");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const postId = event.target.getAttribute("data-post-id");
            if (postId) {
                window.location.href = `./post/index.html?id=${postId}`;
            } else {
                console.error("Post ID not found for the clicked button.");
            }
        });
    });
}

// Initialize the carousel on page load
document.addEventListener("DOMContentLoaded", generateCarousel);
