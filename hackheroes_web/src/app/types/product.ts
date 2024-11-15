export interface Product {
    _id: string;
    name: string;
    category: string;
    brand: string;
    price?: number;
    currency?: string;
    productURL?: string;
    description: string;
    carbonFootprint?: {
        co2Emission?: string;
        unit?: string;
    };
    durability?: string;
    recyclingInfo?: string;
    imageUrl?: string;
    ecoCertification?: string;
    ecoFriendly?: boolean;
}