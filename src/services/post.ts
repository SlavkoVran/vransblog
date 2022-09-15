import { API_URL } from "../constants/api"

export const getSinglePostApi = (id: number) => {
    return fetch(`${API_URL}/posts/${id}`)
        .then(response => response.json())
}

export const getCommentsForSinglePostApi = (id: number) => {
    return fetch(`${API_URL}/posts/${id}/comments`)
        .then(response => response.json())
}

export const getPostsApi = () => {
    return fetch(`${API_URL}/posts`)
        .then(response => response.json())
}

export const getCommentsApi = () => {
    return fetch(`${API_URL}/comments`)
        .then(response => response.json())
}

export const getUsersApi = () => {
    return fetch(`${API_URL}/users`)
        .then(response => response.json())
}
