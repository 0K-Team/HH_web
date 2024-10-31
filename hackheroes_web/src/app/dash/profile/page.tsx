"use client"
import React, {useEffect, useState} from "react";
import {changeFirstName, changeLastName, changeUsername, fetchLoggedUser} from "@/app/api/user";
const ProfileOptions = () => {
    useEffect(() => {
        fetchLoggedUser()
            .then((user) => {
                setUsername(user?.username || "")
                setFirstName(user?.fullName.givenName || "")
                setLastName(user?.fullName.familyName || "")
            });
    }, []);

    const [username, setUsername] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
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
        } catch (e) {
            const msg = (e as Error).message;
            setError(msg);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>First name:</label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div>
                <label>Last name:</label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                ></input>
            </div>
            <button type="submit" disabled={loading}>
                {loading ? 'Updating...' : 'Update Profile'}
            </button>
            {error && <p style={{color: 'red'}}>{error}</p>}
            {success && <p style={{color: 'green'}}>{success}</p>}
        </form>
    );
};
export default ProfileOptions;