import { getPosts } from "../api/posts/getPosts.mjs";
import { deletePost } from "../api/posts/deletePosts.mjs";

document.addEventListener("DOMContentLoaded", () => {
    populateTable();
});

async function populateTable() {
    try {
        const response = await getPosts();
        const posts = response.data;

        if (!Array.isArray(posts)) {
            throw new Error("Expected an array of posts, but got: " + JSON.stringify(posts));
        }

        const tableBody = document.querySelector("#postsTable tbody");

        if (!tableBody) {
            throw new Error("Cannot find the table body element");
        }

        // Clear existing rows
        tableBody.innerHTML = '';

        
        posts.forEach(post => {
            const row = document.createElement('tr');

            // Title
            const titleCell = document.createElement('td');
            titleCell.textContent = post.title;
            row.appendChild(titleCell);

            // Date created
            const createdCell = document.createElement('td');
            createdCell.textContent = new Date(post.created).toLocaleDateString();
            row.appendChild(createdCell);

            // Date edited
            const editedCell = document.createElement('td');
            editedCell.textContent = new Date(post.updated).toLocaleDateString();
            row.appendChild(editedCell);

            // Tag
            const tagCell = document.createElement('td');
            tagCell.textContent = post.tags.join(', ');
            row.appendChild(tagCell);

            // Created by
            const createdByCell = document.createElement('td');
            createdByCell.textContent = post.author.name;
            row.appendChild(createdByCell);

            // Actions
            const actionCell = document.createElement('td');
            const editIcon = document.createElement('i');
            editIcon.classList.add('fa-solid', 'fa-pen-to-square', 'table-icon');
            editIcon.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent row click event
                window.location.href = `edit.html?id=${post.id}`;
            });

            const deleteIcon = document.createElement('i');
            deleteIcon.classList.add('fa-solid', 'fa-x', 'table-icon');
            deleteIcon.addEventListener('click', async (event) => {
                event.stopPropagation(); // Prevent row click event
                console.log(`Attempting to delete post with id: ${post.id}`);
                try {
                    const deleteResponse = await deletePost(post.id);
                    console.log(`Deleted post with id: ${post.id}`, deleteResponse);
                    row.remove(); // Remove the row from the table
                } catch (error) {
                    console.error(`Failed to delete post with id: ${post.id}`, error);
                }
            });

            const actionContainer = document.createElement('div');
            actionContainer.classList.add('icon-container');
            actionContainer.appendChild(editIcon);
            actionContainer.appendChild(deleteIcon);

            actionCell.appendChild(actionContainer);
            row.appendChild(actionCell);

            // Add click event to the row to make it clickable
            row.addEventListener('click', () => {
                window.location.href = `post.html?id=${post.id}`;
            });

            // Append the row to the table body
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error("Failed to populate table:", error);
    }
}

