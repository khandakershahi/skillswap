import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { FaUser, FaStar, FaEnvelope, FaTag, FaLayerGroup } from "react-icons/fa";
import { toast } from "react-hot-toast";

const SkillsDetails = () => {
    const { id } = useParams();
    const skills = useLoaderData();

    const filteredSkill = skills.find((single) => single.skillId == id);

    const [formData, setFormData] = useState({ name: "", email: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("✅ Session booked successfully!");
        setFormData({ name: "", email: "" });
    };

    if (!filteredSkill) {
        return (
            <div className="flex justify-center items-center h-screen text-xl font-semibold text-gray-500">
                Skill not found 😢
            </div>
        );
    }

    return (
        <div className="bg-base-200 py-16">
            <div className="max-w-[1320px] mx-auto px-4">
                {/* Skill Card */}
                <div className="card bg-white shadow-xl mb-10">
                    <figure>
                        <img
                            src={filteredSkill.image}
                            alt={filteredSkill.skillName}
                            className="w-full h-[400px] object-cover rounded-t-xl"
                        />
                    </figure>

                    <div className="card-body">
                        <h1 className="text-4xl font-bold text-secondary">
                            {filteredSkill.skillName}
                        </h1>
                        <p className="text-gray-600 mt-3 leading-relaxed">
                            {filteredSkill.description}
                        </p>

                        {/* Info Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 text-gray-700">
                            <div className="flex items-center gap-2">
                                <FaUser className="text-accent" />
                                <span className="font-medium">
                                    Instructor: {filteredSkill.providerName}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaEnvelope className="text-accent" />
                                <span>{filteredSkill.providerEmail}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaStar className="text-accent" />
                                <span>Rating: {filteredSkill.rating}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaLayerGroup className="text-accent" />
                                <span>Category: {filteredSkill.category}</span>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="mt-6 text-gray-700 flex flex-wrap gap-4">
                            <div className="badge badge-outline badge-lg p-4 text-base">
                                💰 Price: ${filteredSkill.price}
                            </div>
                            <div className="badge badge-outline badge-lg p-4 text-base">
                                🎟️ Slots Available: {filteredSkill.slotsAvailable}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Book Session Section */}
                <div className="card bg-white shadow-xl p-8 max-w-lg mx-auto">
                    <h2 className="text-2xl font-bold text-secondary mb-6">
                        Book a Session
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                            required
                            className="input input-bordered w-full"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                            required
                            className="input input-bordered w-full"
                        />
                        <button type="submit" className="btn btn-primary w-full">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SkillsDetails;
