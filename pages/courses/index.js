import CourseItem from "@/components/CourseItem";
import SectionTitle from "@/components/SectionTitle";
import fetchData from "@/services/course";
import { useEffect, useState } from "react";

export default function index() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await fetchData();

        if (data) {
          setCourses(data);
          setLoading(false);
        } else {
          setError("No courses available");
          setLoading(false);
        }
      } catch (error) {
        setError("Error fetching courses");
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="wrapper py-10">
      <SectionTitle
        span="Courses"
        h2="Browse all courses"
        p="Learn the most in-demand skills with online courses in coding, business, marketing and more."
      />

      <div className="mt-10 grid grid-cols-3 gap-5 ">
      {loading && <p>Loading...</p>}
        {error && <p>Something went wrong: {error.message}</p>}
        {courses.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
