const SET_USERS = "SET_USERS";
const SET_PAGE = "SET_PAGE";
const SET_PAGE_SETTINGS = "SET_PAGE_SETTINGS";

const SET_UNIVERSITY_POSITIONS = "SET_UNIVERSITY_POSITIONS";
const SET_ROLE_LIST = "SET_ROLE_LIST";

const defaultState = {
    users: [],
    currentPage: 1,
    pages: 1,
    limit: 5,
    total: 0,
    roleList: [],
    universityPositions: [],
    universityList: []
}

export default function usersReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case SET_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_PAGE_SETTINGS:
            return {
                ...state,
                currentPage: action.currentPage,
                pages: action.pages,
                limit: action.limit,
                total: action.total
            }

        case SET_UNIVERSITY_POSITIONS:
            return {
                ...state,
                universityPositions: action.payload
            }

        case SET_ROLE_LIST:
            return {
                ...state,
                roleList: action.payload
            }
        default:
            return state;
    }
}

export const setUsers = (users) => ({
    type: SET_USERS,
    payload: users
});

export const setCurrentPage = (currentPage) => ({
    type: SET_PAGE,
    currentPage
});

export const setPageSettings = (currentPage, pages, limit, total) => ({
    type: SET_PAGE_SETTINGS,
    currentPage,
    pages,
    limit,
    total
});

export const setUniversityPositions = (universityPositions) => ({
    type: SET_UNIVERSITY_POSITIONS,
    payload: universityPositions
});

export const setRoleList = (roleList) => ({
    type: SET_ROLE_LIST,
    payload: roleList
});