'use client'

import { AuthContext } from "@/context/AuthProvider";
import { useContext } from "react";

export default function TopBoard({ setOpen }) {
    const { user, logout } = useContext(AuthContext);

    return (
        <header className="h-20 items-center sticky top-0 z-10 lg:ml-[270px] bg-white">
            <div className="flex flex-center flex-col h-full justify-center mx-auto relative px-3  z-10">
                <div className="flex items-center pl-1 relative w-full sm:ml-0 sm:pr-2 lg:max-w-68">
                    <div className="flex group h-full items-center relative w-12">
                        <button
                            type="button"
                            aria-expanded="false"
                            aria-label="Toggle sidenav"
                            onClick={() => setOpen(true)}
                            className="text-4xl focus:outline-none sm:hidden"
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
                    </div>
                    <div className="container flex left-0 relative w-3/4">
                        <div className="group hidden items-center ml-1 relative w-full md:flex lg:w-72">
                            <div className="absolute  cursor-pointer flex items-center justify-center h-10 p-3 pr-2 text-gray-500 text-sm uppercase w-auto sm:hidden">

                                <svg
                                    fill="none"
                                    className="h-5 relative w-5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>


                        </div>
                    </div>
                    <div className="flex items-center justify-end ml-5 p-1 relative w-full sm:mr-0 sm:right-auto">

                        <div className="flex items-center  cursor-pointer space-x-1  px-5">
                            {user && <p className='font-bold text-2xl border border-orange-600 rounded-full px-3 py-1'>
                                {user.fullname.slice(0, 1)}
                            </p>}


                        </div>
                        <a href="#" className="block pr-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </a>
                        <p className="block pr-5 relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                />
                            </svg>
                        </p>

                        {/* <div onClick={handleLogOut} className="flex cursor-pointer">
              {' '}
              <Image
                src={img}
                width={40}
                height={40}
                className="rounded-full"
                alt="img"
              />
              <p className="pt-2 ml-1">{user?.displayName}</p>
            </div> */}
                    </div>
                </div>
            </div>
        </header>
    );
}
