import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './../Utils/Loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { getPost, getCommentsOnPost } from '../../actions/post';
import { API_URL } from '../../config';
import CommentList from './CommentList/CommentList';

const PostDetails = () => {
    let { id } = useParams();
    const loader = useSelector(state => state.app.loader);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPost(id));
        dispatch(getCommentsOnPost(id));
    }, []);
    const currentPost = useSelector(state => state.post.currentPost);
    const commentsOnCurrentPost = useSelector(state => state.post.commentsOnCurrentPost);
    
    if (loader) {
        return (
            <Loader />
        )
    }

    return (
        <div className="post-details-wrapper">
            <div className="post-details">
                <div className="post-details__post">
                    <h2>{currentPost.title}</h2>
                    <div className="post-details__image">
                        {currentPost.fileName && <img src={`${API_URL}/${currentPost.fileName}`} alt="" srcSet="" />}
                    </div>
                    <div>{currentPost.user}</div>
                    <div>{currentPost.dateCreated}</div>
                    <div >{currentPost.text}</div>
                </div>

                <CommentList comments={commentsOnCurrentPost} />
            </div>
        </div>
    )
}

export default PostDetails;