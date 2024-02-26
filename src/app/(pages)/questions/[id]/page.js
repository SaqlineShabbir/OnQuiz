'use client'
import ProgressBar from '@/components/shared/ProgressBar';
import { AuthContext } from '@/context/AuthProvider';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useReducer, useRef, useState } from 'react';

const reducer = (state, action) => {
    // console.log(action.payLoad.selectAnswer);
    switch (action.type) {
        case 'ANSWERED':
            return state.map((question) => {
                if (question._id === action.payLoad.id) {
                    return { ...question, selectAnswer: action.payLoad.selectAnswer };
                } else {
                    return question;
                }
            });
        default:
            return state;
    }
};
const page = ({ params }) => {
    //start
    const { categories, user } = useContext(AuthContext);
    const categoryData = categories?.find((category) => category._id === params.id)

    // Handle the case where data is not available
    if (!categories || !params || !categoryData) {

        return <div>Loading or error message...</div>;
    }
    const id = params.id
    const [countDown, setCountDown] = useState(30);
    const timerId = useRef();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // get selected answer
    const [selected, setSelected] = useState('');


    //fetch category data
    const initialQuestions = categoryData?.quizs;
    const [questions, dispatch] = useReducer(reducer, initialQuestions);


    const router = useRouter()


    // handle timer
    useEffect(() => {
        timerId.current = setInterval(() => {
            setCountDown((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timerId.current);
    }, []);
    useEffect(() => {
        if (countDown === 0) {
            clearInterval(timerId.current);
            router.push('/result');
        }
    });
    //handle answers  here
    const handleAnswer = (id, selectAnswer) => {
        dispatch({
            type: 'ANSWERED',
            payLoad: { id: id, selectAnswer: selectAnswer },
        });
        setSelected(selectAnswer);
    };

    //handle when user clicks next question
    const nextQuestion = () => {
        if (currentQuestion < questions.length) {
            setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion + 1);
        }
        setCountDown(30);
        setSelected('');
    };
    //result calculation
    let score = 0;
    // calculate answer
    questions?.forEach((element) => {
        if (element?.correctAnswer === element?.selectAnswer) {
            score = score + (5 / (questions?.length * 5)) * 100;
        }
    });

    // calculate percentage
    const percentage = questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

    //handle result
    useEffect(() => {
        localStorage.setItem('questions', JSON.stringify({ id, score, questions }));
    }, [score, id, questions]);

    //post user result to  backend
    const handlePutUserResult = async (score, id, user) => {
        try {

            const response = await fetch(`https://on-quiz.vercel.app/api/result/${id}?email=${user?.email}`, {
                method: 'GET'
            })

            const data = await response.json()
            console.log('this is ', data)
            if (data?.data.length) {
                const res = await fetch(`https://on-quiz.vercel.app/api/result`, {
                    method: 'POST',
                    body: JSON.stringify({
                        score: score,
                        id: data?.data[0]._id,
                        name: user?.fullname,
                        email: user?.email,
                        quizCategoryId: id,
                        attempts: Number(data?.data[0]?.attempts) + 1,
                        lastAnswered: questions,
                    })
                })
                console.log('first res', res)
            } else {
                try {
                    const res = await fetch(`https://on-quiz.vercel.app/api/result`, {
                        method: 'POST',
                        body: JSON.stringify({
                            email: user?.email,
                            name: user?.fullname,
                            quizCategoryId: id,
                            attempts: '1',
                            lastAnswered: questions,
                        })
                    })
                    console.log('second res', res)
                } catch (error) {
                    console.log(error)
                }

            }

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div>
                <div className="border border-[#FFAE96] rounded lg:mx-40 mx-5 my-10 lg:p-20 p-5">
                    <div className="flex justify-end text-2xl  pb-4">
                        <p>Timer: {countDown}</p>
                    </div>
                    <ProgressBar progress={percentage} />
                    <p>Question: {questions[currentQuestion]?.question}?</p>
                    <div className="py-3  space-y-3">
                        <div
                            onClick={() => handleAnswer(questions[currentQuestion]?._id, 'a')}
                            className="bg-[#F0F8FF] border border-[#84C5FE] py-1 px-2 flex justify-between"
                        >
                            {questions[currentQuestion]?.a}
                            {/* //select icon */}
                            {selected === 'a' && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>
                            )}
                        </div>
                        <div
                            onClick={() => handleAnswer(questions[currentQuestion]?._id, 'b')}
                            className="bg-[#F0F8FF] border border-[#84C5FE] py-1 px-2 flex justify-between"
                        >
                            {questions[currentQuestion]?.b}
                            {selected === 'b' && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>
                            )}
                        </div>
                        <div
                            onClick={() => handleAnswer(questions[currentQuestion]?._id, 'c')}
                            className="bg-[#F0F8FF] border border-[#84C5FE] py-1 px-2 flex justify-between"
                        >
                            {questions[currentQuestion]?.c}
                            {selected === 'c' && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>
                            )}
                        </div>
                        <div
                            onClick={() => handleAnswer(questions[currentQuestion]?._id, 'd')}
                            className="bg-[#F0F8FF] border border-[#84C5FE] py-1 px-2  flex justify-between"
                        >
                            {questions[currentQuestion]?.d}
                            {selected === 'd' && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>
                            )}
                        </div>
                        <hr className="mt-20" />
                    </div>

                    <div className="flex  justify-end">
                        {/* <button
                            disabled={currentQuestion <= 0}
                            className="bg-orange-400 border px-3  py-1 rounded-xl"
                            onClick={prevQuestion}
                        >
                            Previous
                        </button> */}
                        {currentQuestion === questions.length - 1 ? (
                            <Link href={'/result'}>
                                <button
                                    onClick={() => handlePutUserResult(score, id, user)}
                                    className="bg-gradient-to-l from-[#FF6961] border  px-3 py-1 rounded-xl"
                                >
                                    Show Result
                                </button>
                            </Link>
                        ) : (
                            <button
                                disabled={currentQuestion === questions.length - 1}
                                className="border border-[#FFAE96]  px-10 py-1 rounded-xl"
                                onClick={nextQuestion}
                            >
                                next
                            </button>
                        )}
                    </div>
                    <p className="pt-10">
                        <span className="font-bold">{currentQuestion + 1}</span> Out Of
                        <span className="font-bold"> {questions.length}</span> Questions
                    </p>
                </div>
            </div>
        </>
    );
};

export default page;
