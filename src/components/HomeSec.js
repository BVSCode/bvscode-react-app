import React from 'react'
import logo from './bvslogo.png';
import { Link } from 'react-router-dom';


export default function HomeSec() {
    return (
        <div className=" bg-gray-100">
            <div className="bg-gray-100 container mx-auto">
                <div className="flex items-center text-center py-12 m-auto px-8 lg:w-[70%]">
                    <div>
                        <span>
                            <img src={logo} className="max-h-32 rounded-full m-auto" alt="" />
                        </span>
                        <h1 className="text-3xl font-semibold text-gray-800 md:text-4xl mt-5">Welcome To The <span
                            className="text-indigo-600">BVSCode Zone.</span></h1>
                        <p className="mt-2 text-sm text-gray-500 md:text-base lg:text-lg lg:pt-5 lg:px-12">
                            Confused on where to go? I have got you covered. Browse Vidoes and find out the best for you. Its free! BVSCode is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn.</p>
                        <div className="flex justify-center mt-6">
                            <button
                                className="px-3 py-2 lg:px-4 lg:py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800"> <Link to="/Videos">Watch Videos</Link>
                            </button>
                            <button
                                className="px-3 py-2 mx-4 lg:px-4 lg:py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400"> <Link to="/Blog">Explore Blog</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
