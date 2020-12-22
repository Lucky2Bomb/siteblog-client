const SET_UNIVERSITY = "SET_UNIVERSITY";
const SET_FACULTY = "SET_FACULTY";
const SET_SPECIALITY = "SET_SPECIALITY";
const SET_SPECIALITY_GROUP = "SET_SPECIALITY_GROUP";

const SET_UNIVERSITY_LIST = "SET_UNIVERSITY_LIST";
const SET_FACULTY_LIST = "SET_FACULTY_LIST";
const SET_SPECIALITY_LIST = "SET_SPECIALITY_LIST";
const SET_SPECIALITY_GROUP_LIST = "SET_SPECIALITY_GROUP_LIST";

const SET_ALL_UNIVERSITY_LIST = "SET_ALL_UNIVERSITY_LIST";
const SET_ALL_FACULTY_LIST = "SET_ALL_FACULTY_LIST";
const SET_ALL_SPECIALITY_LIST = "SET_ALL_SPECIALITY_LIST";
const SET_ALL_SPECIALITY_GROUP_LIST = "SET_ALL_SPECIALITY_GROUP_LIST";

const SET_UNIVERSITY_SELECTED_USER = "SET_UNIVERSITY_SELECTED_USER";

const SET_CURRENT_GROUP = "SET_CURRENT_GROUP";

const defaultState = {
    university: "",
    faculty: "",
    speciality: "",
    specialityGroup: "",
    universityList: [],
    facultyList: [],
    specialityList: [],
    specialityGroupList: [],
    allUniversityList: [],
    allFacultyList: [],
    allSpecialityList: [],
    allSpecialityGroupList: [],
    universitySelectedUser: {},
    currentGroup: {},
}

export default function universityReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_UNIVERSITY:
            return {
                ...state,
                university: action.payload,
                faculty: "",
                speciality: "",
                specialityGroup: ""
            }

        case SET_FACULTY:
            return {
                ...state,
                faculty: action.payload,
                speciality: "",
                specialityGroup: ""
            }

        case SET_SPECIALITY:
            return {
                ...state,
                speciality: action.payload,
                specialityGroup: ""
            }

        case SET_SPECIALITY_GROUP:
            return {
                ...state,
                specialityGroup: action.payload
            }

        case SET_UNIVERSITY_LIST:
            return {
                ...state,
                universityList: action.payload,
                facultyList: [],
                specialityList: [],
                specialityGroupList: [],
            }

        case SET_FACULTY_LIST:
            return {
                ...state,
                facultyList: action.payload,
                specialityList: [],
                specialityGroupList: [],
            }

        case SET_SPECIALITY_LIST:
            return {
                ...state,
                specialityList: action.payload,
                specialityGroupList: [],
            }

        case SET_SPECIALITY_GROUP_LIST:
            return {
                ...state,
                specialityGroupList: action.payload
            }

        case SET_ALL_UNIVERSITY_LIST:
            return {
                ...state,
                allUniversityList: action.payload,
            }

        case SET_ALL_FACULTY_LIST:
            return {
                ...state,
                allFacultyList: action.payload,
            }

        case SET_ALL_SPECIALITY_LIST:
            return {
                ...state,
                allSpecialityList: action.payload,
            }

        case SET_ALL_SPECIALITY_GROUP_LIST:
            return {
                ...state,
                allSpecialityGroupList: action.payload
            }

        case SET_UNIVERSITY_SELECTED_USER:
            return {
                ...state,
                universitySelectedUser: action.payload
            }

        case SET_CURRENT_GROUP:
            return {
                ...state,
                currentGroup: action.payload
            }
        default:
            return state;
    }
}

export const setCurrentGroup = (group) => ({
    type: SET_CURRENT_GROUP,
    payload: group
});

export const setUniversity = (universityName) => ({
    type: SET_UNIVERSITY,
    payload: universityName
});

export const setFaculty = (facultyName) => ({
    type: SET_FACULTY,
    payload: facultyName
});

export const setSpeciality = (specialityName) => ({
    type: SET_SPECIALITY,
    payload: specialityName
});

export const setSpecialityGroup = (specialityGroupName) => ({
    type: SET_SPECIALITY_GROUP,
    payload: specialityGroupName
});


export const setUniversityList = (universityList) => ({
    type: SET_UNIVERSITY_LIST,
    payload: universityList
});

export const setFacultyList = (facultyList) => ({
    type: SET_FACULTY_LIST,
    payload: facultyList
});

export const setSpecialityList = (specialityList) => ({
    type: SET_SPECIALITY_LIST,
    payload: specialityList
});

export const setSpecialityGroupList = (specialityGroupList) => ({
    type: SET_SPECIALITY_GROUP_LIST,
    payload: specialityGroupList
});

export const setAllUniversityList = (universityList) => ({
    type: SET_ALL_UNIVERSITY_LIST,
    payload: universityList
});

export const setAllFacultyList = (facultyList) => ({
    type: SET_ALL_FACULTY_LIST,
    payload: facultyList
});

export const setAllSpecialityList = (specialityList) => ({
    type: SET_ALL_SPECIALITY_LIST,
    payload: specialityList
});

export const setAllSpecialityGroupList = (specialityGroupList) => ({
    type: SET_ALL_SPECIALITY_GROUP_LIST,
    payload: specialityGroupList
});


export const setUniversitySelectedUser = (data) => ({
    type: SET_UNIVERSITY_SELECTED_USER,
    payload: data
})