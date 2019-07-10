import React from 'react';
import Home from './components/Home';
import UsersList from './components/UsersList';

export default [
    {
        //Home route 
        path:'/',
        components: Home,
        exact:true
    },
    {
        path:'users',
        component: UsersList
    }
];