"use client";
import React, { useEffect, useState } from "react";
import {
    changeFirstName,
    changeLastName,
    changeUsername,
    changeLocation,
    fetchLoggedUser,
    changeBio,
} from "@/app/api/user";

const ProfileOptions = () => {
    useEffect(() => {
        fetchLoggedUser().then((user) => {
            setUsername(user?.username || "");
            setFirstName(user?.fullName.givenName || "");
            setLastName(user?.fullName.familyName || "");
            setLocation(user?.location || "");
            setBio(user?.bio || "");
        });
    }, []);

    const [username, setUsername] = useState<string>("");
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
            await changeUsername(username);
            await changeFirstName(firstName);
            await changeLastName(lastName);
            await changeLocation(location);
            await changeBio(bio);
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
        <form
            onSubmit={handleSubmit}
            className="bg-gray-dark text-white p-6 rounded-lg shadow-lg max-w-md mx-auto"
        >
            <h1 className="text-2xl font-bold mb-4 text-green-green">Update Profile</h1>

            {/* Username Field */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Nazwa użytkownika:</label>
                <div className="flex items-center">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 bg-gray-light text-white border border-green-green rounded-lg focus:outline-none focus:ring-2 focus:ring-green-green"
                    />
                </div>
            </div>

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


            {/* Submit Button */}
            <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 px-4 bg-green-green text-black font-bold rounded-lg transition duration-300 ${
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
    );
};

export default ProfileOptions;