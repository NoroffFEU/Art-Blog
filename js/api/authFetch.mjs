import { load } from "../storage/index.mjs";

export function headers() {
    const token = load("token");

    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
}

//Behaves exactly like normal fetch, but includes headers(content type, authorization)
export async function authFetch (url, options = {}) {
    return fetch(url, {
        ...options,
        headers: headers()
    })


}