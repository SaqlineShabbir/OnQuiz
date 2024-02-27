import Image from 'next/image';
import React from 'react';
import img from '../../assets/banner-removebg-preview.png';

const Banner = () => {
    return (
        <div className="flex justify-center items-center h-[90vh] bg-gradient-to-r from-blue-400 to-pink-400">
            <div className=" lg:flex px-5 lg:pl-20 ">
                <div className="left-side space-y-3 lg:w-[50%] pt-20 lg:pt-0 pr-5 lg:pr-10">
                    <p className="text-white text-center lg:text-left">SMART LEARNING</p>
                    <p className="text-white font-bold text-3xl text-center lg:text-left">
                        PROGRAMMING <br /> QUIZ
                    </p>
                    <p className="text-white  font-mono text-center lg:text-left">
                        Quam quisque id diam vel quam elementum pulvinar etiam non. Lobortis
                        feugiat vivamus at augue eget. Eu volutpat odio facilisis mauris sit
                        amet.
                    </p>

                    <div className="bg-gradient-to-r from-orange-300 to-[#FF807C] p-5 rounded-md space-y-2 flex flex-wrap justify-center lg:justify-start">
                        <button className="bg-slate-800 text-white px-4 py-2 hover:text-[#FF807C] rounded-md m-2">
                            HTML
                        </button>
                        <button className="bg-slate-800 text-white px-4 py-2 hover:text-[#FF807C] rounded-md m-2">
                            CSS
                        </button>
                        <button className="bg-slate-800 text-white px-4 py-2 hover:text-[#FF807C] rounded-md m-2">
                            JS
                        </button>
                        <button className="bg-slate-800 text-white px-4 py-2 hover:text-[#FF807C] rounded-md m-2">
                            REACT
                        </button>
                        <button className="bg-slate-800 text-white px-4 py-2 hover:text-[#FF807C] rounded-md m-2">
                            NODE JS
                        </button>
                        <button className="bg-slate-800 text-white px-4 py-2 hover:text-[#FF807C] rounded-md m-2">
                            NEXT JS
                        </button>
                        <button className="bg-slate-800 text-white px-4 py-2 hover:text-[#FF807C] rounded-md m-2">
                            MONGODB
                        </button>
                        <button className="bg-slate-800 text-white px-4 py-2 hover:text-[#FF807C] rounded-md m-2">
                            MONGOOSE
                        </button>
                    </div>
                </div>
                <div className="Right-side lg:w-[50%] pl-5 lg:pl-10">
                    <div className="flex justify-center ml-10">
                        <Image src={img} width={600} height={600} alt="Picture of the author" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;