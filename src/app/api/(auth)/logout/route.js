import { NextResponse } from "next/server";


export async function GET() {
    try {

        const response = NextResponse.json(
            {
                mesage: "Logout successful",
                success: true
            })

        response.cookies.set('accessToken', '', {
            httpOnly: true,
            expires: new Date(0) // Set the expiration date to a time in the past
        });
        response.cookies.set('Admin', '', {
            httpOnly: true,
            expires: new Date(0) // Set the expiration date to a time in the past
        });
        return response
    } catch (error) {
        return NextResponse.json(
            { error: error.message }
            , { status: 500 }
        )
    }
}