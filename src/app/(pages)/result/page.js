'use client'
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { FaMedal } from 'react-icons/fa';
import { ImSad2 } from 'react-icons/im';
import { FaCheck } from 'react-icons/fa';
import Navigation from '@/components/shared/Navigation';

const page = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const dataString = localStorage.getItem('questions');

        setData(JSON.parse(dataString));
    }, []);
    useEffect(() => {
        window.history.pushState(null, null, window.location.href);
        window.onpopstate = function () {
            window.history.go(1);
        };
    }, []);

    console.log(data)
    return (
        <div className='bg-gradient-to-r from-blue-600 min-h-[100vh] to-black'>
            <Navigation></Navigation>
            <div className="flex justify-center py-20">
                <div>
                    {data?.score >= 80 ? (
                        <div>
                            <FaMedal size={100} color="#FFAE96" className="mt-1" />
                            <p className="font-bold"> Congratulations you have passed</p>
                        </div>
                    ) : (
                        <div className='flex flex-col justify-center items-center'>
                            <ImSad2 size={100} color="#FFAE96" className="mt-1 text-center" />
                            <div className="flex  justify-center">
                                <p className="font-bold text-gray-200 ">
                                    Were Sorry You failed to Score above 80%
                                </p>
                            </div>
                        </div>
                    )}
                    <div className="pr-20 text-gray-200 text-center">You Scored {data?.score.toFixed(2)}%</div>

                    {/* //review quiz */}
                    <div className='grid lg:grid-cols-3'>

                        {data?.questions?.map((question) => (
                            <div key={question._id} className="mx-5 my-5 p-5">
                                <p className='text-gray-200'>Question: {question?.question}?</p>
                                <div className="py-3 space-y-3">
                                    <div
                                        className={`bg-blue-800 border border-[#84C5FE] py-1 px-2 flex justify-between text-gray-400 ${question.correctAnswer === 'a'
                                            ? 'bg-green-300'
                                            : question.selectAnswer === 'a'
                                                ? 'bg-red-300'
                                                : 'bg-[#F0F8FF]'
                                            }`}
                                    >
                                        {question?.a} {question.selectAnswer === 'a' && <FaCheck color="white" />}
                                    </div>
                                    <div
                                        className={`bg-blue-800 border text-gray-400 border-[#84C5FE] py-1 px-2 flex justify-between ${question.correctAnswer === 'b'
                                            ? 'bg-green-300'
                                            : question.selectAnswer === 'b'
                                                ? 'bg-red-300'
                                                : 'bg-[#F0F8FF]'
                                            }`}
                                    >
                                        {question?.b} {question.selectAnswer === 'b' && <FaCheck color="white" />}
                                    </div>
                                    <div
                                        className={`bg-blue-800 text-gray-400 border border-[#84C5FE] py-1 px-2 flex justify-between ${question.correctAnswer === 'c'
                                            ? 'bg-green-300'
                                            : question.selectAnswer === 'c'
                                                ? 'bg-red-300'
                                                : 'bg-[#F0F8FF]'
                                            }`}
                                    >
                                        {question?.c} {question.selectAnswer === 'c' && <FaCheck color="white" />}
                                    </div>
                                    <div
                                        className={`bg-blue-800 text-gray-400 border border-[#84C5FE] py-1 px-2 flex justify-between ${question.correctAnswer === 'd'
                                            ? 'bg-green-300'
                                            : question.selectAnswer === 'd'
                                                ? 'bg-red-300'
                                                : 'bg-[#F0F8FF]'
                                            }`}
                                    >
                                        {question?.d} {question.selectAnswer === 'd' && <FaCheck color="white" />}
                                    </div>
                                    <hr className="mt-20" />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default page;
