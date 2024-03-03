'use client'
import ProgressBar from '@/components/shared/ProgressBar';
import { AuthContext } from '@/context/AuthProvider';
import Image from 'next/image';
import React, { useContext } from 'react';

const page = () => {
    const { user, information } = useContext(AuthContext);
    // filter how many quiz test user took
    const exactUserInformation = information?.filter(
        (info) => info?.email === user?.email
    );
    return (
        <div className=" p-3 lg:p-5 rounded text-gray-200 min-h-[87vh]">
            <div className="flex space-x-5">
                {user?.photo ? <div className="pr-2">
                    {user?.photo && (
                        <Image
                            className="rounded-lg"
                            src={user?.photo}
                            alt="user"
                            width={200}
                            height={150}
                        />
                    )}
                </div> : <div className='shadow border flex justify-center items-center px-20 py-10 text-5xl'>{user?.fullname.slice(0, 1)}</div>}
                <div className="">

                    <p className="text-green-300">level 2</p>
                    <p className="text-[#FFAE96] pb-2">{user?.email}</p>
                    <ProgressBar progress={60} />
                </div>
            </div>
            {/* //achievement */}
            <div>
                <div className="lg:flex mt-20  lg:space-x-10">
                    <div className="lg:w-1/2 ">
                        <div className="flex ">
                            <p className="font-bold  pb-2">Achievements</p>
                            <div className="pt-3 pl-2">
                                {/* <ProgressBar progress={80} /> */}
                            </div>
                        </div>

                        <div className="px-5 rounded-lg pb-5 border lg:w-[900px]">
                            <div className="mt-10">
                                <table className="w-full mt-3 pb-3 my-20">
                                    <thead>
                                        <tr >
                                            <th className="text-left">Quiz Topics</th>
                                            <th className="text-left pl-10">Score</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {exactUserInformation?.map((ex) => (
                                            <tr key={ex._id}>
                                                <td className="text-left pt-5">{ex?.quizCategoryName}</td>
                                                <td className="text-left pl-10 pt-5">{ex?.score}%</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <hr />

                                <div className="flex justify-center">
                                    <button>View All</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* //quiz categoryes */}

                    {/* <div className="w-1/2 lg:my-0 my-8">
              <div>
                <p className="font-bold">Featured Quiz Categories</p>
              </div>
              <div className="grid lg:grid-cols-2 gap-0 px-10">
                {categoryData?.slice(0, 4).map((quizCategory) => (
                  <div key={quizCategory._id} className="p-3 relative">
                    {quizCategory?.postImage && (
                      <div className="">
                        <Image
                          className="rounded-xl "
                          height={100}
                          width={105}
                          src={quizCategory?.postImage}
                          alt=""
                        />
                      </div>
                    )}

                   
                  </div>
                ))}
              </div>
            </div> */}
                </div>
            </div>
        </div>
    );
};

export default page;