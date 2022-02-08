import React, { useState, useEffect } from "react";
import { UserHeader } from "./UserHeader";
import { UserPostList } from "./UserPostList";

export function UserDetail({userId}){
    const [user, setUser] = useState();

    useEffect(
        () => {
            fetch(`http://localhost:3001/users/${userId}`)
            .then(response => response.json())
            .then(data => {
                console.log(data.posts);
                setUser(data);
            });
        },
        [userId]
    );
    let userContent;
    
    if (user === undefined){
        userContent = <h1>Loading page..</h1>
    } else {
        userContent = <div className="user">
            <UserHeader user={user}/>
            <UserPostList user={user}/>
                    </div>
    }
    return userContent
}