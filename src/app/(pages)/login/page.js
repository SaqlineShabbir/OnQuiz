'use client'
import Image from 'next/image';
import Navigation from '@/components/shared/Navigation';
import { AuthContext } from '@/context/AuthProvider';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import img from '../../../assets/sign-removebg.png'
const page = () => {
    const { fetchUser } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                fetchUser()
                router.push('/');
            } else {
                const errorData = await response.json();

                setError(errorData.error)

            }
        } catch (error) {

            setError(error.message)
        }
    }

    return (
        <div className="bg-gradient-to-r from-blue-600 to-black">
            <Navigation></Navigation>
            <div className="lg:flex  justify-center items-center py-auto min-h-[90vh]  lg:py-0">
                <div className=" lg:w-[50%] ">
                    <Image className='lg:pt-10' src={img} width={700} height={700} />
                </div>
                <div className=" lg:w-[50%] text-gray-200">
                    <div className="flex flex-col justify-center items-center gap-10 mt-10">
                        <p className="flex  items-center lg:text-4xl text-2xl font-bold">
                            Log In
                        </p>

                        <form onSubmit={handleSubmit}>
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
                                    minlength="6"
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder='password' />

                                <p className="text-red-500">{error}</p>
                                <button
                                    type="submit"
                                    className="bg-red-400 border py-5 px-10 w-[350px] lg:w-[400px] rounded-full block "
                                >
                                    Login
                                </button>
                                <div className="flex">
                                    <p>Already have an account? </p>
                                    <div className="text-blue-600 pl-3  px-5">
                                        <Link href="/signup">Signup</Link>
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
