const SET_USER = "SET_USER";
const SET_ROLES = "SET_ROLES";
const SET_SELECTED_USER = "SET_SELECTED_USER";
const LOGOUT = "LOGOUT";

const defaultState = {
    currentUser: {},
    selectedUser: {},
    roles: [],
    isAuth: false
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true
            }
        case LOGOUT:
            localStorage.removeItem("token");
            return {
                ...state,
                currentUser: {},
                isAuth: false
            }

        case SET_SELECTED_USER:
            return {
                ...state,
                selectedUser: action.payload
            }

            case SET_ROLES:
                return {
                    ...state,
                    roles: action.payload
                }
        default:
            return state;
    }
}

export const setUser = (user) => ({
    type: SET_USER,
    payload: user
});

export const logout = () => ({
    type: LOGOUT,
});

export const setSelectedUser = (user) => ({
    type: SET_SELECTED_USER,
    payload: user
});

export const setRoles = (roles) => ({
    type: SET_ROLES,
    payload: roles
})