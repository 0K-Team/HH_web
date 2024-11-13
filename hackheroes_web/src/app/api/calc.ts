const baseUrl = "/api/v1/calc";

interface Transport {
    car_usage: number;
    fuel_type: number;
    weekly_km: number;
    flight_frequency: number;
    public_transport_usage: number;
}

interface Energy {
    energy_source: number;
    water_heating_source: number;
    monthly_kWh: number;
    energy_efficiency: number;
}

interface Water {
    shower_time: number;
    bathtub_usage: number;
}

interface Waste {
    waste_segregation: number;
    food_waste: number;
    plastic_usage: number;
}

interface Food {
    meat_consumption: number;
    local_food_preference: number;
}

interface Leisure {
    movie_watch_time: number;
    shopping_frequency: number;
}

interface RequestBody {
    transport: Transport;
    energy: Energy;
    water: Water;
    waste: Waste;
    food: Food;
    leisure: Leisure;
}

interface Response {
    total_emission_week: number;
    specific_emission: {
        car: number;
        plane: number;
        public_transport: number;
        energy: number;
        water: number;
        garbage: number;
        food: number;
        watch_time: number;
        shopping: number;
    };
    AI_suggestion: string;
}

async function fetchCalculation(data: RequestBody): Promise<Response> {
    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Network response was not ok");
    }

    return response.json();
}

export default fetchCalculation;
