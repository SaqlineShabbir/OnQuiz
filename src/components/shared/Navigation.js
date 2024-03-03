'use client'

import { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import logo from '../../assets/ologo-removebg-preview.png'
import { AuthContext } from '@/context/AuthProvider';


export default function Navigation() {
    const { user, logout } = useContext(AuthContext);

    const [navbar, setNavbar] = useState(false);

    return (
        <nav
            className="w-full  py-5 border-b-[1px] border-b-gray-600 shadow  bg-gradient-to-r from-blue-600 to-black sticky top-0 z-10">
            <div className="md:flex justify-between items-center md:px-[100px] px-5 ">
                <div>
                    {/* comment */}
                    <div className="flex items-center justify-between  md:block">
                        <div className='cursor-pointer'>
                            <Link href='/'>
                                <Image
                                    src={logo}
                                    width={40}
                                    height={40}
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

                            <div className='lg:flex space-x-4 text-gray-200'>
                                <Link className='cursor-pointer ' href="/">Home</Link>
                                <Link className='cursor-pointer ' href="/quizboard">Quizboard</Link>
                                {!user && <li>
                                    <Link className='cursor-pointer ' href="/login">Login</Link>
                                </li>}
                                {user && <li>
                                    <p className='cursor-pointer' onClick={() => logout()}>Logout</p>
                                </li>}
                            </div>

                            {/* verticall */}
                            <div className='text-slate-400 text-3xl hidden md:block'>|</div>
                            {/* after user login access section PROFILE */}


                            <div className="flex items-center  cursor-pointer space-x-1">
                                {user && <p className='font-bold text-2xl border border-white rounded-full px-3 text-gray-200'>
                                    {user.fullname.slice(0, 1)}
                                </p>}


                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </nav >
    );
}
