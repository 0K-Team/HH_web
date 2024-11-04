import { redirect } from "next/navigation";
import { User } from "../types/user";
const baseUrl = '/api/v1/';

export const fetchLoggedUser = async (): Promise<User> => {
    const response = await fetch(`${baseUrl}user/me`);
    return await response.json() as User;
};
export const getUserData = async (id: string): Promise<User> => {
    const response = await fetch(`${baseUrl}/user/${id}`, {
        method: 'GET'
    });
    return await response.json() as User;
};
export const changeUsername = async (name: string): Promise<User> => {
    const response = await fetch(`${baseUrl}user/me/username`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: name })
    });
    return await response.json() as User;
}

export const changeFirstName = async (name: string): Promise<User> => {
    const response = await fetch(`${baseUrl}user/me/firstName`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName: name })
    });
    return await response.json() as User;
}

export const changeLastName = async (name: string): Promise<User> => {
    const response = await fetch(`${baseUrl}user/me/lastName`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ lastName: name })
    });
    return await response.json() as User;
}

export const changeBio = async (name: string): Promise<User> => {
    const response = await fetch(`${baseUrl}user/me/bio`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ bio: name })
    });
    return await response.json() as User;
}

export const changeLocation = async (name: string): Promise<User> => {
    const response = await fetch(`${baseUrl}user/me/location`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ location: name })
    });
    return await response.json() as User;
}

export const logout = async () => {
    try {
        document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        redirect("/");
    } catch (error) {
        console.error(error);
    }
}