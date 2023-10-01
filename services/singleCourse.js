import axios from "axios";


const singleCourse =async (courseId) => {
   
try {
    const res=await axios.get(`http://127.0.0.1:8000/api/courses/${courseId}`);
    if(res.status!==200){
        throw new Error("Course not found");
    }
    return res.data;
} catch (error) {
    console.log(error);
    throw error;
}

}

export default singleCourse;