
export function setImageAltText(altText) {
    const altContainer = document.querySelector("#alt-text");
    if (altContainer) {
        altContainer.textContent = `Alt: ${altText}`; // Update HTML content to display alt text
    }
}