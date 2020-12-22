import React from 'react';
import { useState } from 'react';
import { sendCommentToPost } from '../../actions/post';
import { useDispatch } from 'react-redux';
import "../../less/style.scss";

const CommentForPublication = (props) => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    function sendComment() {
        dispatch(sendCommentToPost(props.postId, text));
        setText("");
    };
    return (
        <div className="post comment-text">
            <textarea className="comment-text__textarea" placeholder="Введите текст комментария" value={text} onChange={(e) => setText(e.target.value)}></textarea>
            <button className="profile__button" onClick={() => sendComment()}>Отправить</button>
        </div>
    )
}

export default CommentForPublication;