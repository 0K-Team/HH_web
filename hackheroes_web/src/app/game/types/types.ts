export interface Plant {
    id: string;
    name: string;
    growth_stage: string;
}
export interface UserStats{
    user_id: string;
    ecoPoints: number;
}

export interface PlantDetails {
    id: string;
    name: string;
    description: string;
    growth_stage: string;
}

export interface Seed {
    id: string;
    name: string;
    price: number;
}

export interface Achievement {
    id: string;
    title: string;
    description: string;
}

export interface LeaderboardEntry {
    id: string;
    name: string;
    points: number;
}

export interface FriendGarden {
    friend_id: string;
    plants: Plant[];
}
export interface PlantCardProps {
    name: string;
    growth_stage: string;
    plant_id: string;
}