import React from "react";
import { Link } from "react-router-dom";

export function Footer(){
    return <div style={
        {display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center'}
    }>
        <Link to=''>Previous</Link>
        <Link to=''>Next</Link>
    </div>
}