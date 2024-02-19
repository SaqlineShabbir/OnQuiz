// import { connect } from "@/connectToDb/connect";
// import Category from "@/models/CategoryModel";

// export async function GET(request) {
//     await connect()
//     try {

//         const categories = await Category.find({}).populate({ path: 'quizs', model: Quiz })


//         // Return success response
//         return NextResponse.json({
//             message: "successfully get categories",
//             success: true,
//             categories
//         });

//     } catch (error) {
//         console.error('Error getting categories:', error);
//         return NextResponse.json({
//             message: error.message
//         }, { status: 500 });

//     }
// }