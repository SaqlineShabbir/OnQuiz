import { connect } from "@/connectToDb/connect";
import Category from "@/models/CategoryModel";
import Result from "@/models/ResultModel";
import User from "@/models/UserModel";
import { NextResponse } from "next/server";

//save answerd result
export async function POST(request) {
    await connect()
    try {
        const body = await request.json();
        console.log(body)
        const { id, quizCategoryId, lastAnswered, email, attempts } = body;
        const existingResult = await Result.findOne({ _id: id })
        const category = await Category.findOne({ _id: quizCategoryId });

        if (!existingResult) {
            let questions = lastAnswered || []
            let total = questions.length * 5
            let correctQuestions = questions.filter((question) => question.selectAnswer === question.correctAnswer)
            let score = correctQuestions.length * 5
            let percentage = (score / total) * 100

            const result = await Result.create({
                ...body,
                quizCategoryName: category.name,
                score: percentage
            })
            //update user to attain quizs
            await User.updateOne({
                email: email

            }, {
                $push: {
                    attainQuizs: quizCategoryId
                }
            })

            console.log(result)
            return NextResponse.json({
                status: 'success',
                result
            })
            //if exist then update it
        } else {
            const update = {};

            if (attempts) {
                update.$set = { ...update.$set, attempts: attempts };
            }

            if (lastAnswered) {
                update.$set = { ...update.$set, lastAnswered: lastAnswered };
            }

            if (lastAnswered) {
                let questions = lastAnswered || [];
                let total = questions.length * 5;
                let correctQuestions = questions.filter(
                    (el) => el.selectAnswer === el.correctAnswer
                );
                let score = correctQuestions.length * 5;
                let percentage = (score / total) * 100;
                update.$set = { ...update.$set, score: percentage };
            }

            const response = await Result.findOneAndUpdate({ _id: id }, update, { new: true });

            return NextResponse.json({
                status: 'success',
                response
            });
        }
    } catch (error) {
        return NextResponse.json({
            status: 'failed',
            error: error.message
        })

    }

}

