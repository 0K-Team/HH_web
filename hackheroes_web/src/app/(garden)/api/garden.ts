import { UserGardenData, Plant, UserActions } from '../types/types';

export const fetchGardenData = async (): Promise<UserGardenData> => {
    const response = await fetch('/api/v1/garden/me');
    if (!response.ok) {
        throw new Error('Failed to fetch garden data');
    }
    const data: UserGardenData = await response.json();
    return data;
};
export const fetchPlantsData = async (): Promise<Plant[]> => {
    const response = await fetch('/api/v1/garden/me');
    if (!response.ok) {
        throw new Error('Failed to fetch garden data');
    }
    const data = await response.json();
    return data.plants;
};
export const fetchUserActions = async (): Promise<UserActions> => {
    const response = await fetch('/api/v1/garden/me');
    if (!response.ok) {
        throw new Error('Failed to fetch user actions');
    }
    const data: UserActions = await response.json();
    return data;
};