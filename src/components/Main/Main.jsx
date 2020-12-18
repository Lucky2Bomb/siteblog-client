import React, { useEffect } from 'react';
import { getPosts } from './../../actions/post';
import { useDispatch, useSelector } from 'react-redux';
import PostList from './PostList/PostList';
import PageList from './PageList/PageList';

const Main = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.post.currentPage);
    useEffect(() => {
        dispatch(getPosts(currentPage));
    }, [currentPage]);

    return (
        <div className="main-wrapper">
            <div className="main">
                
                <PostList />
                <PageList />
            </div>
        </div>
    )
}

export default Main;