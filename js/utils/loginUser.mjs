import { LOGIN_URL } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs";
import { addAuthToken } from "./handleAuth.mjs";

export async function loginUser(name, email, password) {
    const response = await authFetch(LOGIN_URL, {
        method: 'POST',
        body: JSON.stringify ({
            name,
            email,
            password,
        }),
    });

    const {data} = response;
    const {accessToken} = data;
    
    if (accessToken) {
        addAuthToken(accessToken);
    } else {
        throw new Error ("No access token provided");
    } 
}

