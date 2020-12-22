import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createPost } from './../../actions/post';

const NewPost = (props) => {
    const dispatch = useDispatch();
    const isEditPostId = typeof props.postId === "undefined";
    const isEditPostText = typeof props.title === "undefined";
    const isEditPostTitle = typeof props.text === "undefined";

    const roles = useSelector(state => state.user.roles);
    const userRole = roles.includes("ADMIN") ? "ADMIN" : roles.includes("MODER") ? "MODER" : "USER";

    const [title, setTitle] = useState(isEditPostText ? "" : props.title);
    const [text, setText] = useState(isEditPostTitle ? "" : props.text);

    if (userRole === "USER") {
        return <Redirect to="/" />
    }

    function sendPost() {
        dispatch(createPost(title, text));
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

export default NewPost;