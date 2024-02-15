import Image from 'next/image';
import React from 'react';
import img from '../../assets/banner-removebg-preview.png';
const Banner = () => {
    return (
        <div className=" flex justify-center ">
            <div className="bg-pink-100 lg:flex px-5 lg:pl-20 h-[100vh]">
                <div className="left-side space-y-5 lg:w-[50%] pt-20">
                    <p className="text-[#FF807C]">SMART LEARNING</p>
                    <p className="text-3xl ">
                        PROGRAMMING <br /> QUIZ
                    </p>
                    <p className="font-mono">
                        Quam quisque id diam vel quam elementum pulvinar etiam non. Lobortis
                        feugiat vivamus at augue eget. Eu volutpat odio facilisis mauris sit
                        amet.
                    </p>

                    <div className="bg-gradient-to-r from-orange-300  to-[#FF807C] p-5 rounded-md   space-y-2">
                        <button className="bg-slate-800 text-white px-10 py-2 hover:text-[#FF807C] rounded mr-2">
                            HTML
                        </button>
                        <button className="bg-slate-800 text-white px-10 py-2 mr-2 hover:text-[#FF807C] rounded">
                            CSS
                        </button>
                        <button className="bg-slate-800 text-white px-10 py-2 mr-2 hover:text-[#FF807C] rounded">
                            JS
                        </button>
                        <button className="bg-slate-800 text-white px-10 py-2 mr-2 hover:text-[#FF807C] rounded">
                            REACT
                        </button>
                        <button className="bg-slate-800 text-white px-10 py-2 mr-2 hover:text-[#FF807C] rounded">
                            NODE JS
                        </button>
                        <button className="bg-slate-800 text-white px-10 py-2 mr-2 hover:text-[#FF807C] rounded">
                            NEXT JS
                        </button>
                        <button className="bg-slate-800 text-white px-10 py-2 mr-2 hover:text-[#FF807C] rounded">
                            MONGODB
                        </button>
                        <button className="bg-slate-800 text-white px-10 py-2 mr-2 hover:text-[#FF807C] rounded">
                            MONGOOSE
                        </button>
                    </div>
                </div>
                <div className="Right-side lg:w-[50%]">
                    <div className="flex justify-center  ml-10">
                        <Image
                            src={img}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
