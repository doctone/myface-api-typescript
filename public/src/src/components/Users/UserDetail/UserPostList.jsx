import React from "react";
import { Post } from '../../Posts/Post/Post.jsx'

export function UserPostList({ user }){
    let userListDisplay;

    if (user !== undefined){
        userListDisplay = 
        <ol className="post-list">
            <h2>Posts by {user.username}:</h2>
        {user.posts.map((post, index) => (
        <li key={index}>
            <Post post={post}/>
        </li>

    ))}
    </ol>
    } else {
        userListDisplay =
        <ol className="post-list">
            <h3>Loading posts...</h3>
        </ol>
    }
    return userListDisplay
            
}