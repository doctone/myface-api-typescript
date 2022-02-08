import React from "react";

export function UserPostList({ user }){
    // console.log(user);
    return <ol className="post-list">
            <h2>Posts by {user.username}:</h2>
            {user.posts.map((post, index) => (
            <li key={index}>
                <h3>{post.message}</h3>
                <img src={post.imageUrl} alt="" />
            </li>
        ))}
            </ol>
}