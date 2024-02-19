

import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import cloudinary from "cloudinary";
import Category from "@/models/CategoryModel";
import { connect } from "@/connectToDb/connect";
//clowdinary

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});
export async function POST(request) {

    await connect()
    try {
        const body = await request.formData();
        const name = body.get('name')
        const file = body.get('photo')

        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)


        const path = `./files/${file.name}`
        // Save the file to the specified path
        await fs.writeFile(path, buffer);



        const cloudresult = await cloudinary.uploader.upload(path, {
            folder: 'files',
            public_id: file.name,
        });



        const response = await Category.create({
            name,
            photo: cloudresult?.secure_url

        });
        console.log(response)
        // Return success response
        return NextResponse.json({
            message: "Category created successfully",
            success: true,
            response
        });

    } catch (error) {
        console.error('Error creating category:', error);
        return NextResponse.json({
            error: error.message
        });
    }
}

export async function GET(request) {
    await connect()
    try {

        const categories = await Category.find({}).populate('quizs')


        // Return success response
        return NextResponse.json({
            message: "successfully get categories",
            success: true,
            categories
        });

    } catch (error) {
        console.error('Error getting categories:', error);
        return NextResponse.json({
            message: error.message
        }, { status: 500 });

    }
}

