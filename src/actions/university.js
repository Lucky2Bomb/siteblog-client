import axios from "axios";
import { API_URL } from "../config";
import { hideLoader, showLoader } from "../reducers/appReducer";
import { setAllSpecialityList, setAllUniversityList, setSpecialityList, setUniversityList, setUniversitySelectedUser, setCurrentGroup } from "../reducers/universityReducer";
import { setFacultyList, setSpecialityGroupList, setAllFacultyList, setAllSpecialityGroupList } from './../reducers/universityReducer';
import { setUniversityPositions, setRoleList } from './../reducers/usersReducer';

export const getUniversityList = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}/api/university/get-universities`);
            dispatch(setUniversityList(response.data));
        } catch (error) {
            console.log(error);
        }
    }
}

export const getAllUniversityList = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}/api/university/get-universities`);
            dispatch(setAllUniversityList(response.data));
        } catch (error) {
            console.log(error);
        }
    }
}

export const getFacultyList = (universityName) => {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}/api/university/get-faculties?university=${universityName}`);
            dispatch(setFacultyList(response.data));
        } catch (error) {
            console.log(error);
        }
    }
}

export const getAllFacultyList = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}/api/university/get-all-faculties`);
            dispatch(setAllFacultyList(response.data));
        } catch (error) {
            console.log(error);
        }
    }
}

export const getSpecialityList = (facultyName) => {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}/api/university/get-specialities?faculty=${facultyName}`);
            dispatch(setSpecialityList(response.data));
        } catch (error) {
            console.log(error);
        }
    }
}

export const getAllSpecialityList = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}/api/university/get-all-specialities`);
            dispatch(setAllSpecialityList(response.data));
        } catch (error) {
            console.log(error);
        }
    }
}


export const getSpecialityGroupList = (specialityName) => {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}/api/university/get-speciality-groups?speciality=${specialityName}`);
            dispatch(setSpecialityGroupList(response.data));
        } catch (error) {
            console.log(error);
        }
    }
}

export const getAllSpecialityGroupList = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}/api/university/get-all-speciality-groups`);
            dispatch(setAllSpecialityGroupList(response.data));
        } catch (error) {
            console.log(error);
        }
    }
}

export const getAllWaySpecialityGroup = (nameSpecialityGroup) => {
    return async dispatch => {
        try {
            showLoader();
            const response = await axios.get(`${API_URL}/api/university/get-all-way-speciality-group?nameSpecialityGroup=${nameSpecialityGroup}`);
            dispatch(setUniversitySelectedUser(response.data));
        } catch (error) {
            console.log(error);
        } finally {
            hideLoader();
        }
    }
}

export const getUniversityPositions = () => {
    return async dispatch => {
        try {
            showLoader();
            const response = await axios.get(`${API_URL}/api/university/get-university-positions`);
            dispatch(setUniversityPositions(response.data));
        } catch (error) {
            console.log(error);
        } finally {
            hideLoader();
        }
    }
}

export const setUniversityPosition = (positionName, email) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}/api/university/set-user-university-position`, {
                email,
                positionName
            }, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
            dispatch(getUniversityPositions());
            alert(response.data.message);
        } catch (error) {
            alert(error.response.data.message);
        }
    }
}

export const getRoleList = () => {
    return async dispatch => {
        try {
            showLoader();
            const response = await axios.get(`${API_URL}/api/role/get-roles`);
            dispatch(setRoleList(response.data));
        } catch (error) {
            console.log(error);
        } finally {
            hideLoader();
        }
    }
}

export const setUserRole = (roleName, email) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}/api/role/add-role-to-user`, {
                email,
                roleName
            }, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
            dispatch(getRoleList());
            alert(response.data.message);
        } catch (error) {
            alert(error.response.data.message);
        }
    }
}

export const createNewUniversityPosition = (value, universityId) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}/api/university/create-university-position`, {
                value,
                universityId
            }, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
            dispatch(getUniversityPositions());
            alert(response.data.message);
        } catch (error) {
            alert(error.response.data.message);
        }
    }
}

export const deleteUniversityPosition = (positionId) => {
    return async dispatch => {
        try {
            const response = await axios.delete(`${API_URL}/api/university/delete-university-position?positionId=${positionId}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
            dispatch(getUniversityPositions());
            alert(response.data.message);
        } catch (error) {
            alert(error.response.data.message);
        }
    }
}

export const createNewFaculty = (name, universityName) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}/api/university/create-faculty`, {
                name,
                universityName
            }, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
            dispatch(getAllFacultyList());
            alert(response.data.message);
        } catch (error) {
            alert(error.response.data.message);
        }
    }
}

export const deleteFaculty = (name) => {
    return async dispatch => {
        try {
            const response = await axios.delete(`${API_URL}/api/university/delete-faculty?name=${name}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
            dispatch(getAllFacultyList());
            alert(response.data.message);
        } catch (error) {
            alert(error.response.data.message);
        }
    }
}

export const createNewSpeciality = (name, facultyName) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}/api/university/create-speciality`, {
                name,
                facultyName
            }, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
            dispatch(getAllSpecialityList());
            alert(response.data.message);
        } catch (error) {
            alert(error.response.data.message);
        }
    }
}

export const editSpeciality = (name, facultyName) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}/api/university/edit-speciality`, {
                name,
                facultyName
            }, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
            dispatch(getAllSpecialityList());
            alert(response.data.message);
        } catch (error) {
            alert(error.response.data.message);
        }
    }
}

export const deleteSpeciality = (name) => {
    return async dispatch => {
        try {
            const response = await axios.delete(`${API_URL}/api/university/delete-speciality?name=${name}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
            dispatch(getAllSpecialityList());
            alert(response.data.message);
        } catch (error) {
            alert(error.response.data.message);
        }
    }
}

export const createNewSpecialityGroup = (name, specialityName) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}/api/university/create-speciality-group`, {
                name,
                specialityName
            }, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
            dispatch(getAllSpecialityGroupList());
            alert(response.data.message);
        } catch (error) {
            alert(error.response.data.message);
        }
    }
}

export const deleteSpecialityGroup = (name) => {
    return async dispatch => {
        try {
            const response = await axios.delete(`${API_URL}/api/university/delete-speciality-group?name=${name}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
            dispatch(getAllSpecialityGroupList());
            alert(response.data.message);
        } catch (error) {
            alert(error.response.data.message);
        }
    }
}

export const editSpecialityGroup = (name, specialityName) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}/api/university/edit-speciality-group`, {
                name,
                specialityName
            }, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
            dispatch(getAllSpecialityGroupList());
            alert(response.data.message);
        } catch (error) {
            alert(error.response.data.message);
        }
    }
}

export const getCurrentGroupUsers = (id) => {
    return async dispatch => {
        try {
            showLoader();
            const response = await axios.get(`${API_URL}/api/university/group?id=${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
            dispatch(setCurrentGroup(response.data));
        } catch (error) {
            alert(error.response.data.message);
        } finally {
            hideLoader();
        }
    }
}