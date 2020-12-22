import axios from "axios";
import { API_URL } from "../config";
import { showLoader, hideLoader } from "../reducers/appReducer";
import { setPageSettings, setUsers } from "../reducers/usersReducer";
import { useSelector } from 'react-redux';

export const getUsers = (currentPage) => {
    return async dispatch => {
        try {
            const page = currentPage;
            const limit = 5;
            const response = await axios.get(`${API_URL}/api/users/get-users?page=${page}&limit=${limit}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
            dispatch(setPageSettings(response.data.page, response.data.pages, response.data.limit, response.data.total));
            dispatch(setUsers(response.data.docs));
        } catch (error) {
            alert(error);
        }
    }
}

export const deleteUser = (userId) => {
    return async dispatch => {
        try {
            const response = await axios.delete(`${API_URL}/api/users/delete-user?userId=${userId}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
            alert(response.data.message);
            dispatch(getUsers());
        } catch (error) {
            alert(error.response.data.message);
            console.log(error);
        }
    }
}
