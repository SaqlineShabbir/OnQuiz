import Image from 'next/image';
import React from 'react';
import img from '../../assets/aboutus-removebg-preview.png';
const AboutUs = () => {
    return (
        <div className="about-main lg:flex w-[100%] py-32  px-5 lg:px-20 space-x-5 bg-white">
            <div className="about-left  lg:w-[50%] ">
                <Image src={img} width={700} height={600} alt="Picture of the author" />
            </div>
            <div className="about-right lg:w-[50%] space-y-2 lg:pt-20">
                <p className="font-bold text-[#FF807C]">ABOUT US</p>
                <p className="text-2xl ">
                    INNOVATIVE DIGITAL
                    <br /> PLATFORM FOR CREATIVE PERSONS
                </p>
                <p>
                    Donec pretium vulputate sapien nec sagittis aliquam malesuada
                    bibendum. Lacus laoreet non curabitur gravida arcu ac tortor
                    dignissim. Lectus magna fringilla.
                </p>

                <div className="cards lg:flex pt-5  ">
                    <div className="bg-gray-100 px-10 py-5 mr-2 rounded">
                        <p className="text-5xl font-bold text-[#FF807C] ">10k</p>
                        <p className="pl-2">Students</p>
                    </div>
                    <div className="bg-gray-100 px-10 py-5 mr-2 rounded my-2 lg:my-0">
                        <p className="text-5xl font-bold text-[#FF807C] ">08k</p>
                        <p className="pl-2">Learners</p>
                    </div>
                    <div className="bg-gray-100 px-10 py-5 rounded">
                        <p className="text-5xl font-bold text-[#FF807C] ">01k</p>
                        <p className="pl-2">Teachers</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
