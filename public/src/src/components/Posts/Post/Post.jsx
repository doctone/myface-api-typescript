import React from 'react';

export function Post({post}){
    return <div>
        <h3>{post.message}</h3>
        <img src={post.imageUrl} alt="" />
    </div>
}