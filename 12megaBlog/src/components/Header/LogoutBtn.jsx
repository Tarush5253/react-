import React from 'react';
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth';
import { logout } from "../../store/authSlice";

function LogoutBtn() {
    const dispatch = useDispatch();

    function logoutHandler() {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }

    return (
        <button
            className='inline-bock px-6 py-2 hover:bg-blue-100 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"'
            onClick={logoutHandler}
        >Logout</button>
    )
}

export default LogoutBtn