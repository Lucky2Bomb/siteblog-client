import React, { useEffect } from 'react';
import { getPosts } from './../../actions/post';
import { useDispatch, useSelector } from 'react-redux';
import PostList from './PostList/PostList';
import PageList from './PageList/PageList';
import { setCurrentPage } from './../../reducers/postReducer';

const Main = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.post.currentPage);
    const roles = useSelector(state => state.user.roles);
    const userRole = roles.includes("ADMIN") ? "ADMIN" : roles.includes("MODER") ? "MODER" : "USER";
    useEffect(() => {
        dispatch(getPosts(currentPage));
    }, [currentPage]);

    const pages = useSelector(state => state.post.pages);

    return (
        <div className="main-wrapper">
            <div className="main">

                <PostList userRole={userRole} />
                <PageList pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
        </div>
    )
}

export default Main;