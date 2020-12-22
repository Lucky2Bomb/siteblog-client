import React from 'react';
import { API_URL } from "../../../../config";
import { Link, NavLink } from "react-router-dom";
import { formatDD_MM_YYYY, formatHH_MM } from './../../../Utils/dateFormat';
import { useDispatch } from 'react-redux';
import { deletePost } from './../../../../actions/post';
import { useSelector } from 'react-redux';

const Post = (props) => {
    const dispatch = useDispatch();
    const text = props.text.length >= 1024 ?
        <div>{props.text.substr(0, 1024)}<Link to={`/post/${props.id}`} className="post__more-details">подробнее...</Link></div> :
        <div>{props.text}
            <Link to={`/post/${props.id}`} className="post__more-details">подробнее...</Link>
        </div>;
    const date = new Date(props.dateCreated);

    return (
        <div className="post">
            {/* <h1>{props.id}</h1> */}
            <h2>{props.title}</h2>
            <div className="post__image">
                {props.image && <img src={`${API_URL}/${props.image}`} alt="" srcSet="" />}
            </div>

            <div className="post__user-date">
                <div className="post__date">{`${formatHH_MM(date.getHours(), date.getMinutes())}, ${formatDD_MM_YYYY(date.getFullYear(), date.getMonth(), date.getDate(), ".")}`}</div>
                <div className="post__user">Автор: <NavLink to={`/profile/${props.user}`}>{props.user}</NavLink> </div>
                {props.currentUserRole !== "USER" && <div className="post__delete" onClick={() => dispatch(deletePost(props.id))}>Удалить пост</div>}
            </div>
            <div className="post__text">{text}</div>
        </div>
    )
}

export default Post;