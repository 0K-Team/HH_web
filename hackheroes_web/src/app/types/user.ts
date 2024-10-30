// types/user.ts
export interface User {
    id: string;
    email: string;
    username: string;
    fullName: {
        givenName: string;
        familyName: string;
    };
    avatarHash: string;
    provider: 'google' | 'facebook';
    googleID?: string;
    facebookID?: string;
    title?: {
        name: string;
    };
    notifications: Array<{
        title: string;
        date: Date;
    }>;
    friends?: string[];
    bio?: string;
    achievements: Array<{
        name: string;
        date_awarded: Date;
    }>;
    skills: string[];
    badges?: Array<{
        name: string;
        description: string;
    }>;
    location?: {
        type: string;
        coordinates: [number, number];
    };
    preferred_topics: string[];
    points: number;
}
