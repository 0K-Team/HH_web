"use client";
import React, { useEffect, useState } from "react";
import {
    changeFirstName,
    changeLastName,
    changeLocation,
    fetchLoggedUser,
    changeBio,
} from "@/app/api/user";

const ProfileOptions = () => {
    useEffect(() => {
        fetchLoggedUser().then((user) => {
            setFirstName(user?.fullName.givenName || "");
            setLastName(user?.fullName.familyName || "");
            setLocation(user?.location || "");
            setBio(user?.bio || "");
        });
    }, []);

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [bio, setBio] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");
        try {
            await changeFirstName(firstName);
            await changeLastName(lastName);
            await changeLocation(location);
            console.log("Bio:", bio); // Add this line to debug
            await changeBio(bio);
            console.log("Bio:", bio); // Add this line to debug
            setSuccess("Profile updated successfully!");
            setLoading(false);
            setTimeout(() => {
                window.location.href = "/dash";
            }, 500);
        } catch (e) {
            const msg = (e as Error).message;
            setError(msg);
            setLoading(false);
        }
    };

    return (
        <div className="pt-[8%] h-90%">
            <div className="absolute w-[55vh] h-[55vh] bg-[#29FF77] opacity-10 rounded-full top-[-20vh] right-[13%] blur-3xl"></div>
            <div className="absolute w-[45vh] h-[45vh] bg-[#29FF77] opacity-10 rounded-full top-[-25vh] left-[8%] blur-3xl"></div>
            <div className="absolute w-[40vh] h-[40vh] bg-[#29FF77] opacity-10 rounded-full bottom-2 left-2 blur-3xl"></div>
            <div className="absolute w-[55vh] h-[55vh] bg-[#29FF77] opacity-10 rounded-full bottom-[-5vh] right-2 blur-3xl"></div>
            <form
                onSubmit={handleSubmit}
                className="bg-gray-light text-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
                <h1 className="text-2xl font-bold mb-4 text-green-green">Zaktualizuj informacje</h1>



                {/* First Name Field */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Imię:</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full p-2 bg-gray-light text-white border border-green-green rounded-lg focus:outline-none focus:ring-2 focus:ring-green-green"
                    />
                </div>

                {/* Last Name Field */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Nazwisko:</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full p-2 bg-gray-light text-white border border-green-green rounded-lg focus:outline-none focus:ring-2 focus:ring-green-green"
                    />
                </div>

                {/* Location Field */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Lokalizacja:</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full p-2 bg-gray-light text-white border border-green-green rounded-lg focus:outline-none focus:ring-2 focus:ring-green-green"
                    />
                </div>

                {/* Bio Field */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Bio:</label>
                    <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        maxLength={60}
                        className="w-full p-2 bg-gray-light text-white border border-green-green rounded-lg focus:outline-none focus:ring-2 focus:ring-green-green h-32"
                    />
                    <div className="text-sm text-gray-400">{60 - bio.length} characters remaining</div>
                </div>


                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-2 px-4 bg-green-green text-black font-bold rounded-lg transition duration-300 ease-in-out transform hover:bg-[#22cc66] hover:scale-105 hover:text-white shadow-lg${
                        loading ? "opacity-50 cursor-not-allowed" : "hover:bg-opacity-90"
                    }`}
                >
                    {loading ? "Aktualizowanie..." : "Zaktualizuj Profil"}
                </button>

                {/* Error Message */}
                {error && <p className="mt-4 text-red-500">{error}</p>}

                {/* Success Message */}
                {success && <p className="mt-4 text-green-green">{success}</p>}
            </form>
        </div>
    );
};

export default ProfileOptions;