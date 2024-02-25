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

export async function DELETE(request, { params }) {
    await connect();

    try {
        const { id } = params;

        // Assuming the ID is passed as a parameter in the URL
        const category = await Category.findOneAndDelete({ _id: id });

        // Check if the booking was found and updated
        if (!category) {
            return NextResponse.json({
                message: "Categoriy not found",
                success: false,
            }, { status: 404 }); // Using 404 Not Found for resource not found
        }

        // Return success response with the updated booking data
        return NextResponse.json({
            message: "Successfully Deleted Category",
            success: true,
            service: category,
        });
    } catch (error) {
        console.error('Error deleteing category:', error);
        return NextResponse.json({
            message: error.message,
            success: false,
        }, { status: 500 });
    }
}