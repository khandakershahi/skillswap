import React from "react";
import { FaUserPlus, FaSearch, FaHandshake } from "react-icons/fa";

const HowItWorks = () => {
    const steps = [
        {
            icon: <FaUserPlus className="text-4xl text-accent" />,
            title: "1. Create Your Account",
            desc: "Sign up for free and set up your profile to showcase your skills or find what you want to learn.",
        },
        {
            icon: <FaSearch className="text-4xl text-accent" />,
            title: "2. Browse & Connect",
            desc: "Explore local skill listings, filter by category, and connect with learners or providers nearby.",
        },
        {
            icon: <FaHandshake className="text-4xl text-accent" />,
            title: "3. Exchange Skills",
            desc: "Meet up, collaborate, and exchange knowledge while growing your network and learning something new.",
        },
    ];

    return (
        <section className="py-16 sm:py-20 bg-base-200">
            <div className=" mx-auto text-center px-4 sm:px-6 lg:px-8">
                {/* Section Heading */}
                <h5 className="text-accent text-base sm:text-lg font-medium mb-2">
                    Process
                </h5>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-4">
                    How It Works
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-sm sm:text-base">
                    SkillSwap makes it simple to share what you know and learn what you love.
                    Just follow these easy steps to get started.
                </p>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="card bg-white shadow-md hover:shadow-xl border border-base-300 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="card-body items-center text-center p-0">
                                <div className="mb-4">{step.icon}</div>
                                <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
