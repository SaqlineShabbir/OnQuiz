'use client'
import { AuthContext } from "@/context/AuthProvider";
import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const page = () => {
    const [categoryId, setCategoryId] = useState('')
    const [question, setQuestion] = useState('')
    const [a, setA] = useState('')
    const [b, setB] = useState('')
    const [c, setC] = useState('')
    const [d, setD] = useState('')
    const [correctAnswer, setCorrectAnswer] = useState('')
    const [explanation, setExplanation] = useState('')
    const { user, categories, fetchCategoryData } = useContext(AuthContext);


    const handleCategoryId = (catId) => {
        setCategoryId(catId);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(`https://on-quiz.vercel.app/api/quiz/${categoryId}`, {
                method: 'POST',
                body: JSON.stringify({ question, a, b, c, d, explanation, correctAnswer }),
            });

            if (response.ok) {
                toast.success('added  successfully')
                fetchCategoryData()
                setQuestion('')
                setA('')
                setB('')
                setC('')
                setD('')
                setCorrectAnswer('')
                setExplanation('')
            }
        } catch (error) {
            console.error('created failed:', error.message);
            toast.error(error.message);
        }
    }
    return (

        <div className="flex justify-center ">
            <Toaster />
            <div className="text-gray-200">
                <h2>Choose Category</h2>
                <div className="grid  grid-cols-7 p-6 space-x-5 space-y-5 cursor-pointer">
                    {categories.map((cat) => (
                        <p
                            className="border rounded-full px-5 py-3"
                            onClick={() => handleCategoryId(cat._id)}
                            key={cat._id}
                        >
                            {cat.name}
                        </p>
                    ))}
                </div>

                <form
                    className="mx-10  space-y-3 pt-20"
                    onSubmit={handleSubmit}
                >
                    <input
                        className="p-3 border"
                        placeholder="Question"
                        onChange={(e) => setQuestion(e.target.value)}

                    />
                    <br />
                    <input
                        className="p-3  border"
                        placeholder="a"
                        onChange={(e) => setA(e.target.value)}

                    />
                    <br />
                    <input
                        className="p-3  border"
                        placeholder="b"
                        onChange={(e) => setB(e.target.value)}

                    />
                    <br />
                    <input
                        className="p-3  border"
                        placeholder="c"
                        onChange={(e) => setC(e.target.value)}
                    />
                    <br />
                    <input
                        className="p-3   border"
                        placeholder="d"
                        onChange={(e) => setD(e.target.value)}
                    />
                    <br />
                    <input
                        className="p-3  border"
                        placeholder="Correct Answer"
                        onChange={(e) => setCorrectAnswer(e.target.value)}

                    />
                    <br />
                    <input
                        className="p-3  border"
                        placeholder="Explanation"
                        onChange={(e) => setExplanation(e.target.value)}

                    />
                    <br />
                    <input
                        disabled={!categoryId}
                        className="border px-20 py-4 bg-purple-300"
                        type="submit"
                    />
                </form>
            </div>
        </div>

    );
};

export default page;


