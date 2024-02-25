import { connect } from "@/connectToDb/connect";
import Result from "@/models/ResultModel";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    await connect()
    try {
        const { id } = params;
        // Extract user email from query parameters
        const searchParams = request?.nextUrl?.searchParams
        const email = searchParams.get('email')
        const data = await Result.find({
            email: email,
            quizCategoryId: id
        })
        return NextResponse.json({
            status: 'success',
            data

        })

    } catch (error) {
        return NextResponse.json({
            status: 'failed',
            error: error.message
        })
    }
}