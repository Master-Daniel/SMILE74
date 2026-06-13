import mongoose from "mongoose";
import { Schema, Document } from "mongoose";
import { ITask } from "../types";


export interface ITaskDocument extends ITask, Document {} 

const TaskSchema = new Schema<ITaskDocument>({
    title: {
        type: String,
         required: true
    }, 
    description: {
        type: String
    },
    dueDate: {
        type: Date
    }, 
    category: {
        type: String, enum: [ 'work', 'personal', 'urgent' ],
        required: true
    },
    completed: {
        type: Boolean,
        default: false 
    }
}, {timestamps: true});


export default mongoose.model<ITaskDocument>('Task', TaskSchema);