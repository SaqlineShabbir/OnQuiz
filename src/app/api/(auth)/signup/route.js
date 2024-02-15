
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from "next/server"
import jwt from 'jsonwebtoken';
import { connect } from "@/connectToDb/connect";
import User from '@/models/UserModel';

export async function POST(NextRequest) {
    await connect();
    try {
        const body = await NextRequest.json();
        const { fullname, email, password } = body;
        console.log('req.bodyyy', body);

        // Check if user exists
        const userExist = await User.findOne({ email });

        if (userExist) {
            return NextResponse.json({ error: "User already exists" }, { status: 404 });
        }

        // Make password hash
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        console.log('hasheddd', hashedPassword);

        const newUser = new User({
            fullname,
            email,
            password: hashedPassword,
            role: "User"
        });

        // Save the new user
        const savedUser = await newUser.save();

        //create token 
        const tokenData = {
            id: savedUser._id,
            firstName: savedUser.firstname,
            lastname: savedUser.lastname,
            email: savedUser.email
        }
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" })
        // Return success response
        const response = NextResponse.json({
            message: "User created successfully",
            success: true,
            saveUser: savedUser
        });
        response.cookies.set("accessToken", token, {
            httpOnly: true,

        })
        return response

    } catch (error) {
        console.error(error.message);

        // Return error response
        return NextResponse.json({
            error: error.message
        }, { status: 500 });
    }
}