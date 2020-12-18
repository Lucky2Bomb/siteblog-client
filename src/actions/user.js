import axios from "axios";
import { Redirect } from "react-router-dom";
import { API_URL } from "../config";
import { setUser } from './../reducers/userReducer';

export const registration = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/api/auth/registration`, {
            email,
            password
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
            <Redirect to="/"/>
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
            localStorage.setItem("token", response.data.token);

        } catch (error) {
            console.log(error);
            localStorage.removeItem("token");
        }
    }
}