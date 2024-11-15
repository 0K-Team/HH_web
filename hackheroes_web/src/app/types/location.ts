export interface Location {
    _id: {
        $oid: string;
    };
    name: string;
    coordinates: {
        latitude: number;
        longitude: number;
    };
    address: string;
    type: string;
    description: string;
    image: string | null;
    opening_hours: {
        monday: string;
        tuesday: string;
        wednesday: string;
        thursday: string;
        friday: string;
        saturday: string;
        sunday: string;
    };
}