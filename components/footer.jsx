import { data } from 'autoprefixer'
import Link from 'next/link'
import React from 'react'

export default function footer() {
  return (
    // year copy right project name
    <div className="h-20 bg-black text-gray-400 flex ">
      <p className="wrapper flex justify-between items-center">
        <span>&copy;{new Date().getFullYear()}  Course</span>
        
        <span>Privacy Policy</span>

      </p>
    </div>
  )
}
