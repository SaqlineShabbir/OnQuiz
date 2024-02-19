import { connect } from "@/connectToDb/connect";
import Category from "@/models/CategoryModel";
import Quiz from "@/models/QuizModel";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    await connect()
    try {
        const { id } = params;

        const categorie = await Category.findOne({ _id: id }).populate({ path: 'quizs', model: Quiz })


        // Return success response
        return NextResponse.json({
            message: "successfully get categorie",
            success: true,
            categorie
        });

    } catch (error) {
        console.error('Error getting categorie:', error);
        return NextResponse.json({
            message: error.message
        }, { status: 500 });

    }
}