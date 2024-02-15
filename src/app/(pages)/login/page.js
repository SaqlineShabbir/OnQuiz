'use client'
import Link from 'next/link';
import { useState } from 'react';

const page = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    return (
        <div className="">
            <div className="lg:flex w-[100%] justify-center items-center">
                <div className=" lg:w-[50%] space-y-5 px-10">
                    <p className="">
                        Those people who develop the ability to continuously acquire new
                        and better forms of knowledge that they can apply to their work
                        and to their lives will be the movers and shakers in our society
                        for the indefinite future
                    </p>
                    <p>Brian Tracy</p>
                </div>
                <div className="lg:px-20 px-3 lg:w-[50%]">
                    <div className="flex flex-col justify-center items-center gap-10 mt-10">
                        <p className="flex  items-center lg:text-4xl text-2xl font-bold">
                            Log In
                        </p>

                        <form className="">
                            <div className="space-y-5 flex flex-col justify-center  items-center">
                                <input
                                    type="email"
                                    className="lg:w-[400px] border w-[350px]  py-5 px-5   text-gray-900 text-sm rounded-full  "
                                    placeholder="x@gmail.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <input
                                    type="password"
                                    className="lg:w-[400px] border w-[350px]  py-5 px-5   text-gray-900 text-sm rounded-full  "
                                    name="password"
                                    minlength="8"
                                    required
                                    placeholder='password' />

                                <p className="text-red-500">{error}</p>
                                <button
                                    type="submit"
                                    className="bg-red-400 border py-5 px-10 w-[350px] lg:w-[400px] rounded-full block "
                                >
                                    Sign Up
                                </button>
                                <div className="flex">
                                    <p>Already have an account? </p>
                                    <div className="text-blue-600 pl-3  px-5">
                                        <Link href="/signup">Sign Up</Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;