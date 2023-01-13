import React from 'react'
import cd1 from './cd1.jpg';
import cd2 from './cd2.jpg';
import cd3 from './cd3.jpg';
import { Link } from 'react-router-dom';

export default function CourceSec(props) {
    return (
        <div className="container mx-auto lg:my-2 px-5">
            <div className="flex flex-wrap mx-10">
                <div className='lg:p-10 md:w-1/3 lg:my-2 flex justify-center'>
                    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg">
                        <div>
                            <img className="w-full rounded-t-xl" src={cd1} alt="Cd pic" />
                        </div>
                        <h3 className="py-5 text-2xl mx-5">{props.Watch}</h3>
                        <p className="text-gray-700 text-base px-1 mx-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo inventore beatae at
                            adipisci nisi, totam mollitia consectetur, dolores placeat natus labore illum? Vitae, officiis
                            aliquam?</p>
                        <button
                            className="my-5 px-3 py-2 lg:px-4 lg:py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800 mx-5"> <Link to="/Videos">Watch Vidoes</Link>
                        </button>
                    </div>
                </div>

                <div className='lg:p-10 md:w-1/3 lg:my-2 flex justify-center'>
                    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg">
                        <div>
                            <img className="w-full rounded-t-xl" src={cd2} alt="" />
                        </div>
                        <h3 className="py-5 text-2xl mx-5">{props.Blog}</h3>
                        <p className="text-gray-700 text-base px-1 mx-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo inventore beatae at
                            adipisci nisi, totam mollitia consectetur, dolores placeat natus labore illum? Vitae, officiis
                            aliquam?</p>
                        <button
                            className="my-5 px-3 py-2 lg:px-4 lg:py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800 mx-5"> <Link to="/Blog">Browse Blog</Link>
                        </button>
                    </div>
                </div>

                <div className='lg:p-10 md:w-1/3 lg:my-2 flex justify-center'>
                    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg">
                        <div>
                            <img className="w-full rounded-t-xl" src={cd3} alt="" />
                        </div>
                        <h3 className="py-5 text-2xl mx-5">{props.Contact}</h3>
                        <p className="text-gray-700 text-base px-1 mx-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo inventore beatae at
                            adipisci nisi, totam mollitia consectetur, dolores placeat natus labore illum? Vitae, officiis
                            aliquam?</p>
                        <button
                            className="my-5 mx-5 px-3 py-2 lg:px-4 lg:py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800"> <Link to="/Contact">Contact Me</Link>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
