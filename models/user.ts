import mongoose from "mongoose";
import {Schema} from 'mongoose'

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true,index:true },
    password: { type: String, required: true,select:false },
    role: { type: String, enum: ['Student', 'Instructor', 'Admin'], default: 'Student' },
    enrolledCourses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date }
},{timestamps: true});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;