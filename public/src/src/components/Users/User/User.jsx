import React from "react";
import { Link } from "react-router-dom";

export function User({user}){
    return <div>
        <Link to={`/users/${user.id}`}><h1>{user.name}</h1></Link>
        <h3>{user.username}</h3>
        <img src={user.profileImageUrl} alt="" />
        <p>{user.posts.length === 1 ? `${user.posts.length} post.` : `${user.posts.length} posts.`}</p>
        <p>{user.likes.length === 1 ? `${user.likes.length} like.` : `${user.likes.length} likes.`}</p>
        <p>{user.dislikes.length === 1 ? `${user.dislikes.length} dislike.` : `${user.dislikes.length} dislikes.`}</p>
    </div>
}