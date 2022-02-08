import React from 'react';
import { Outlet } from 'react-router-dom';
import { UserList } from '../components/Users/UserList/UserList';

export function Users(){
    return <div className="users">
        <Outlet />
        <UserList />
    </div>
}