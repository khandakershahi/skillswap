import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const MyProfile = () => {
    const { user } = useContext(AuthContext) || {}; // get user info from context
    const { displayName, email, photoURL } = user || {};
    const [editing, setEditing] = useState(false);
    const [newName, setNewName] = useState(displayName || "");
    const [newPhoto, setNewPhoto] = useState(photoURL || "");
    const [message, setMessage] = useState("");

    // Handle profile update
    const handleUpdate = async (e) => {
        e.preventDefault();
        if (!user) return;

        try {
            await updateProfile(user, {
                displayName: newName,
                photoURL: newPhoto,
            });
            setMessage("Profile updated successfully ✅");
            setEditing(false);
            window.location.reload(); // Refresh to show updated data
        } catch (error) {
            setMessage("Error updating profile: " + error.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">My Profile</h2>

                <div className="flex flex-col items-center">
                    <img
                        src={
                            photoURL ||
                            "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        }
                        alt="User Avatar"
                        className="w-24 h-24 object-cover rounded-full border-4 border-indigo-500 mb-4"
                    />
                    <h3 className="text-lg font-medium text-gray-700">
                        {displayName || "Anonymous User"}
                    </h3>
                    <p className="text-gray-500">{email || "No email provided"}</p>

                    <button
                        onClick={() => setEditing(!editing)}
                        className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all duration-200"
                    >
                        {editing ? "Cancel" : "Update Profile"}
                    </button>

                    {editing && (
                        <form onSubmit={handleUpdate} className="mt-6 w-full text-left">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-medium mb-1">
                                    New Name
                                </label>
                                <input
                                    type="text"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                    placeholder="Enter new name"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-medium mb-1">
                                    New Photo URL
                                </label>
                                <input
                                    type="text"
                                    value={newPhoto}
                                    onChange={(e) => setNewPhoto(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                    placeholder="Enter photo URL"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition-all duration-200"
                            >
                                Save Changes
                            </button>
                        </form>
                    )}

                    {message && (
                        <p className="mt-4 text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-lg">
                            {message}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
