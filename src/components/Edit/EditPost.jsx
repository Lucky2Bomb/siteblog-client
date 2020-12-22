import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { createPost, getPost, editPost } from './../../actions/post';

const EditPost = (props) => {
    let { id } = useParams();
    const dispatch = useDispatch();

    const roles = useSelector(state => state.user.roles);
    const userRole = roles.includes("ADMIN") ? "ADMIN" : roles.includes("MODER") ? "MODER" : "USER";
    useEffect(() => {
        dispatch(getPost(id));
    }, []);
    const currentPost = useSelector(state => state.post.currentPost);


    const [title, setTitle] = useState(currentPost.title);
    const [text, setText] = useState(currentPost.text);

    if (userRole === "USER") {
        return <Redirect to="/" />
    }

    function sendPost() {
        dispatch(editPost(currentPost._id, title, text));
    }

    return (
        <div className="main-wrapper">
            <div className="main post">
                <div className="new-post">
                    <input className="new-post__input" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Заголовок" name="" id="" />
                    <textarea className="new-post__textarea" value={text} onChange={(e) => setText(e.target.value)} name="" placeholder="Текст поста" id=""></textarea>
                    <div className="new-post__buttons">
                        <button className="profile__button" onClick={() => sendPost()}>Отправить</button>
                        {/* <div className="file-upload">
                            <input type="file" value={file} onChange={(e) => setFile(e.target.files)} name="file" id="file" className="profile__button file-upload__input-file"/>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPost;