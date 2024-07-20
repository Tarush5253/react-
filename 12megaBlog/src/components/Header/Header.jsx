import React, { useState } from "react";
import { Logo, LogoutBtn, Container } from '../index';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from "react-router-dom";


function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navItems = [
        {
            name: "Home",
            slug: '/',
            active: authStatus,
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]

    return (
        <header className='py-3 shadow bg-gray-500 sticky top-0 z-50'>
            <Container>
                <nav className="lg:flex lg:justify-between">
                    <div className="flex items-center justify-between">
                        <div className='mr-4'>
                            <Link to="/">
                                <Logo width="70px" />
                            </Link>
                        </div>
                        <div className="lg:hidden">
                            <button onClick={toggleMenu} className="text-white focus:outline-none">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className={`transition-height duration-500 ease-in-out lg:flex lg:items-center overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'
                        } lg:max-h-none`}>
                        <ul className="flex flex-col lg:flex-row lg:space-x-4 mt-4 lg:mt-0">
                            {navItems.map((item) =>
                                item.active ? <li key={item.name}>
                                    <button
                                        className='inline-bock px-6 py-2 hover:bg-blue-100 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"'
                                        onClick={() => navigate(item.slug)}>
                                        {item.name}
                                    </button>
                                </li> : null
                            )}
                            {authStatus && (
                                <li>
                                    <LogoutBtn />
                                </li>
                            )}
                        </ul>
                    </div>
                </nav>
            </Container>
        </header>
    )
}

export default Header