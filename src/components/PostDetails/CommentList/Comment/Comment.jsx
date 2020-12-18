import React from 'react';

const Comment = (props) => {
    return (
        <div className="comment">
            <div>{props.data.author}</div>
            <div>{props.data.dateCreated}</div>
            <div>{props.data.text}</div>
        </div>
    )
}

export default Comment;