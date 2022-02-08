import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserHeader } from "./UserHeader";
import { UserPostList } from "./UserPostList";
import { NavBar } from "../../Header/NavBar";

export function UserDetail(){
    const params = useParams();

    const [user, setUser] = useState();

    useEffect(
        () => {
            fetch(`http://localhost:3001/users/${params.userId}`)
            .then(response => response.json())
            .then(data => {
                console.log(data.posts);
                setUser(data);
            });
        },
        [user]
    );

    let userContent;
    
    if (user === undefined){
        userContent = <h1>Loading page..</h1>
    } else {
        userContent = <>
            <UserHeader user={user}/>
            <UserPostList user={user}/>
                    </>
    }
    return <div className="user-detail">
        {userContent}
        </div>
}