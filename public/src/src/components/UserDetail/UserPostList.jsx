import React from "react";
import { Post } from '../Post/Post'

export function UserPostList({ user }){
    // console.log(user);
    return <ol className="post-list">
            <h2>Posts by {user.username}:</h2>
            {user.posts.map((post, index) => (
            <li key={index}>
                <Post post={post}/>
            </li>
        ))}
            </ol>
}