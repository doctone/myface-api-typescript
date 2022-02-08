import React from "react";
import { Link } from "react-router-dom";

export function NavBar(){
    return <nav>
        <ul style={
            {display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'}
        }>
        <h3>MyFace</h3>
        <Link to='/posts'>Posts</Link>
        <Link to='/users'>Users</Link>
        </ul>
    </nav>
}