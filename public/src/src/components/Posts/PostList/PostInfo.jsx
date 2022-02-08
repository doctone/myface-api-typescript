import React from "react";

export function PostInfo({postInfo}){
    return <div className="posted-by">
        <p>posted on {postInfo.createdAt}</p>
        <h3>by {postInfo.postedBy.name}</h3>
        <p> AKA {postInfo.postedBy.username}</p>
        <p>Contact: {postInfo.postedBy.email}</p>
        <img src={postInfo.postedBy.profileImageUrl} alt="" />
        <p>{postInfo.likedBy.length === 1 ? `${postInfo.likedBy.length} person likes this.` : `${postInfo.likedBy.length} people like this.`}</p>
        <p>{postInfo.dislikedBy.length === 1 ? `${postInfo.dislikedBy.length} person dislikes this.` : `${postInfo.dislikedBy.length} people dislike this.`}</p>   
            </div>
}