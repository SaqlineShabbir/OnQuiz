'use client'
import Link from 'next/link';

import logo from '../../assets/ologo-removebg-preview.png'
import { IoMdHome } from "react-icons/io";
import Image from 'next/image';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthProvider';

const style = {
    mobilePosition: {
        left: 'left-0 ',
        right: 'left-0 lg:left-0',
    },
    container: `pb-32 lg:pb-12  min-h-screen`,
    close: `duration-700 ease-out hidden transition-all lg:w-[250px]`,
    open: `absolute duration-500 ease-in transition-all w-6/12 z-40 sm:w-[200px] lg:w-[225px]`,
    default: `h-screen text-white top-0 lg:absolute bg-white-900 lg:block lg:z-40`,
};

export default function SideNavigation({ setOpen, open }) {
    const { user, logout } = useContext(AuthContext);

    return (
        <aside className={`${style.default} } 
        ${open ? style.open : style.close}  lg:${() => setOpen(false)}`}
        >
            <div className={`${style.container} ${open == true && 'bg-blue-600'} `}>
                {/* <SidenavHeader /> */}
                <div className="flex  mb-6 pb-6 pt-3 ">
                    <Link href="/">
                        <div className="flex  justify-between pl-3 cursor-pointer pt-1">
                            <Image src={logo} width={30} height={30} />
                            <p className="text-2xl text-orange-500">ONQUIZ</p>
                        </div>
                    </Link>
                    {open == true && (
                        <button
                            type="button"
                            aria-expanded="false"
                            aria-label="Toggle sidenav"
                            onClick={() => setOpen(false)}
                            className="text-4xl text-white ps-14 focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                                />
                            </svg>
                        </button>
                    )}
                </div>

                {/* <SidenavItems />  */}
                <div className="overflow-y-auto text-gray-200  h-full">
                    <Link href="/quizboard">
                        <div className="flex  hover:bg-orange-500 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 rounded-full  my-4 mx-2 py-3 px-2 lg:w-[215px] space-x-2 cursor-pointer">
                            <span>
                                <IoMdHome />
                            </span>
                            <p>Dashboard</p>
                        </div>
                    </Link>

                    <Link href="/quizboard/quiz-test">
                        <div
                            className={`flex  hover:bg-orange-500 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 rounded-full  my-4 mx-2 py-3 px-2 lg:w-[215px] space-x-2 cursor-pointer`}
                        >
                            <span>
                                <IoMdHome />
                            </span>
                            <p>Give A Quiz Test</p>
                        </div>
                    </Link>


                    <Link href="/quizboard/score-grade">
                        <div
                            className={` flex active:bg-orange-500 hover:bg-orange-500 rounded-full  my-4 mx-2 py-3 px-2 lg:w-[215px] space-x-2  cursor-pointer`}
                        >
                            <span>
                                <IoMdHome />
                            </span>
                            <p>Score & Grade</p>
                        </div>
                    </Link>


                    <Link href="/quizboard/certificates">
                        <div
                            className={` flex active:bg-orange-500 hover:bg-orange-500 rounded-full my-4 mx-2 py-3 px-2 lg:w-[215px] space-x-2  cursor-pointer`}
                        >
                            <span>
                                <IoMdHome />
                            </span>
                            <p>Download Certificates</p>
                        </div>
                    </Link>


                    <Link href="/quizboard/update-profile">
                        <div
                            className={` flex active:bg-orange-500 hover:bg-orange-500 rounded-full  my-4 mx-2 py-3 px-2 lg:w-[215px] space-x-2  cursor-pointer`}
                        >
                            <span>
                                <IoMdHome />
                            </span>
                            <p>Update Your Profile</p>
                        </div>
                    </Link>
                    <Link href="/quizboard/review">
                        <div
                            className={` flex active:bg-orange-500 hover:bg-orange-500 rounded-full  my-4 mx-2 py-3 px-2 lg:w-[215px] space-x-2  cursor-pointer`}
                        >
                            <span>
                                <IoMdHome />
                            </span>
                            <p>Give Us A Review</p>
                        </div>
                    </Link>





                    {user?.role === 'Admin' && <Link href="/quizboard/add-category">
                        <div
                            className={` flex active:bg-orange-500 hover:bg-orange-500 rounded-full  my-4 mx-2 py-3 px-2 lg:w-[215px] space-x-2 cursor-pointer`}
                        >
                            <span>
                                <IoMdHome />
                            </span>
                            <p>Add Category</p>
                        </div>
                    </Link>}

                    {user?.role === 'Admin' && <Link href="/quizboard/manage-category">
                        <div
                            className={` flex active:bg-orange-500 hover:bg-orange-500 rounded-full  my-4 mx-2 py-3 px-2 lg:w-[215px] space-x-2 cursor-pointer`}
                        >
                            <span>
                                <IoMdHome />
                            </span>
                            <p>Manage Category</p>
                        </div>
                    </Link>}

                    {user?.role === 'Admin' && <Link href="/quizboard/add-question">
                        <div
                            className={` flex active:bg-orange-500 hover:bg-orange-500 rounded-full my-4 mx-2 py-3 px-2 lg:w-[215px] space-x-2 cursor-pointer`}
                        >
                            <span>
                                <IoMdHome />
                            </span>
                            <p>Add Question</p>
                        </div>
                    </Link>}

                    {user?.role === 'Admin' && <Link href="/dashboard/manage-students">
                        <div
                            className={` flex active:bg-orange-500 hover:bg-orange-500 rounded-full  my-4 mx-2 py-3 px-2 lg:w-[215px] space-x-2 cursor-pointer`}
                        >
                            <span>
                                <IoMdHome />
                            </span>
                            <p>Manage Students</p>
                        </div>
                    </Link>}

                    {user?.role === 'Admin' && <Link href="/quizboard/make-admin">
                        <div
                            className={` flex active:bg-orange-500 hover:bg-orange-500 rounded-full my-4 mx-2 py-3 px-2 lg:w-[215px] space-x-2 cursor-pointer`}
                        >
                            <span>
                                <IoMdHome />
                            </span>
                            <p>Make Admin</p>
                        </div>
                    </Link>}
                    <div className="mt-5">
                        <button
                            className="border rounded-full px-7 py-2 ml-3 flex  absolute bottom-5"
                            onClick={logout}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                                />
                            </svg>
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
}
