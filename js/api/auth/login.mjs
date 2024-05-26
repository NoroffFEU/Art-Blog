import { BASE_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs"

const action = "auth/login";
const method = "post";

export async function login(profile) {
    const loginURL = BASE_URL + action;
    const body = JSON.stringify(profile);
    
    const response = await fetch(loginURL, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body
    })
    if (!response.ok) {
        // Handle login failure, you might want to show an error message
        const error = await response.json();
        alert(`Login failed: ${error.message}`);
        return;
    }

    const result = await response.json();
    
    // Save token and profile to storage
    storage.save("token", result.data.accessToken);
    storage.save("profile", result.data);

    alert("You have been logged in.");

    // Redirect to another page
    window.location.href = "./post/overview-posts.html";
}




