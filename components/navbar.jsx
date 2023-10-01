import React from "react";
import Link from "next/link";
import Button from "@/components/Button";
import { defaults } from "autoprefixer";

export default function navbar() {
  return (
    <div
      className="h-20 bg-black text-gray-400 flex 
     items-center"
    >
      <div className="wrapper  flex justify-between">
        <Link href="/" className=" text-white font-semibold">
          Course
        </Link>
        <div className=" flex gap-5">
          <Link href="/" className=" hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/courses" className=" hover:text-white transition-colors">
            Courses
          </Link>
          <Link href="/about" className=" hover:text-white transition-colors">
            About
          </Link>
          <Link href="/contact" className=" hover:text-white transition-colors">
            Contact
          </Link>
        </div>
        <div>
          <Link
            className=" bg-rose-500 text-white hover:text-gray-900 transition-colors px-6 py-3 p-5 rounded-md"
            href="users/login"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
