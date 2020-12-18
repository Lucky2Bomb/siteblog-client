import React from 'react';
import Comment from './Comment/Comment';

const CommentList = (props) => {
    const comments = props.comments.map(comment => <Comment data={comment}/>)
    return (
        <div>
        {comments}
        </div>
    );
}

export default CommentList;