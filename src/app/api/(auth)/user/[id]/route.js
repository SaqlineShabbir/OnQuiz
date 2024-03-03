import { connect } from "@/connectToDb/connect";
import User from "@/models/UserModel";
import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
    await connect();

    try {
        const data = await request.json();
        const { id } = params;

        // Assuming the ID is passed as a parameter in the URL
        const user = await User.findOneAndUpdate({ _id: id }, data, { new: true });

        // Check if the booking was found and updated
        if (!user) {
            return NextResponse.json({
                message: "user not found",
                success: false,
            }, { status: 404 }); // Using 404 Not Found for resource not found
        }


        // Return success response with the updated booking data
        return NextResponse.json({
            message: "Successfully updated",
            success: true,
            user,
        });
    } catch (error) {
        console.error('Error updating :', error);
        return NextResponse.json({
            message: error.message,
            success: false,
        }, { status: 500 });
    }
}