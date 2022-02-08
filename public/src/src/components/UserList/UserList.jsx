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

    return <div className="users">
        {userList.map((user, index) => (
            <li key={index}>
                <User user={user} />
            </li>
        ))}
    </div>
}