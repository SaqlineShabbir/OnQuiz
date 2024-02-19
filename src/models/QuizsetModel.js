import mongoose from "mongoose";
const { Schema } = mongoose;

const QuizSetSchema = new Schema(
    {
        title: {
            type: String,
            // unique: true,
            trim: true,
        },
        quizs: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Quiz",
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model("QuizSet", QuizSetSchema);
