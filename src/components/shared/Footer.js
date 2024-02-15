import Image from 'next/image';
import React from 'react';
import img from '../../assets/ologo-removebg-preview.png';
const Footer = () => {
    return (
        <div className="bg-white footer-main  relative">
            <div className="subscribe  flex justify-center items-center px-20  relative top-20">
                <div className="bg-gradient-to-r from-orange-400 to-[#FF807C] px-20 space-y-5 py-20 text-center rounded-lg">
                    <p className="text-white text-2xl font-bold tracking-[8px] ">
                        UPGRADING YOUR
                        <br /> SKILLS FREE FOR THIS <br />
                        MONTH
                    </p>
                    <p className="text-sm text-white lg:px-40">
                        Fermentum dui faucibus in ornare quam viverra orci. Lacus sed
                        viverra tellus in. Sollicitudin nibh sit amet commodo nulla facilisi
                        congue eu consequat scelerisque eleifend.
                    </p>
                    <input
                        type="email"
                        placeholder="Enter Your Email Address"
                        className="text-sm py-2  px-5 rounded-l-lg"
                    />
                    <button className="bg-black py-2 rounded-r-lg text-sm text-white px-3">
                        Get In Touch
                    </button>
                </div>
            </div>

            <div className="footer-start  bg-black ">
                <div className="logo flex flex-col justify-center items-center text-white  pt-40 pb-20">
                    <div className="flex">
                        <Image
                            src={img}
                            width={50}
                            height={50}
                            alt="Picture of the author"
                        />{' '}
                        <p className="pt-4 text-2xl pl-5">ONQUIZ</p>
                    </div>
                    <p className="text-gray-300  text-sm px-5 lg:px-20 lg:px-[300px] text-center">
                        Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae.
                        Morbi quis commodo odio aenean. Blandit turpis cursus in hac
                        habitasse platea.
                    </p>
                </div>

                <div className="footer-links grid lg:grid-cols-4 grid-cols-2 gap-5 px-10 lg:px-40 py-10 font-mono">
                    <div className="space-y-2">
                        <p className="text-white">ABOUT</p>
                        <button className="text-gray-300 text-sm ">ABOUT US</button>
                        <br />
                        <button className="text-gray-300 text-sm ">LEARNER STORIES</button>
                        <br />
                        <button className="text-gray-300 text-sm ">CAREERS</button>
                        <br />
                        <button className="text-gray-300 text-sm ">PRESS</button>
                        <br />
                        <button className="text-gray-300 text-sm ">LEADERSHIP</button>
                        <br />
                        <button className="text-gray-300 text-sm ">CONTACT US</button>
                    </div>
                    <div className="space-y-2">
                        <p className="text-white">ONE PAGES</p>
                        <button className="text-gray-300 text-sm ">DEVELOPMENT</button>
                        <br />
                        <button className="text-gray-300 text-sm ">BUSINESS</button>
                        <br />
                        <button className="text-gray-300 text-sm ">
                            FINANCE & ACCOUNT
                        </button>
                        <br />
                        <button className="text-gray-300 text-sm ">IT &SOFTWARE</button>
                        <br />
                        <button className="text-gray-300 text-sm ">
                            OFFICE PRODUCTIVITY
                        </button>
                        <br />
                        <button className="text-gray-300 text-sm ">DESIGN</button>
                        <br />
                        <button className="text-gray-300 text-sm ">MARKETING</button>
                    </div>
                    <div className="space-y-2">
                        <p className="text-white">PAGES</p>
                        <button className="text-gray-300 text-sm ">DOCUMENTATION</button>
                        <br />
                        <button className="text-gray-300 text-sm ">FAQS</button>
                        <br />

                        <button className="text-gray-300 text-sm ">DASHBOARD</button>
                        <br />
                        <button className="text-gray-300 text-sm ">CONTACT</button>
                    </div>
                    <div className="space-y-2">
                        <p className="text-white">BLOG</p>
                        <button className="text-gray-300 text-sm ">JOB OPENING</button>
                        <br />
                        <button className="text-gray-300 text-sm ">INTERNSHIP</button>
                        <br />
                        <button className="text-gray-300 text-sm ">PROMOTE JOB</button>
                    </div>
                </div>
                <div>
                    <hr className="text-gray-300" />
                    <div className="flex  justify-center">
                        <div className="flex text-sm text-gray-300 space-x-20 py-10 px-5 lg:px-0">
                            <div>
                                <p>© 2023 OneQuiz </p>
                                <p>WeDesignTech</p>
                            </div>
                            <div>
                                <p className="pt-6">FB / IN / YU / TW </p>
                            </div>
                            <div>
                                <p>Privacy Policy </p>
                                <p>Terms & Condition</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
