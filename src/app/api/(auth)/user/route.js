
import { connect } from "@/connectToDb/connect";
import { getCookieInfo } from "@/helpers/getCookieInfo";
import User from "@/models/UserModel";
import { NextResponse, NextRequest } from "next/server";


export async function GET(NextRequest, { }) {

    connect()
    try {
        const userId = await getCookieInfo(NextRequest)
        const user = await User.findOne({ _id: userId }).select("-password")
        const response = NextResponse.json({
            message: 'user found',
            user
        })
        return response

    } catch (error) {
        return NextResponse.json(
            { error: error.message }
            , { status: 500 }
        )

    }
}

// export async function PATCH(request) {
//     try {
//         const searchParams = request?.nextUrl?.searchParams
//         const email = searchParams.get('email')
//         const data = await request.json();
//         const isExist = await User.findOne({ email: email })


//         if (isExist) {
//             const result = await User.findOneAndUpdate({ email: email }, data, { new: true })

//             return NextResponse.json({
//                 status: 'success',
//                 result
//             })
//         }


//         return NextResponse.json({
//             message: "Can't Make",
//             success: false,
//         }, { status: 404 });






//     } catch (error) {
//         return NextResponse.json(
//             { error: error.message }
//         )

//     }
// }