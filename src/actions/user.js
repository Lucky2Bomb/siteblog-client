import axios from "axios";
import { Redirect } from "react-router-dom";
import { API_URL } from "../config";
import { hideLoader, showLoader } from "../reducers/appReducer";
import { setSelectedUser, setUser, setRoles } from './../reducers/userReducer';

export const registration = async (email, password, firstname, lastname, patronymic) => {
    try {
        const response = await axios.post(`${API_URL}/api/auth/registration`, {
            email,
            password,
            firstname,
            lastname,
            patronymic
        });
        alert(response.data.message);
    } catch (error) {
        alert(error.response.data.message);
    }
}

export const login = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}/api/auth/login`, {
                email,
                password
            });
            dispatch(setUser(response.data.user));
            localStorage.setItem("token", response.data.token);
            <Redirect to="/" />
        } catch (error) {
            alert(error.response.data.message);
        }
    }
}

export const auth = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}/api/auth/auth`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            });
            dispatch(setUser(response.data.user));
            dispatch(setRoles(response.data.user.roles));
            localStorage.setItem("token", response.data.token);

        } catch (error) {
            console.log(error);
            localStorage.removeItem("token");
        }
    }
}

export const editValueInProfile = async (nameValue, value) => {
    try {
        const request = {};
        request[nameValue] = value;
        const response = await axios.post(`${API_URL}/api/auth/edit-profile`, request, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
        alert(response.data.message);
    } catch (error) {
        alert(error.response.data.message);
        console.log(error);
    }
}

export const getSelectedUser = (email) => {
    return async dispatch => {
        try {
            showLoader();
            const response = await axios.get(`${API_URL}/api/auth/someProfile?email=${email}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
            dispatch(setSelectedUser(response.data));
        } catch (error) {
            alert(error);
            console.log(error);
        } finally {
            hideLoader();
        }
    }
}