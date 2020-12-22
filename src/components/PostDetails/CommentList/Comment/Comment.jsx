import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteCommentToPost } from './../../../../actions/post';
import { formatDD_MM_YYYY, formatHH_MM } from './../../../Utils/dateFormat';

const Comment = (props) => {
    const dispatch = useDispatch();
    function deleteComment() {
        dispatch(deleteCommentToPost(props.data._id, props.data.post));
    }
    const date = new Date(props.data.dateCreated);
    return (
        <div className="post comment">

            <div className="post__user-date">
                <div className="post__user">Автор: <NavLink to={`/profile/${props.data.author}`}>{props.data.author}</NavLink></div>
                <div className="post__date">{`${formatHH_MM(date.getHours(), date.getMinutes())}, ${formatDD_MM_YYYY(date.getFullYear(), date.getMonth(), date.getDate(), ".")}`}</div>
                <div className="comment__delete" onClick={() => deleteComment()}>{props.isDelete ? "удалить комментарий" : ""}</div>
            </div>
            <div>{props.data.text}</div>
        </div>
    )
}

export default Comment;