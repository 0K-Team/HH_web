"use client"
import { useState } from "react";
import fetchCalculation from "../api/calc";

interface FormData {
    transport: {
        car_usage: number;
        fuel_type: number;
        weekly_km: number;
        flight_frequency: number;
        public_transport_usage: number;
    };
    energy: {
        energy_source: number;
        water_heating_source: number;
        monthly_kWh: number;
        energy_efficiency: number;
    };
    water: {
        shower_time: number;
        bathtub_usage: number;
    };
    waste: {
        waste_segregation: number;
        food_waste: number;
        plastic_usage: number;
    };
    food: {
        meat_consumption: number;
        local_food_preference: number;
    };
    leisure: {
        movie_watch_time: number;
        shopping_frequency: number;
    };
}

const Calculator = () => {
    const [formData, setFormData] = useState<FormData>({
        transport: {
            car_usage: 0,
            fuel_type: 0,
            weekly_km: 0,
            flight_frequency: 0,
            public_transport_usage: 0,
        },
        energy: {
            energy_source: 0,
            water_heating_source: 0,
            monthly_kWh: 0,
            energy_efficiency: 0,
        },
        water: {
            shower_time: 0,
            bathtub_usage: 0,
        },
        waste: {
            waste_segregation: 0,
            food_waste: 0,
            plastic_usage: 0,
        },
        food: {
            meat_consumption: 0,
            local_food_preference: 0,
        },
        leisure: {
            movie_watch_time: 0,
            shopping_frequency: 0,
        },
    });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        const [category, field] = name.split(".");
        setFormData((prevData) => ({
            ...prevData,
            [category]: {
                ...prevData[category as keyof FormData],
                [field]: Number(value),
            },
        }));
    };

    interface CalculationResult {
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

    const [result, setResult] = useState<CalculationResult | null>(null);
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await fetchCalculation(formData);
        setResult(result);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Car Usage:</label>
                    <select name="transport.car_usage" value={formData.transport.car_usage} onChange={handleChange}>
                        <option value={0}>Low</option>
                        <option value={1}>Medium</option>
                        <option value={2}>High</option>
                        <option value={3}>Very High</option>
                    </select>
                </div>
                <div>
                    <label>Fuel Type:</label>
                    <select name="transport.fuel_type" value={formData.transport.fuel_type} onChange={handleChange}>
                        <option value={0}>Petrol</option>
                        <option value={1}>Diesel</option>
                        <option value={2}>Electric</option>
                        <option value={3}>Hybrid</option>
                        <option value={4}>Other</option>
                    </select>
                </div>
                <div>
                    <label>Weekly KM:</label>
                    <select name="transport.weekly_km" value={formData.transport.weekly_km} onChange={handleChange}>
                        <option value={0}>0-25</option>
                        <option value={1}>26-100</option>
                        <option value={2}>101-225</option>
                        <option value={3}>226-500</option>
                    </select>
                </div>
                <div>
                    <label>Flight Frequency:</label>
                    <select name="transport.flight_frequency" value={formData.transport.flight_frequency} onChange={handleChange}>
                        <option value={0}>Never</option>
                        <option value={1}>Rarely</option>
                        <option value={2}>Often</option>
                        <option value={3}>Very Often</option>
                    </select>
                </div>
                <div>
                    <label>Public Transport Usage:</label>
                    <select name="transport.public_transport_usage" value={formData.transport.public_transport_usage} onChange={handleChange}>
                        <option value={0}>Never</option>
                        <option value={1}>Rarely</option>
                        <option value={2}>Often</option>
                        <option value={3}>Very Often</option>
                    </select>
                </div>
                <div>
                    <label>Energy Source:</label>
                    <select name="energy.energy_source" value={formData.energy.energy_source} onChange={handleChange}>
                        <option value={0}>Coal</option>
                        <option value={1}>Gas</option>
                        <option value={2}>Renewable</option>
                        <option value={3}>Nuclear</option>
                    </select>
                </div>
                <div>
                    <label>Water Heating Source:</label>
                    <select name="energy.water_heating_source" value={formData.energy.water_heating_source} onChange={handleChange}>
                        <option value={0}>Coal</option>
                        <option value={1}>Gas</option>
                        <option value={2}>Renewable</option>
                        <option value={3}>Nuclear</option>
                    </select>
                </div>
                <div>
                    <label>Monthly kWh:</label>
                    <select name="energy.monthly_kWh" value={formData.energy.monthly_kWh} onChange={handleChange}>
                        <option value={0}>0-20</option>
                        <option value={1}>21-40</option>
                        <option value={2}>41-60</option>
                        <option value={3}>61-80</option>
                    </select>
                </div>
                <div>
                    <label>Energy Efficiency:</label>
                    <select name="energy.energy_efficiency" value={formData.energy.energy_efficiency} onChange={handleChange}>
                        <option value={0}>Low</option>
                        <option value={1}>Medium</option>
                        <option value={2}>High</option>
                    </select>
                </div>
                <div>
                    <label>Shower Time:</label>
                    <select name="water.shower_time" value={formData.water.shower_time} onChange={handleChange}>
                        <option value={0}>0-5 min</option>
                        <option value={1}>6-10 min</option>
                        <option value={2}>11-15 min</option>
                        <option value={3}>16+ min</option>
                    </select>
                </div>
                <div>
                    <label>Bathtub Usage:</label>
                    <select name="water.bathtub_usage" value={formData.water.bathtub_usage} onChange={handleChange}>
                        <option value={0}>Never</option>
                        <option value={1}>Rarely</option>
                        <option value={2}>Often</option>
                        <option value={3}>Very Often</option>
                    </select>
                </div>
                <div>
                    <label>Waste Segregation:</label>
                    <select name="waste.waste_segregation" value={formData.waste.waste_segregation} onChange={handleChange}>
                        <option value={0}>Low</option>
                        <option value={1}>Medium</option>
                        <option value={2}>High</option>
                    </select>
                </div>
                <div>
                    <label>Food Waste:</label>
                    <select name="waste.food_waste" value={formData.waste.food_waste} onChange={handleChange}>
                        <option value={0}>Low</option>
                        <option value={1}>Medium</option>
                        <option value={2}>High</option>
                        <option value={3}>Very High</option>
                    </select>
                </div>
                <div>
                    <label>Plastic Usage:</label>
                    <select name="waste.plastic_usage" value={formData.waste.plastic_usage} onChange={handleChange}>
                        <option value={0}>High</option>
                        <option value={1}>Medium</option>
                        <option value={2}>Low</option>
                        <option value={3}>None</option>
                    </select>
                </div>
                <div>
                    <label>Meat Consumption:</label>
                    <select name="food.meat_consumption" value={formData.food.meat_consumption} onChange={handleChange}>
                        <option value={0}>Very High</option>
                        <option value={1}>High</option>
                        <option value={2}>Medium</option>
                        <option value={3}>Low</option>
                        <option value={4}>None</option>
                    </select>
                </div>
                <div>
                    <label>Local Food Preference:</label>
                    <select name="food.local_food_preference" value={formData.food.local_food_preference} onChange={handleChange}>
                        <option value={0}>Low</option>
                        <option value={1}>Medium</option>
                        <option value={2}>High</option>
                        <option value={3}>Very High</option>
                    </select>
                </div>
                <div>
                    <label>Movie Watch Time:</label>
                    <select name="leisure.movie_watch_time" value={formData.leisure.movie_watch_time} onChange={handleChange}>
                        <option value={0}>0-1 hr</option>
                        <option value={1}>1-2 hr</option>
                        <option value={2}>2-3 hr</option>
                        <option value={3}>3+ hr</option>
                    </select>
                </div>
                <div>
                    <label>Shopping Frequency:</label>
                    <select name="leisure.shopping_frequency" value={formData.leisure.shopping_frequency} onChange={handleChange}>
                        <option value={0}>Rarely</option>
                        <option value={1}>Occasionally</option>
                        <option value={2}>Frequently</option>
                    </select>
                </div>
                <button type="submit">Calculate</button>
            </form>
            {result && (
                <div>
                    <h2>Calculation Result</h2>
                    <p>Total Emission per Week: {result.total_emission_week} kg CO2</p>
                    <h3>Specific Emissions</h3>
                    <ul>
                        <li>Car: {result.specific_emission.car} kg CO2</li>
                        <li>Plane: {result.specific_emission.plane} kg CO2</li>
                        <li>Public Transport: {result.specific_emission.public_transport} kg CO2</li>
                        <li>Energy: {result.specific_emission.energy} kg CO2</li>
                        <li>Water: {result.specific_emission.water} kg CO2</li>
                        <li>Garbage: {result.specific_emission.garbage} kg CO2</li>
                        <li>Food: {result.specific_emission.food} kg CO2</li>
                        <li>Watch Time: {result.specific_emission.watch_time} kg CO2</li>
                        <li>Shopping: {result.specific_emission.shopping} kg CO2</li>
                    </ul>
                    <h3>AI Suggestion</h3>
                    <p>{result.AI_suggestion}</p>
                </div>
            )}
        </div>
    );
};

export default Calculator;