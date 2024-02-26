'use client'

import { AuthContext } from '@/context/AuthProvider'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { AiFillDelete } from 'react-icons/ai'


const ManageServices = () => {
    const { user, categories, fetchCategoryData } = useContext(AuthContext);

    //delete service
    const handleDeleteService = async (id) => {

        try {
            const response = await fetch(`https://on-quiz.vercel.app/api/category/${id}`, {
                method: 'DELETE',
            });
            if (response.status === 200) {
                toast.success(' Successfully Deleted')
                fetchCategoryData()

            }

            // Perform any other necessary actions (e.g., update state, show a notification)


        } catch (error) {
            console.error('Error deleting service:', error.message);
            toast.error(error.message)

            // Handle errors (e.g., show an error message to the user)
        }
    }


    return (
        <div className=' h-screen'>
            <Toaster />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-20'>
                {categories?.map((category) => (
                    <div key={category?._id} >
                        <div className='group block rounded-md overflow-hidden hover:shadow-lg relative border'>
                            <div className='relative w-full h-32'>
                                <Image
                                    src={category?.photo}
                                    alt='service image'
                                    layout='fill'
                                    objectFit='cover'
                                    className='group-hover:opacity-75 transition-opacity'
                                />
                                <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
                                    <span className=' text-4xl text-pink-500 cursor-pointer'><AiFillDelete onClick={() => handleDeleteService(category?._id)} /></span>
                                </div>
                            </div>
                            <div className='p-4 bg-white flex justify-between'>
                                <h3 className='text-xl font-semibold mb-2'>{category?.name}</h3>

                            </div>
                        </div>

                    </div>

                ))}
            </div>

        </div>
    )
}

export default ManageServices