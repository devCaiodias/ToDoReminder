import mongoose from "mongoose";

const TasksSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        title: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        dueDate: {
            type: Date,
            required: true,
        },
        category: {
            type: String,
            trim: true,
        },
        status: {
            type: String,
            enum: ['pending', 'completed'],
            default: 'pending',
        },
    },
    {
        timestamps: true
    }
)

export default mongoose.model('Tasks', TasksSchema)