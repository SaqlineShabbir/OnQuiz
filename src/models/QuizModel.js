import mongoose from "mongoose";
const { Schema } = mongoose;

const quizSchema = new Schema(
    {
        question: {
            type: String,
            trim: true,
        },
        a: {
            type: String,
            trim: true,
        },
        b: {
            type: String,
            trim: true,
        },
        c: {
            type: String,
            trim: true,
        },
        d: {
            type: String,
            trim: true,
        },
        correctAnswer: {
            type: String,
            trim: true,
        },
        correctAnswer: {
            type: String,
            trim: true,
        },
        explanation: {
            type: String,
            trim: true,
        },
        selectAnswer: {
            type: String,
            default: "",
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);



const Quiz = mongoose.models.Quiz || mongoose.model("Quiz", quizSchema);

export default Quiz;