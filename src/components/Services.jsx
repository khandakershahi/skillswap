import React from 'react';
import { FaStar, FaStarHalf, FaStarHalfAlt, FaUser } from "react-icons/fa";
import { Link, useLoaderData } from 'react-router';




const Services = () => {

    const data = useLoaderData();
    const newData = data.slice(0, 6);

    return (
        <div className='flex flex-col py-15 justify-center '>
            <div className='text-center pb-8'>
                <h5 className='text-accent text-lg' >Courses</h5>
                <h2 className='text-5xl'>Explore Popular Courses</h2>
            </div>

            <div className='grid grid-cols-3 gap-8'>
                {
                    newData.map((skill) => {
                        return <div key={skill.skillId} className="card bg-base-100 shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                            {/* Image */}
                            <figure className="h-48">
                                <img
                                    src={skill.image}
                                    alt="Course Thumbnail"
                                    className="w-full h-full object-cover"
                                />
                            </figure>

                            {/* Content */}
                            <div className="card-body px-6 py-5">
                                {/* Price */}
                                <span className="text-orange-500 font-semibold text-lg uppercase tracking-wide">
                                    ${skill.price}
                                </span>

                                {/* Title */}
                                <h2 className="card-title text-lg font-semibold text-[#0e0a38] leading-snug">
                                    {skill.skillName}
                                </h2>

                                {/* Rating */}
                                <div className="flex items-center gap-1 text-yellow-500 text-sm mt-2">

                                    <span className="text-gray-500 text-sm ml-2">Rating {skill.rating} </span>
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                                </div>
                                <div className="flex items-center gap-1 text-yellow-500 text-sm mt-2">
                                    <span className="text-gray-500 text-sm ml-2">Instructor: {skill.providerName} </span>
                                </div>

                                {/* Divider */}
                                <div className="divider my-3"></div>

                                {/* Footer Info */}
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <Link className='btn btn-accent text-white'>View Detials</Link>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Services;