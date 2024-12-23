import { User } from "../types/user";
const baseUrl = '/api/v1/user';

export const fetchLoggedUser = async (): Promise<User> => {
    const response = await fetch(`${baseUrl}/me`);
    if (!response.ok) {
        return Promise.reject(new Error(`Failed to fetch user: ${response.statusText}`));
    }
    return await response.json() as User;
};

export const getUserData = async (id: string): Promise<User> => {
    const response = await fetch(`${baseUrl}/${id}`, {
        method: 'GET'
    });
    return await response.json() as User;
};
export const changeUsername = async (name: string): Promise<User> => {
    const response = await fetch(`${baseUrl}/me/username`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: name })
    });
    return await response.json() as User;
}

export const changeFirstName = async (name: string): Promise<User> => {
    const response = await fetch(`${baseUrl}/me/firstName`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName: name })
    });
    return await response.json() as User;
}

export const changeLastName = async (name: string): Promise<User> => {
    const response = await fetch(`${baseUrl}/me/lastName`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ lastName: name })
    });
    return await response.json() as User;
}

export const changeBio = async (name: string): Promise<User> => {
    const response = await fetch(`${baseUrl}/me/bio`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ bio: name })
    });
    return await response.json() as User;
}

export const changeLocation = async (name: string): Promise<User> => {
    const response = await fetch(`${baseUrl}/me/location`, {
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
        window.location.href = "/";
    } catch (error) {
        console.error(error);
    }
}