import React from 'react';
import { API_URL } from "../../../../config";
import {Link} from "react-router-dom";

const Post = (props) => {
    const text = props.text.length >= 1024 ? 
    <div>{props.text.substr(0, 1024)}<Link to={`/post/${props.id}`}>подробнее...</Link></div> : 
    <div>{props.text}<Link to={`/post/${props.id}`}>подробнее...</Link></div>;

    return (
        <div>
            {/* <h1>{props.id}</h1> */}
            <h2>{props.title}</h2>
            <div className="post__image">
                {props.image && <img src={`${API_URL}/${props.image}`} alt="" srcSet="" />}
            </div>
            <div>{props.user}</div>
            <div>{props.dateCreated}</div>
            <div>{text}</div>
        </div>
    )
}

export default Post;