import { connect } from "@/connectToDb/connect";
import Category from "@/models/CategoryModel";
import Quiz from "@/models/QuizModel";
import { NextResponse } from "next/server";



export async function POST(request, { params }) {

    await connect()
    try {
        const { id } = params;
        const body = await request.json();
        const { question, a, b, c, d, correctAnswer, explanation } = body;
        const quiz = await Quiz.create({
            question,
            a,
            b,
            c,
            d,
            correctAnswer,
            explanation
        });
        console.log(quiz)
        await Category.updateOne(
            {
                _id: id
            },
            {
                $push: {
                    quizs: quiz._id
                }
            }
        )
        // Return success response
        return NextResponse.json({
            message: "quiz created successfully",
            success: true,
            quiz
        });

    } catch (error) {
        console.error('Error creating category:', error);
        return NextResponse.json({
            error: error.message
        });
    }
}



