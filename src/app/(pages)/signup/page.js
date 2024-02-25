'use client'
import Navigation from '@/components/shared/Navigation';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const page = () => {
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();


    //form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        console.log('hello')
        try {
            if (password !== ConfirmPassword) {
                setError('Password does not match');
            } else {
                console.log('password matched')
                const response = await fetch('http://localhost:3000/api/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ fullname, email, password }),
                });
                console.log(response)
                if (response.ok) {

                    router.push('/');


                } else {
                    const errorData = await response.json();
                    console.log('Signup failed:', errorData);


                }

            }

        } catch (error) {
            console.error('Signup failed:', error.message);
            toast.error('Signup failed');
        }
    };


    return (
        <div className="">
            <Navigation></Navigation>
            <div className="lg:flex w-[100%]">
                <div className=" lg:w-[50%] flex flex-col justify-center items-center px-20 lg:py-0 py-10 ">
                    <div className=" ">
                        <div className="space-y-5">
                            <p className="">
                                Those people who develop the ability to continuously acquire new
                                and better forms of knowledge that they can apply to their work
                                and to their lives will be the movers and shakers in our society
                                for the indefinite future
                            </p>
                            <p>Brian Tracy</p>
                        </div>
                    </div>
                </div>
                <div className="lg:px-20 px-3 lg:w-[50%] ">
                    {/* <p className="mt-10">Back To Topify</p> */}
                    <div className="flex flex-col justify-center items-center gap-10 mt-10">
                        <p className="flex  items-center lg:text-4xl text-2xl font-bold">
                            Sign Up
                        </p>

                        <form onSubmit={handleSubmit} className="">
                            <div className="space-y-5 flex flex-col justify-center  items-center">


                                <input
                                    type="text"
                                    className="lg:w-[400px] border w-[350px]  py-5 px-5   text-gray-900 text-sm rounded-full  "
                                    placeholder="Full Name"
                                    onChange={(e) => setFullName(e.target.value)}
                                    required
                                />

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
                                    minLength="6"
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder='password' />
                                <input
                                    type="password"
                                    className=" lg:w-[400px]  py-5 px-5 border text-gray-900 text-sm rounded-full block w-[350px] p-2.5  "
                                    placeholder="Confirm Password"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
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
                                        <Link href="/login">Log In</Link>
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
