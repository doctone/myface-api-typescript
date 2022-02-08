import React, { useState, useEffect } from "react";
import { UserHeader } from "./UserHeader";
import { UserPostList } from "./UserPostList";

export function UserDetail(){
    const [user, setUser] = useState({});

    useEffect(
        () => {
            fetch(`http://localhost:3001/users/1`)
            .then(response => response.json())
            .then(data => {
                // console.log(data.posts);
                setUser(data);
            });
        },
        []
    );
    console.log(user.posts);

    return <div className="user">
            <UserHeader user={user}/>
            <UserPostList user={user}/>
            </div>
}

