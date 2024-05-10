import { REGISTER_URL } from "../shared/constants.mjs";
import { doFetch } from "./doFetch.mjs";



export async function registerUser(name, email, password) {
    console.log("register user");
    await doFetch(REGISTER_URL, {
        method: "POST",
        body: JSON.stringify ({
            name,
            email,
            password,
        }),
    });
}