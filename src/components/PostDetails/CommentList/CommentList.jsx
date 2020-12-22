import React from 'react';
import Comment from './Comment/Comment';

const CommentList = (props) => {
    //isModerOrAdmin
    const comments = props.comments.map(comment => <Comment data={comment} isDelete={props.isModer || props.isAdmin}/>)
    return (
        <div>
        {comments}
        </div>
    );
}

export default CommentList;