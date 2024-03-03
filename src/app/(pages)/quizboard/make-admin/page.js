'use client'
import { AuthContext } from '@/context/AuthProvider';
import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const page = () => {
    const [email, setEmail] = useState('')
    const { user, fetchUser } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`https://on-quiz.vercel.app/api/user?email=${email}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    role: 'Admin'
                }),
            });

            if (response.ok) {

                fetchUser()
                toast('Updated successfully')

            } else {
                toast.error('could not update');
            }
        } catch (error) {
            console.error('created failed:', error.message);
            toast.error(error.message);
        }

    }
    return (
        <div className='flex justify-center items-center text-gray-200'>
            <div>
                <Toaster />
                <form onSubmit={handleSubmit} className="space-y-5 ">
                    <p className="text-sm">Provide User Email to make Admin</p>
                    <input
                        className="border px-2 py-2 lg:w-[400px] w-[300px] rounded text-black"
                        type="text"
                        required
                        placeholder="User Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className=" flex justify-end">
                        <button type='submit' className="  bg-gradient-to-l from-[#FF6961] py-2 px-10 rounded-full">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default page;