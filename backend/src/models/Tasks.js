import mongoose from "mongoose";

const TasksSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        title: {
            
        },
        description: {
            
        },
        dueDate: {
            
        },
        category: {
            
        },
        status: {
            
        },
    },
    {
        timestamps: true
    }
)

export default mongoose.model('Tasks', TasksSchema)