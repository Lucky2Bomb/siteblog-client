import axios from "axios";
import { API_URL } from "../config";
import { setPageSettings, setPosts, setCurrentPost, setCommentsOnCurrentPost } from "../reducers/postReducer";
import { showLoader, hideLoader } from "../reducers/appReducer";
// import { setUser } from './../reducers/userReducer';
import { updateCommentsOnCurrentPost } from './../reducers/postReducer';

export const getPosts = (currentPage) => {
    return async dispatch => {
        try {
            const page = currentPage;
            const limit = 5;
            const offset = 0;
            const response = await axios.get(`${API_URL}/api/post/get-posts?page=${page}&limit=${limit}&offset=${offset}`);
            dispatch(setPageSettings(response.data.page, response.data.pages, response.data.limit, response.data.total));
            dispatch(setPosts(response.data.docs));
        } catch (error) {
            alert(error);
        }
    }
}

export const getPost = (postId) => {
    return async dispatch => {
        try {
            showLoader();
            const response = await axios.get(`${API_URL}/api/post/get-post?id=${postId}`);
            dispatch(setCurrentPost(response.data[0]));
        } catch (error) {
            alert(error);
        } finally {
            hideLoader();
        }
    }
}

export const deletePost = (postId) => {
    return async dispatch => {
        try {
            const response = await axios.delete(`${API_URL}/api/post/delete-post?id=${postId}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
            alert(response.data.message);
            dispatch(getPosts(1));
        } catch (error) {
            alert(error.response.data.message);
            console.log(error);
        }
    }
}

export const getCommentsOnPost = (postId) => {
    return async dispatch => {
        try {
            showLoader();
            const response = await axios.get(`${API_URL}/api/post/get-comments-on-post?postId=${postId}`);
            dispatch(setCommentsOnCurrentPost(response.data));
        } catch (error) {
            alert(error);
        } finally {
            hideLoader();
        }
    }
}

export const sendCommentToPost = (postId, text) => {
    return async dispatch => {
        try {
            const request = {};
            request["postId"] = postId;
            request["text"] = text;
            const response = await axios.post(`${API_URL}/api/post/create-comment-to-post`, request, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
            alert(response.data.message);
            dispatch(getCommentsOnPost(postId));
        } catch (error) {
            alert(error.response.data.message);
            console.log(error);
        }
    }
}

export const deleteCommentToPost = (commentId, postId) => {
    return async dispatch => {
        try {
            const response = await axios.delete(`${API_URL}/api/post/delete-comment?id=${commentId}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
            alert(response.data.message);
            dispatch(getCommentsOnPost(postId));
        } catch (error) {
            alert(error.response.data.message);
            console.log(error);
        }
    }
}

export const createPost = (title, text, file) => {
    return async dispatch => {
        try {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("title", title);
            formData.append("text", text);
            const response = await axios.post(`${API_URL}/api/post/create-post`, formData, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
            alert(response.data.message);
            // dispatch(getPosts());
        } catch (error) {
            alert(error.response.data.message);
            console.log(error);
        }
    }
}

export const uploadImageToPost = (postId, file) => {
    return async dispatch => {
        try {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("postId", postId);
            const response = await axios.post(`${API_URL}/api/post/upload-image-post`, formData, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
            alert(response.data.message);
            dispatch(getPost(postId));
        } catch (error) {
            alert(error.response.data.message);
            console.log(error);
        }
    }
}

export const deleteImageToPost = (postId) => {
    return async dispatch => {
        try {
            const response = await axios.delete(`${API_URL}/api/post/delete-image-post?postId=${postId}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
            alert(response.data.message);
            dispatch(getPost(postId));
        } catch (error) {
            alert(error.response.data.message);
            console.log(error);
        }
    }
}

export const editPost = (postId, title, text) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}/api/post/edit-post`, { postId, title, text }, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
            alert(response.data.message);
            // dispatch(getPosts());
        } catch (error) {
            alert(error.response.data.message);
            console.log(error);
        }
    }
}