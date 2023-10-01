import { CurrentFormetter } from "@/Utilities/Councey";
import Singlecourse from "@/services/singleCourse";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Singlecou() {
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { courseId } = router.query;

  useEffect(() => {
    const getData = async () => {
      const course = await Singlecourse(courseId);
      setLoading(false);
      if (course?.error) {
        setError(course.error);
        return;
      }
      setCourse(course);
    };
    getData();
  }, [courseId]);

  return (
    <div className="wrapper py-10 min-h-screen">
      <div
        style={{
          backgroundImage: `url(${course.cover})`,
        }}
        className="w-full h-[28rem] bg-no-repeat bg-cover bg-center"
      ></div>
        <div className="mt-10 lg:grid grid-cols-2 lg:gap-10 space-y-2 lg:space-y-2">
        <div className=" space-y-2">
          <h2 className=" mt-2 text-3xl font-semibold text-gray-800">
            {course.title}
          </h2>
          <p className="mt-2 text-gray-600"> <span className=" text-black font-semibold"> instructor:</span> {course.instructor}</p>
          <p className="mt-2 text-gray-600">
            {" "}
           <span className=" text-black font-semibold"> description</span>: {course.description}
          </p>
        </div>
        <div className=" space-y-2 ">
          <p className="mt-2 text-gray-600"> <span className=" text-black font-semibold">Duration: </span>{course.duration}</p>
          <p className="mt-2 text-gray-600"> <span className=" text-black font-semibold"> Rating: </span>{course.rating}</p>
          <p className="mt-2  text-gray-600"> <span className=" text-black font-semibold"> Price: </span>{course.price}</p>
          <Link
            href={"/checkout"}
           
          >
          <span className="text-white bg-blue-600 rounded hover:bg-blue-700 px-4 py-2 w-full mt-3 cursor-pointer inline-block text-center">Checkout</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
