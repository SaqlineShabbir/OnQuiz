import mongoose from "mongoose";


const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    photo: {
        type: String,
        required: true,
    },
    quizs: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Quiz",
        },
    ],
});


const Category = mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;