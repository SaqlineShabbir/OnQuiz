'use client'
import React, { useContext, useEffect, useState } from 'react';


import { AuthContext } from '@/context/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const page = () => {
    const { user, fetchUser } = useContext(AuthContext);
    const [name, setName] = useState(user?.fullname)


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`https://on-quiz.vercel.app/api/user/${user?._id}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    fullname: name
                }),
            });

            if (response.ok) {

                fetchUser()
                toast('Updated successfully')

            }
        } catch (error) {
            console.error('created failed:', error.message);
            toast.error(error.message);
        }

    }


    return (

        <div className=" flex justify-center items-center text-gray-200">

            <div className="px-7 py-4">
                <Toaster />
                <h1 className="font-bold">My Profile</h1>
                <div className="flex  justify-between pt-5 ">
                    {/* <Image src={img} height={100} width={100} alt="Profile" /> */}

                    <form onSubmit={handleSubmit} className="space-y-5 ">
                        <div>
                            <p className="text-sm">Full Name</p>
                            <input
                                className="border px-2 py-2 lg:w-[400px] w-[300px] rounded bg-pink-100"
                                type="text"
                                placeholder={user?.fullname}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <p className="text-sm">
                                Email Address (Email Can’t Be Changed)
                            </p>
                            <input
                                className="border px-2 py-2  lg:w-[400px] w-[300px] rounded bg-pink-100"
                                type="text"
                                placeholder={user?.email}
                                disabled
                            />
                        </div>
                        <div>
                            <p className="text-sm">Phone</p>
                            <input
                                className="border px-2 py-2 w-full lg:w-[400px] rounded bg-pink-100"
                                type="text"
                                placeholder={user?.phone}
                                onChange={(e) => MdSettingsPhone(e.target.value)}
                            />
                        </div>
                        <div className=" flex justify-end">
                            <button className="  bg-gradient-to-l from-[#FF6961] py-2 px-10 rounded-full">
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default page;


