import axios from "axios";
import { API_URL } from "../config";
import { setPageSettings, setPosts, setCurrentPost, setCommentsOnCurrentPost } from "../reducers/postReducer";
import { showLoader, hideLoader } from "../reducers/appReducer";
// import { setUser } from './../reducers/userReducer';

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