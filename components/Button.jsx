import Link from "next/link";
import React from "react";


export default function Button({ href, placeholder, color, size }) {

    // const ButtonVariance = (color, size) => {
    //     switch (color) {
    //         case "primary":
    //             return "bg-white text-white hover:bg-gray-900 transition-colors";
    //         case "secondary":
    //             return "bg-white text-black hover:bg-gray-900 transition-colors";
    //         default:
    //             return "bg-white text-black hover:bg-gray-900 transition-colors";
    //     }

    //     switch (size) {
    //         case "small":
    //             return "px-3 py-1 text-sm";
    //         case "large":
    //             return "px-5 py-2 text-lg";
    //         default:
    //             return "px-6 py-3 p-5 rounded-md";
    //     }

    // }

  return (
    <Link href={href} >{placeholder}</Link>

  );
}
