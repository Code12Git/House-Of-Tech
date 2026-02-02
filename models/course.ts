import mongoose from "mongoose";
import { Schema } from "mongoose";

const CourseSchema = new Schema({
    title: { 
        type: String, 
        required: [true, 'Title is required'],
        trim: true,
        maxlength: [200, 'Title cannot exceed 200 characters']
    },
    instructor: { 
        type: String, 
        required: [true, 'Instructor is required'],
        trim: true 
    },
    description: {
        type: String,
        trim: true,
        maxlength: [2000, 'Description cannot exceed 2000 characters']
    },
    duration: { 
        type: Number, 
        default: 0,
        min: [0, 'Duration cannot be negative']
    },
    price: {
        type: Number,
        default: 0,
        min: [0, 'Price cannot be negative']
    },
    level: { 
        type: String, 
        enum: {
            values: ['Beginner', 'Intermediate', 'Advanced'],
            message: 'Level must be Beginner, Intermediate, or Advanced'
        },
        default: 'Beginner'
    },
    status: { 
        type: String, 
        enum: {
            values: ['Active', 'Draft', 'Archived'],
            message: 'Status must be Active, Draft, or Archived'
        },
        default: 'Draft' 
    },
    students: { 
        type: Number,
        default: 0,
        min: [0, 'Students cannot be negative']
    },
    enrolledStudents: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    }],
    thumbnail: {
        type: String,
        default: ''
    },
    category: {
        type: String,
        trim: true
    }
}, { 
    timestamps: true
});

CourseSchema.index({ title: 'text', instructor: 'text' });
CourseSchema.index({ status: 1 }); //beginner to advanced
CourseSchema.index({ level: 1 });
CourseSchema.index({ createdAt: -1 });// latest to previous

const Course = mongoose.models.Course || mongoose.model('Course', CourseSchema);

export default Course;