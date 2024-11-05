// types.ts

export interface Plant {
    _id: string;
    name: string;
    type: string;
    growthStage: string;
    fertilizerNeeded: number;
    planted: string;
    lastWatered: string;
    lastFertilized: string;
    harvestable: boolean;
    weedsRemovedNeeded: number;
}

export interface UserActions {
    wateringCount: number;
    wateringMaxCount: number;
    wateringRefill: string;
    fertilizingCount: number;
    fertilizingMaxCount: number;
    fertilizingRefill: string;
    weedsRemoved: number;
    weedsMaxRemoved: number;
    weedsRefill: string;
}

export interface UserGardenData {
    user: string;
    plants: Plant[];
    userActions: UserActions;
}
// In types.ts
export interface PlantCardProps {
    name: string;
    growth_stage: string;
    plant_id: string;
}
// types.ts
export interface PlantDetails {
    id: string;
    name: string;
    description: string;
    growth_stage: string;
}

export interface Seed {
    id: string;
    name: string;
    description: string;
}

export interface Achievement {
    id: string;
    name: string;
    description: string;
}

export interface LeaderboardEntry {
    user_id: string;
    username: string;
    score: number;
}

export interface FriendGarden {
    user_id: string;
    garden_name: string;
    plants: Plant[];
}

export interface UserStats {
    user_id: string;
    username: string;
    level: number;
    experience: number;
    ecoPoints: number;
}
export interface PlantCardProps {
    name: string;
    growth_stage: string;
    plant_id: string;
}