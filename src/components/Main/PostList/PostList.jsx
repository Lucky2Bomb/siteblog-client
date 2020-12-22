import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';

const PostList = ({userRole}) => {
    const posts = useSelector(state => state.post.posts).map(post =>
        <Post
            key={post._id}
            id={post._id}
            title={post.title}
            text={post.text}
            user={post.user}
            currentUserRole={userRole}
            dateCreated={post.dateCreated}
            image={post.fileName}
        />);
    return (
        <div>
            {posts}
        </div>
    )
}

export default PostList;