import { CurrentFormetter} from "@/Utilities/Councey";

import React from "react";
import Button from "@/components/Button";
import Link from "next/link";

export default function CourseItem({ course, loading, error }) {
  return (
    <div>
      {course && (
        <div className="w-full lg:[30rem] shadow-md rounded-md overflow-hidden ">
          <div className="w-full h-[20rem] overflow-hidden flex justify-center">
            <img
              src={course.cover}
              alt={course.title}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-5 space-y-2  w-full">
            <h1 className=" text-3xl font-medium">{course.title}</h1>
            <p className=" flex  justify-between">
              <span>
                By{" "}
                <span className=" text-black font-semibold">
                  {course.instructor}
                </span>
              </span>
              <span className=" ">
                Duration:{" "}
                <span className=" text-black font-semibold">
                  {course.duration}
                </span>
              </span>
            </p>
            <p>
              <span className=" font-semibold text-black">{course.rating}</span>
            </p>
            <p className=" text-gray-500">{course.description.substring(0, 100)}...</p>
            <div className=" flex justify-between items-center">
              <p className=" text-lg font-semibold">
                {CurrentFormetter(parseFloat(course.price))}
  

                </p>
              <Link className="text-white font-semibold bg-black px-6 py-3 rounded-md hover:bg-gray-900 transition-colors"
               href={`/courses/${course.id}`}  >view deatiles</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
