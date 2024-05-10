import { LOGIN_URL } from "../shared/constants.mjs";
import { doFetch } from "./doFetch.mjs";
import { addAuthToken } from "./handleAuth.mjs";


export async function loginUser(name, email, password) {
    const response = await doFetch(LOGIN_URL, {
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

