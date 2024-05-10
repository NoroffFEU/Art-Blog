

export const addAuthToken = (token) => {
    //Get auth token from local storage
    localStorage.setItem("access-token", token)
    
};

export const getAuthToken = () => {
    const accessToken = localStorage.getItem("access-token")
    return accessToken;


};