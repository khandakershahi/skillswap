import React from "react";
import { FaAward, FaChalkboardTeacher, FaLock, FaHeadset } from "react-icons/fa";

const WhyChoose = () => {
    const features = [
        {
            icon: <FaAward className="text-4xl text-orange-500 mb-3" />,
            title: "High Quality Courses",
            desc: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim.",
        },
        {
            icon: <FaChalkboardTeacher className="text-4xl text-orange-500 mb-3" />,
            title: "Expert Instructors",
            desc: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim.",
        },
        {
            icon: <FaLock className="text-4xl text-orange-500 mb-3" />,
            title: "Life Time Access",
            desc: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim.",
        },
        {
            icon: <FaHeadset className="text-4xl text-orange-500 mb-3" />,
            title: "Dedicated Support",
            desc: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim.",
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Left Text Section */}
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0b0b33] mb-4">
                        Why Choose Us?
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
                        Quisque volutpat mattis eros.
                    </p>
                    <p className="text-gray-600 mb-6">
                        Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 font-semibold rounded transition duration-300">
                        Learn More
                    </button>
                </div>

                {/* Right Feature Section */}
                <div className="grid sm:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-start">
                            {feature.icon}
                            <h3 className="text-lg font-semibold text-[#0b0b33] mb-1">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
