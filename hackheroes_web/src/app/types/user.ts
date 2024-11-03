// types/gardener.ts
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
    title?: string;
    notifications?: Array<{
        title: string;
        date: Date;
    }>;
    friends?: string[];
    bio?: string;
    achievements?: Array<{
        name: string;
        date_awarded: Date;
    }>;
    skills?: string[];
    badges?: string[];
    location?: string;
    country?: string;
    preferredTopics?: string[];
    points?: number;
    admin?: boolean;
    createdAt?: string;
    configured?: boolean;
}