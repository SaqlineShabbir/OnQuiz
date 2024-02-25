'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const page = ({ params }) => {
    const [categoryData, setCategoryData] = useState({})

    const fetchData = async () => {
        try {
            const response = await fetch(`https://on-quiz.vercel.app/api/category/${params.id}`, {
                method: 'GET'
            })

            const data = await response.json()

            setCategoryData(data?.categorie)

        } catch (error) {
            console.log(error.message)

        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className=" h-100% p-3 lg:p-5">
            <div className="lg:flex ">
                <Image
                    className="rounded "
                    height={150}
                    width={202}
                    src={categoryData?.photo}
                    alt=""
                />
                <div className="ml-5 pt-5">
                    <p className="text-3xl">{categoryData?.name} Certification test</p>
                    <p>Read the following instructions carefully</p>
                    {/* <p className="text-[#F24E1E]">0 People Participated in this test</p> */}
                </div>
            </div>
            {/* //cards */}
            <div className="lg:flex space-y-5 lg:space-y-0 mt-10">
                <div className="bg-[#FFF0EF] p-5 rounded-xl lg:w-[200px]">
                    <p className="font-bold">Total Questions</p>
                    <p className="text-2xl text-[#FF6A64]">
                        {categoryData?.quizs?.length}
                    </p>
                </div>
                <div className="bg-[#FFF0EF] p-5 rounded-xl lg:w-[200px] lg:mx-5">
                    <p className="font-bold">Time Per Question</p>
                    <p className="text-2xl  text-[#FF6A64]">30 sec</p>
                </div>
                <div className="bg-[#FFF0EF] p-5 rounded-xl lg:w-[200px]">
                    <p className="font-bold">Marks Per Question</p>
                    <p className="text-2xl text-[#FF6A64]">5 Marks</p>
                </div>
            </div>

            {/* instructions */}
            <div className="lg:flex justify-between mt-12">
                <div className="lg:w-[60%]">

                    <p className="text-xl font-bold">Other Instructions</p>
                    <p>
                        Timing - You need to complete each of your attempts in one
                        sitting, as you are allotted 30 minutes to each attempt.
                        <br />
                        <br /> Answers - You may review your answer-choices and compare
                        them to the correct answers after your final attempt.
                        <br />
                        <br /> To start, click the Start button. When finished, click the
                        Submit button.
                    </p>
                    <br />
                    <p className="text-red-400">
                        Note: You have to get at least 80% marks to achieve a certifcate
                        of completion.
                    </p>
                    <br />
                    <Link href={`/questions/${params?.id}`}>
                        <div className="pb-10 lg:pb-0">
                            <button disabled={!categoryData?.quizs?.length} className="border rounded-full py-2 px-10 bg-gradient-to-l from-[#FF6961]  ">
                                Start quiz
                            </button>
                        </div>
                    </Link>
                </div>
                {/* //scoring */}
                <div className="bg-[#FFF0EF] rounded-lg lg:w-[25%]  lg:flex justify-center lg:py-3 ">
                    <div>
                        <p className="font-bold">Our Scoring System</p>
                        <p className="bg-[#FFD8D6] p-2 rounded-xl mt-2">Below 80% - F</p>
                        <p className="bg-[#FFD8D6] p-2 rounded-xl mt-2">Above 80% - B+</p>
                        <p className="bg-[#FFD8D6] p-2 rounded-xl mt-2">Above 90% - A</p>
                        <p className="bg-[#FFD8D6] p-2 rounded-xl mt-2">100% - A+</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;