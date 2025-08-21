import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='p-4 flex justify-center item-center text-white bg-green-500'>
            <div className='flex gap-10'>
                <Link to="/">Home</Link>
                <Link to="/myblog">Blog</Link>
                <Link to="/addblog">Add Blog</Link>
                <Link to="/user/login">Login</Link>
                <Link to="/user/register">Register</Link>
            </div>
        </div>
    )
}


export default Header
