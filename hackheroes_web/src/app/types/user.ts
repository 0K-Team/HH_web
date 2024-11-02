export interface User {
    id: string;
    email: string;
    username: string;
    fullName:{
        givenName: string;
        familyName: string;
    }
    avatarHash: string;
    provider: "google" | "facebook";
    googleID?: string;
    facebookID?: string;
    title: string;
    notifications: Array<{
        title: string;
        date: string; // ISO 8601 date format (e.g., "2023-01-01T00:00:00Z")
    }>;
    friends: string[];
    bio: string;
    achievements: Array<{
        name: string;
        date_awarded: string; // ISO 8601 date format (e.g., "2023-01-01T00:00:00Z")
    }>;
    skills: string[];
    badges: string[];
    location: string[];
    preferredTopics: string[];
    points: number;
    admin: boolean;
    createdAt: string; // ISO 8601 date format (e.g., "2023-01-01T00:00:00Z")
}