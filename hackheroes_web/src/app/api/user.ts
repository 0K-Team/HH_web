import { User } from "../types/user";
const baseUrl = '/api/v1/';

export const fetchLoggedUser = async (): Promise<User> => {
    // Mock data based on the User interface
    const mockUser: User = {
        id: "1",
        email: "user@example.com",
        username: "mockuser",
        fullName: {
            givenName: "Mock",
            familyName: "User"
        },
        avatarHash: "mockhash",
        provider: 'google',
        googleID: "mockgoogleid",
        facebookID: "mockfacebookid",
        title: "Mock Title",
        notifications: [
            {
                title: "Mock Notification",
                date: new Date("2024-11-02T10:55:49.045Z")
            }
        ],
        friends: ["friend1", "friend2"],
        bio: "This is a mock bio.",
        achievements: [
            {
                name: "Mock Achievement",
                date_awarded: new Date("2024-11-02T10:55:49.046Z")
            }
        ],
        skills: ["skill1", "skill2"],
        badges: ["badge1", "badge2"],
        location: "Mock Location",
        country: "Mock Country",
        preferredTopics: ["topic1", "topic2"],
        points: 100,
        admin: true,
        createdAt: "2024-11-02T10:55:49.046Z",
        configured: true
    };

    return new Promise((resolve) => {
        setTimeout(() => resolve(mockUser), 1000); // Simulate async fetch with a delay
    });
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