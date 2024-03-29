import Image from 'next/image';
import React from 'react';
import img from '../../assets/Cap.PNG';
import react from '../../assets/React.jpg';
import web from '../../assets/web.jpg';
const UpcomingCourses = () => {
    return (
        <div className="upcomiing-main px-5 md:px-10 lg:px-20  py-20 bg-gradient-to-r from-blue-600 to-black">
            <div className="flex flex-col justify-center items-center text-center">
                <p className="text-[#FF807C] ">UPCOMING COURSES</p>
                <p className="text-3xl font-bold text-white">PROFESSIONAL Courses</p>
            </div>
            {/* cardstart */}
            <div className="card-main grid lg:grid-cols-3 py-20 gap-5">
                <div className="bg-blue-800 border  text-white">
                    <Image
                        src={web}
                        width={700}
                        height={400}
                        alt="Picture of the author"
                    />
                    <div className="space-y-2 px-8 pt-4">
                        <p className="text-2xl">
                            Complete Web <br />
                            development Course
                        </p>
                        <p>
                            Fusce eu congue sem. Donec ut eu est semper augue accumsan.
                            Integer consequat ultricies arcu a
                        </p>
                        <hr />
                        <div className="flex  justify-between  py-5">
                            <p className="text-txl font-bold text-[#FF807C]">$150</p>
                            <button className="text-[#FF807C] hover:text-black">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-blue-800 text-white border">
                    <div className=''>
                        <Image
                            src={react}
                            width={600}
                            height={200}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="space-y-2 px-8  pt-4">
                        <p className="text-2xl">
                            Complete React <br />
                            Guide Course
                        </p>
                        <p>
                            Fusce eu congue sem. Donec ut eu est semper augue accumsan.
                            Integer consequat ultricies arcu a
                        </p>
                        <hr />
                        <div className="flex  justify-between  py-5">
                            <p className="text-txl font-bold text-[#FF807C]">$150</p>
                            <button className="text-[#FF807C] hover:text-black">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>


                <div className="bg-blue-800 text-white border">
                    <Image
                        src={img}
                        width={700}
                        height={400}
                        alt="Picture of the author"
                    />
                    <div className="space-y-2 px-8 pt-4">
                        <p className="text-2xl">
                            JAVASCRIPT <br />A To Z Course
                        </p>
                        <p>
                            Fusce eu congue sem. Donec ut eu est semper augue accumsan.
                            Integer consequat ultricies arcu a
                        </p>
                        <hr />
                        <div className="flex  justify-between  py-5">
                            <p className="text-txl font-bold text-[#FF807C]">$150</p>
                            <button className="text-[#FF807C] hover:text-black">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingCourses;
