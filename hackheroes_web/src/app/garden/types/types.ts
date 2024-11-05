// types.ts

export interface Plant {
    _id: string;
    name: string;
    type: string;
    growthStage: number;
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