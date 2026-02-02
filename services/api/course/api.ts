import publicRequest from "@/helpers/axios"
import { CourseFormData } from "@/types/course";

export const createCourse = async (courseData: CourseFormData) => {
    try {
        const response = await publicRequest.post('/api/course', courseData);
        return response.data;
    } catch (error) {
        console.error("Error creating course:", error);
        throw error;
    }
}

export default createCourse;