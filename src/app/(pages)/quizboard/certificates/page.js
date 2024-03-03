'use client'
import { AuthContext } from '@/context/AuthProvider';
import React, { useContext } from 'react';


const page = () => {
    const { user, information } = useContext(AuthContext);
    // filter how many quiz test user took
    const exactUserInformation = information
        ?.filter((info) => info?.email === user?.email)
        .filter((data) => data.score >= 80);

    return (

        <div className=" rounded  text-gray-200">
            <div className="flex justify-between px-5  my-5">
                <p className="font-bold text-xl">List of Certifications</p>
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
                    <svg
                        className="absolute fill-current h-4 hidden left-0 ml-4 pointer-events-none text-gray-500 w-4 group-hover:text-gray-400 sm:block"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                    </svg>
                    <input
                        type="text"
                        className="border border-orange-300 bg-gray-200 block leading-normal pl-10 py-1.5 pr-4 ring-opacity-90 rounded-2xl text-gray-400 w-full focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-500"
                        placeholder="Search"
                    />
                </div>
            </div>

            <div>
                {exactUserInformation.map((info) => (
                    <div
                        className="border rounded border-[#FFAE96] py-10 mx-5 my-5"
                        key={info._id}
                    >
                        <div className="px-20">
                            <p className="text-lg font-bold">{info?.quizCategoryName}</p>
                            <p className="text-orange-600">
                                Scored {info?.score}% At {info?.attempts} Attempt Issued on
                                <span className='ps-2'>{info?.updatedAt && new Date(info.updatedAt).toLocaleString()}</span>
                            </p>
                            <div className="flex justify-end">
                                <div>
                                    <button className="bg-green-500 rounded-full py-1 px-7 text-white">
                                        Share
                                    </button>
                                    <button className="bg-orange-400 text-white  rounded-full py-1 px-4 mx-2">
                                        Download
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default page;
