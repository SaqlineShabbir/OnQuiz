'use client'

import { AuthContext } from '@/context/AuthProvider';
import React, { useContext, useState } from 'react';
import { IoCloudUploadOutline } from "react-icons/io5";
const page = () => {
    const [name, setName] = useState('')
    const [photo, setPhoto] = useState('')
    const { user, fetchCategoryData } = useContext(AuthContext);

    const data = new FormData()
    data.append('name', name)
    data.append('photo', photo)
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('https://on-quiz.vercel.app/api/category', {
                method: 'POST',
                body: data,
            });

            if (response.ok) {

                fetchCategoryData()

            }
        } catch (error) {
            console.error('created failed:', error.message);
            toast.error(error.message);
        }

    }
    return (
        <div className="flex justify-center  text-gray-200">
            <div className="mt-20">

                <form
                    className="mx-10 border px-10 py-10 mt-20"
                    onSubmit={handleSubmit}
                >
                    <label className='text-lg ' >Category Name</label><br />
                    <input
                        className="p-3  border"
                        placeholder="Enter Category Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <label className='text-lg ' >Image</label>
                    <div className='flex space-x-2'>
                        <label className="flex justify-center items-center px-4 py-2 bg-pink-100 text-orange-500 rounded-md cursor-pointer border-2 border-orange-300 w-full">
                            <IoCloudUploadOutline className="w-8 h-8 mr-4" />
                            Upload File
                            <input
                                name='photo'
                                type="file"
                                className="hidden"
                                onChange={(e) => setPhoto(e.target.files[0])}
                            />
                        </label>


                    </div>

                    <br />
                    <input
                        className="mt-3 w-full py-4 px-16 bg-orange-400 btn rounded"
                        type="submit"
                    />
                </form>
            </div>
        </div>
    );
};

export default page;