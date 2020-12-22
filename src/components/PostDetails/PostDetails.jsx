import React, { useEffect, useState } from 'react';
import { NavLink, Redirect, useParams, Route } from 'react-router-dom';
import Loader from './../Utils/Loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { getPost, getCommentsOnPost, uploadImageToPost } from '../../actions/post';
import { API_URL } from '../../config';
import CommentList from './CommentList/CommentList';
import CommentForPublication from './CommentForPublication';
import { formatDD_MM_YYYY, formatHH_MM } from './../Utils/dateFormat';
import NewPost from './../NewPost/NewPost';
import { deleteImageToPost } from './../../actions/post';

const PostDetails = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const loader = useSelector(state => state.app.loader);
    const isAuth = useSelector(state => state.user.isAuth);
    const roles = useSelector(state => state.user.roles);
    const userRole = roles.includes("ADMIN") ? "ADMIN" : roles.includes("MODER") ? "MODER" : "USER";

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
    const date = new Date(currentPost.dateCreated);
    // <div className="post__delete" onClick={() => dispatch(deletePost(props.id))}>Удалить пост</div>
    // <NavLink to={`/profile/${currentPost.user}`}>{currentPost.user}</NavLink>
    // <div>{currentPost.dateCreated}</div>
    function onClickDeleteImage() {
        dispatch(deleteImageToPost(currentPost._id));
    }

    function uploadImage(e) {
        dispatch(uploadImageToPost(currentPost._id, e[0]));
    }
    return (
        <div className="post-details-wrapper">
            <div className="post-details">
                <div className="post">
                    <h2>{currentPost.title}</h2>
                    <div className="post-details__image">
                        {currentPost.fileName && <img src={`${API_URL}/${currentPost.fileName}`} alt="" srcSet="" />}
                    </div>
                    <div className="post__user-date">
                        <div className="post__date">{`${formatHH_MM(date.getHours(), date.getMinutes())}, ${formatDD_MM_YYYY(date.getFullYear(), date.getMonth(), date.getDate(), ".")}`}</div>
                        <div className="post__user">Автор: <NavLink to={`/profile/${currentPost.user}`}>{currentPost.user}</NavLink> </div>
                        {userRole !== "USER" && <>
                            <NavLink className="post__delete" to={`/edit-post/${currentPost._id}`}>редактировать пост</NavLink>
                            {currentPost.fileName && <div className="post__delete" onClick={() => onClickDeleteImage()}>Удалить картинку</div>}
                            {!currentPost.fileName &&
                                <>
                                    <input type="file" name="" id="upload__image" accept="image/jpeg" onChange={e => uploadImage(e.target.files)} />
                                    <label for="upload__image" className="post__delete">Загрузить изображение</label>
                                </>}
                        </>}

                    </div>
                    <div className="post__text">{currentPost.text}</div>
                </div>

                <CommentList comments={commentsOnCurrentPost} isModer={userRole === "MODER"} isAdmin={userRole === "ADMIN"} />
                {isAuth && <CommentForPublication postId={id} />}
            </div>
        </div>
    )
}

export default PostDetails;