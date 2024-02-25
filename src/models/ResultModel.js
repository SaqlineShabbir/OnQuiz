import mongoose from "mongoose";
const { Schema } = mongoose;

const resultSchema = new Schema(
    {
        email: {
            type: String,
            trim: true,
        },
        name: {
            type: String,
            trim: true,
        },
        quizCategoryName: {
            type: String,
            trim: true,
        },
        quizCategoryId: {
            type: mongoose.Types.ObjectId,
        },
        attempts: {
            type: String,
            trim: true,
        },
        lastAnswered: {
            type: Array,
        },
        score: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
const Result = mongoose.models.Result || mongoose.model("Result", resultSchema);

export default Result;

