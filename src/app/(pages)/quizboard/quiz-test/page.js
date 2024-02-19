'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const page = () => {
    const [categoryData, setCategoryData] = useState([])
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/category', {
                method: 'GET'
            })

            const data = await response.json()
            console.log(data)
            setCategoryData(data?.categories)

        } catch (error) {
            console.log(error.message)

        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="p-5 min-h-full ">
            <div className="lg:flex justify-between pb-5">
                <div>
                    <p className="text-2xl  font-bold">Select Quiz Topic for Test</p>
                    <p className="pb-4">Featured Categories</p>
                </div>
                <div>
                    <button className="border bg-gradient-to-l from-[#FF6961] rounded-full px-5 py-3 text-white">
                        Explore All Categories
                    </button>
                </div>
            </div>
            <div className="grid lg:grid-cols-4 ">
                {categoryData?.map((quizCategory) => (
                    <div key={quizCategory?._id} className="p-3 relative">
                        <Link href={`/quizboard/quiz-test/${quizCategory._id}`}>
                            {quizCategory?.photo && (
                                <div className="cursor-pointer ">
                                    <Image
                                        className="rounded-xl "
                                        height={150}
                                        width={150}
                                        src={quizCategory?.photo}
                                        alt=""
                                    />
                                </div>
                            )}
                        </Link>
                        {/* <p className=" font-bold text-sm   cursor-pointer absolute  bottom-11 left-8">
                       {quizCategory?.name}
                     </p> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default page;