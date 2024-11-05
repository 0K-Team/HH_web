import { Plant, PlantDetails, Seed, Achievement, LeaderboardEntry, FriendGarden, UserStats } from '../types/types';
import { UserGardenData } from '../types';

const baseUrl = '/api/v1/';

export const fetchUserStats = async (): Promise<UserStats[]> => {
    const response = await fetch(`${baseUrl}/garden/me`);
    return await response.json() as UserStats[];
};
export const fetchAchievements = async (): Promise<Achievement[]> => {
    const response = await fetch(`${baseUrl}user/achievements`);
    return await response.json() as Achievement[];
};

export const fetchGardenData = async (): Promise<UserGardenData> => {
    const response = await fetch('/garden/me', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch garden data');
    }

    const data: UserGardenData = await response.json();
    return data;
};

export const fetchPlantDetails = async (id: string): Promise<PlantDetails> => {
    const response = await fetch(`${baseUrl}plants/${id}`);
    return await response.json() as PlantDetails;
};

export const fetchSeeds = async (): Promise<Seed[]> => {
    const response = await fetch(`${baseUrl}seeds`);
    return await response.json() as Seed[];
};

export const purchaseSeed = async (seedId: string): Promise<void> => {
    const response = await fetch(`${baseUrl}purchase/${seedId}`, {
        method: 'POST'
    });
    if (!response.ok) {
        throw new Error('Failed to purchase seed.');
    }
};

export const fetchLeaderboard = async (): Promise<LeaderboardEntry[]> => {
    const response = await fetch(`${baseUrl}leaderboard`);
    return await response.json() as LeaderboardEntry[];
};

export const fetchFriendGardens = async (): Promise<FriendGarden[]> => {
    const response = await fetch(`${baseUrl}friend-gardens`);
    return await response.json() as FriendGarden[];
};