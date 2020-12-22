const SET_POSTS = "SET_POSTS";
const SET_PAGE = "SET_PAGE";
const SET_PAGE_SETTINGS = "SET_PAGE_SETTINGS";
const SET_CURRENT_POST = "SET_CURRENT_POST";
const SET_COMMENTS_ON_CURRENT_POST = "SET_COMMENTS_ON_CURRENT_POST";
const UPDATE_COMMENTS_ON_CURRENT_POST = "UPDATE_COMMENTS_ON_CURRENT_POST";

// const DELETE_CURRENT_POST = "DELETE_CURRENT_POST";
// const DELETE_COMMENTS_ON_CURRENT_POST = "DELETE_COMMENTS_ON_CURRENT_POST";

const defaultState = {
    posts: [],
    currentPage: 1,
    pages: 1,
    limit: 10,
    total: 0,
    currentPost: {},
    commentsOnCurrentPost: []
}

export default function postReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload
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

        case SET_CURRENT_POST:
            return {
                ...state,
                currentPost: action.payload
            }

        case SET_COMMENTS_ON_CURRENT_POST:
            return {
                ...state,
                commentsOnCurrentPost: action.payload
            }
            case UPDATE_COMMENTS_ON_CURRENT_POST: 
            return {
                ...state,
                commentsOnCurrentPost: {}
            }

        // case DELETE_CURRENT_POST:
        //     return {
        //         ...state,
        //         currentPost: {}
        //     }

        // case DELETE_COMMENTS_ON_CURRENT_POST:
        //     return {
        //         ...state,
        //         commentsOnCurrentPost: []
        //     }

        default:
            return state;
    }
}

export const setPosts = (posts) => ({
    type: SET_POSTS,
    payload: posts
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

export const setCurrentPost = (post) => ({
    type: SET_CURRENT_POST,
    payload: post
});

export const setCommentsOnCurrentPost = (comments) => ({
    type: SET_COMMENTS_ON_CURRENT_POST,
    payload: comments
});

export const updateCommentsOnCurrentPost = () => ({
    type: UPDATE_COMMENTS_ON_CURRENT_POST
});

// export const deleteCurrentPost = () => ({
//     type: DELETE_CURRENT_POST,
// });

// export const deleteCommentsOnCurrentPost = () => ({
//     type: DELETE_COMMENTS_ON_CURRENT_POST,
// });