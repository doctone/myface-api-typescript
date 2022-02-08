import React, { useEffect, useState } from "react";
import { User } from "../User/User";


export function UserList(){
    const [userList, setUserList] = useState([]);

    useEffect(
        () => {
            fetch('http://localhost:3001/users')
            .then(response => response.json())
            .then(data => setUserList(data.results));
        },
        []
    );
    let userListContent;

    if (userList){
        userListContent = <>
          {userList.map((user, index) => (
            <li key={index}>
                <User user={user} />
            </li>
        ))}
        </>
    } else {
        userListContent = <>
        <h2>Loading page...</h2></>
    }
    return <div className="users">
        {userListContent}
    </div>
}