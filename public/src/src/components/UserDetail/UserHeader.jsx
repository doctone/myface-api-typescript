import React from "react";

export function UserHeader({user}) {
    return <div className="header">
        <div className="cover-image">
            <img src={user.coverImageUrl} alt="" />
        </div>
        <h1>{user.name}</h1>
        <img src={user.profileImageUrl} alt="" />
        <h3>{user.username}</h3>
        <p>{user.email}</p>
    </div>
}