"use client"
import React, {useEffect, useState} from "react";
import Form from "next/form";
import {changeFirstName, changeLastName, changeUsername, fetchLoggedUser} from "@/app/api/user";
import {User} from "@/app/types/user";
const profileOptions = () => {
    const [user, setUser] = useState<User | null>(null)
    useEffect(() => {
        fetchLoggedUser()
            .then((user) => setUser(user));
    }, []);

    const [username, setUsername] = useState<string>(user?.username || "");
    const [firstName, setFirstName] = useState<string>(user?.fullName.givenName || "");
    const [lastName, setLastName] = useState<string>(user?.fullName.familyName || "");
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
        } catch (e:any) {
            setError(e.message);
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
export default profileOptions;