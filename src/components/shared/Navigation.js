'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import logo from '../../assets/ologo-removebg-preview.png'
import { FaUserCircle } from 'react-icons/fa';


export default function Navigation() {

    const [navbar, setNavbar] = useState(false);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav
            id="home"
            className="w-full relative py-5 border-b-[1px] shadow">
            <div className="md:flex justify-between items-center md:px-[100px] px-5 ">
                <div>
                    {/* comment */}
                    <div className="flex items-center justify-between  md:block">
                        <div className='cursor-pointer'>
                            <Link href='/'>
                                <Image
                                    src={logo}
                                    width={60}
                                    height={60}
                                    alt="Logo"
                                />
                            </Link>
                        </div>
                        <div className="md:hidden">

                            {/* device controll icon */}
                            <button
                                className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <MdClose />

                                ) : (
                                    <FiMenu />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>


                    {/* nav links */}
                    <div
                        className={`flex-1  pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-4 md:space-y-0">

                            <div className='flex space-x-2'>
                                <li>
                                    <Link href="/login">Login</Link>
                                </li>

                                <li>

                                </li>

                            </div>

                            {/* verticall */}
                            <div className='text-slate-400 text-3xl hidden md:block'>|</div>


                            {/* // register aqnd login section */}

                            <li className="relative group h-full">


                                <div className="absolute top-8 duration-500 hidden shadow-lg bg-white border border-gray-300 w-[200px] px-5 py-5 space-y-3 rounded-md group-hover:block text-lg font-medium cursor-pointer">

                                    <Link href="/student-signup" className="block text-gray-700 hover:text-purple-600">
                                        For Student
                                    </Link>

                                    <Link href="/employer-signup" className="block text-gray-700 hover:text-purple-600">
                                        For Employer
                                    </Link>

                                    <Link href="/login" className="block text-gray-700 hover:text-purple-600">
                                        Login
                                    </Link>

                                </div>
                            </li>



                            {/* after user login access section PROFILE */}

                            <div className="relative h-full  transition duration-300  p-1">
                                <div onClick={toggleDropdown} className="flex items-center  cursor-pointer space-x-1">
                                    <div >
                                        <FaUserCircle />
                                    </div>

                                    <div className="group">
                                        <p className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 cursor-pointer" >

                                        </p>
                                    </div>
                                </div>

                                <ul className={`absolute ${isDropdownOpen ? 'block' : 'hidden'} shadow-md bg-white px-4 py-2 rounded-md space-y-2`}>
                                    <li className="hover:text-purple-600">
                                        <Link href="/dashboard" className="block px-2 py-1">
                                            Profile
                                        </Link>
                                    </li>

                                    <li className="hover:text-purple-600">
                                        <Link href="/dashboard/application" className="block px-2 py-1">
                                            My Applications
                                        </Link>
                                    </li>

                                    <li className="hover:text-purple-600">
                                        <Link href="/dashboard/resume" className="block px-2 py-1">
                                            Edit Resume
                                        </Link>
                                    </li>

                                    <div className="group relative w-36">
                                        <p className="cursor-pointer hover:text-purple-600 px-2 py-1" onClick={toggleDropdown}>
                                            Manage Account
                                        </p>
                                        {isDropdownOpen && (
                                            <ul className="absolute shadow-md bg-white px-3 py-2 rounded-md mt-2 space-y-2">
                                                <li className="hover:text-purple-600 transition duration-300">
                                                    <Link href="/login/change-email" className="block px-2 py-1">Change Email</Link>
                                                </li>

                                                <li className="hover:text-purple-600 transition duration-300">
                                                    <Link href="/login/update-password" className="block px-2 py-1">Change Password</Link>
                                                </li>

                                                <li className="hover:text-purple-600 transition duration-300">
                                                    <Link onClick={LogoutUser} href="/login" className="block px-2 py-1">Logout</Link>
                                                </li>
                                            </ul>
                                        )}
                                    </div>
                                </ul>
                            </div>

                        </ul>
                    </div>
                </div>
            </div>
        </nav >
    );
}
