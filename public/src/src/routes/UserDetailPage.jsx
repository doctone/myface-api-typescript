import React from 'react';
import { UserDetail } from '../components/Users/UserDetail/UserDetail';
import { useParams } from "react-router-dom";

export function UserDetailPage(){
    const params = useParams();

    return <div className="users">
        <UserDetail userId={params.userId}/>
    </div>
}