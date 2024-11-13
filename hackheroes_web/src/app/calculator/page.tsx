"use client"
import { useState } from "react";
import fetchCalculation from "../api/calc";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

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

    const handleChange = (event: React.MouseEvent<HTMLElement>) => {
        const { parentElement, value } = event.target as HTMLInputElement;
        const title = parentElement?.title;
        const [category, field] = title ? title.split(".") : ["", ""];
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
        <div className="flex flex-row">
            <form onSubmit={handleSubmit} className="flex-1 border-r">
                <div className="w-full flex flex-col text-center mt-6">
                    <label className="text-2xl mb-2">Jak często korzystasz z samochodu?</label>
                    <div className="flex justify-center w-full">
                        <ToggleButtonGroup
                        title="transport.car_usage"
                        value={formData.transport.car_usage}
                        exclusive
                        onChange={handleChange}
                        className="flex bg-green w-11/12"
                        >
                            <ToggleButton value={0} className="flex-1">
                                Żadko
                            </ToggleButton>
                            <ToggleButton value={1} className="flex-1">
                                Raz w tygoniu
                            </ToggleButton>
                            <ToggleButton value={2} className="flex-1">
                                Kilka razy w tygodniu
                            </ToggleButton>
                            <ToggleButton value={3} className="flex-1">
                                Codziennie
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
                <br /><hr /><br />
                <div className="w-full flex flex-col text-center">
                    <label className="text-2xl mb-2">Rodzaj paliwa</label>
                    <div className="flex justify-center w-full">
                        <ToggleButtonGroup
                        title="transport.fuel_type"
                        value={formData.transport.fuel_type}
                        exclusive
                        onChange={handleChange}
                        className="flex bg-green w-11/12"
                        >
                            <ToggleButton value={0} className="flex-1">
                                Benzyna
                            </ToggleButton>
                            <ToggleButton value={1} className="flex-1">
                                Diesel
                            </ToggleButton>
                            <ToggleButton value={2} className="flex-1">
                                Elektryczny
                            </ToggleButton>
                            <ToggleButton value={3} className="flex-1">
                                Hybryda
                            </ToggleButton>
                            <ToggleButton value={4} className="flex-1">
                                Inne
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
                <br /><hr /><br />
                <div className="w-full flex flex-col text-center">
                    <label className="text-2xl mb-2">Tygodniowe KM</label>
                    <div className="flex justify-center w-full">
                        <ToggleButtonGroup
                        title="transport.weekly_km"
                        value={formData.transport.weekly_km}
                        exclusive
                        onChange={handleChange}
                        className="flex bg-green w-11/12"
                        >
                            <ToggleButton value={0} className="flex-1">
                                0-25
                            </ToggleButton>
                            <ToggleButton value={1} className="flex-1">
                                26-100
                            </ToggleButton>
                            <ToggleButton value={2} className="flex-1">
                                101-225
                            </ToggleButton>
                            <ToggleButton value={3} className="flex-1">
                                226-500
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
                <br /><hr /><br />
                <div className="w-full flex flex-col text-center">
                    <label className="text-2xl mb-2">Częstotliwość lotów</label>
                    <div className="flex justify-center w-full">
                        <ToggleButtonGroup
                        title="transport.flight_frequency"
                        value={formData.transport.flight_frequency}
                        exclusive
                        onChange={handleChange}
                        className="flex bg-green w-11/12"
                        >
                            <ToggleButton value={0} className="flex-1">
                                Nigdy
                            </ToggleButton>
                            <ToggleButton value={1} className="flex-1">
                                Rzadko
                            </ToggleButton>
                            <ToggleButton value={2} className="flex-1">
                                Często
                            </ToggleButton>
                            <ToggleButton value={3} className="flex-1">
                                Bardzo często
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
                <br /><hr /><br />
                <div className="w-full flex flex-col text-center">
                    <label className="text-2xl mb-2">Korzystanie z transportu publicznego</label>
                    <div className="flex justify-center w-full">
                        <ToggleButtonGroup
                        title="transport.public_transport_usage"
                        value={formData.transport.public_transport_usage}
                        exclusive
                        onChange={handleChange}
                        className="flex bg-green w-11/12"
                        >
                            <ToggleButton value={0} className="flex-1">
                                Nigdy
                            </ToggleButton>
                            <ToggleButton value={1} className="flex-1">
                                Rzadko
                            </ToggleButton>
                            <ToggleButton value={2} className="flex-1">
                                Często
                            </ToggleButton>
                            <ToggleButton value={3} className="flex-1">
                                Bardzo często
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
                <br /><hr /><br />
                <div className="w-full flex flex-col text-center">
                    <label className="text-2xl mb-2">Źródło energii</label>
                    <div className="flex justify-center w-full">
                        <ToggleButtonGroup
                        title="energy.energy_source"
                        value={formData.energy.energy_source}
                        exclusive
                        onChange={handleChange}
                        className="flex bg-green w-11/12"
                        >
                            <ToggleButton value={0} className="flex-1">
                                Węgiel
                            </ToggleButton>
                            <ToggleButton value={1} className="flex-1">
                                Gaz
                            </ToggleButton>
                            <ToggleButton value={2} className="flex-1">
                                Odnawialne
                            </ToggleButton>
                            <ToggleButton value={3} className="flex-1">
                                Nuklearne
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
                <br /><hr /><br />
                <div className="w-full flex flex-col text-center">
                    <label className="text-2xl mb-2">Źródło ogrzewania wody</label>
                    <div className="flex justify-center w-full">
                        <ToggleButtonGroup
                        title="energy.water_heating_source"
                        value={formData.energy.water_heating_source}
                        exclusive
                        onChange={handleChange}
                        className="flex bg-green w-11/12"
                        >
                            <ToggleButton value={0} className="flex-1">
                                Węgiel
                            </ToggleButton>
                            <ToggleButton value={1} className="flex-1">
                                Gaz
                            </ToggleButton>
                            <ToggleButton value={2} className="flex-1">
                                Odnawialne
                            </ToggleButton>
                            <ToggleButton value={3} className="flex-1">
                                Nuklearne
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
                <br /><hr /><br />
                <div className="w-full flex flex-col text-center">
                    <label className="text-2xl mb-2">Miesięczne kWh</label>
                    <div className="flex justify-center w-full">
                        <ToggleButtonGroup
                        title="energy.monthly_kWh"
                        value={formData.energy.monthly_kWh}
                        exclusive
                        onChange={handleChange}
                        className="flex bg-green w-11/12"
                        >
                            <ToggleButton value={0} className="flex-1">
                                0-20
                            </ToggleButton>
                            <ToggleButton value={1} className="flex-1">
                                21-40
                            </ToggleButton>
                            <ToggleButton value={2} className="flex-1">
                                41-60
                            </ToggleButton>
                            <ToggleButton value={3} className="flex-1">
                                61-80
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
                <br /><hr /><br />
                <div className="w-full flex flex-col text-center">
                    <label className="text-2xl mb-2">Efektywność energetyczna</label>
                    <div className="flex justify-center w-full">
                        <ToggleButtonGroup
                        title="energy.energy_efficiency"
                        value={formData.energy.energy_efficiency}
                        exclusive
                        onChange={handleChange}
                        className="flex bg-green w-11/12"
                        >
                            <ToggleButton value={0} className="flex-1">
                                Niska
                            </ToggleButton>
                            <ToggleButton value={1} className="flex-1">
                                Średnia
                            </ToggleButton>
                            <ToggleButton value={2} className="flex-1">
                                Wysoka
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
                <br /><hr /><br />
                <div className="w-full flex flex-col text-center">
                    <label className="text-2xl mb-2">Czas prysznica</label>
                    <div className="flex justify-center w-full">
                        <ToggleButtonGroup
                        title="water.shower_time"
                        value={formData.water.shower_time}
                        exclusive
                        onChange={handleChange}
                        className="flex bg-green w-11/12"
                        >
                            <ToggleButton value={0} className="flex-1">
                                0-5 min
                            </ToggleButton>
                            <ToggleButton value={1} className="flex-1">
                                6-10 min
                            </ToggleButton>
                            <ToggleButton value={2} className="flex-1">
                                11-15 min
                            </ToggleButton>
                            <ToggleButton value={3} className="flex-1">
                                16+ min
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
                <br /><hr /><br />
                <div className="w-full flex flex-col text-center">
                    <label className="text-2xl mb-2">Korzystanie z wanny</label>
                    <div className="flex justify-center w-full">
                        <ToggleButtonGroup
                        title="water.bathtub_usage"
                        value={formData.water.bathtub_usage}
                        exclusive
                        onChange={handleChange}
                        className="flex bg-green w-11/12"
                        >
                            <ToggleButton value={0} className="flex-1">
                                Nigdy
                            </ToggleButton>
                            <ToggleButton value={1} className="flex-1">
                                Rzadko
                            </ToggleButton>
                            <ToggleButton value={2} className="flex-1">
                                Często
                            </ToggleButton>
                            <ToggleButton value={3} className="flex-1">
                                Bardzo często
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
                <br /><hr /><br />
                <div className="w-full flex flex-col text-center">
                    <label className="text-2xl mb-2">Segregacja odpadów</label>
                    <div className="flex justify-center w-full">
                        <ToggleButtonGroup
                        title="waste.waste_segregation"
                        value={formData.waste.waste_segregation}
                        exclusive
                        onChange={handleChange}
                        className="flex bg-green w-11/12"
                        >
                            <ToggleButton value={0} className="flex-1">
                                Niska
                            </ToggleButton>
                            <ToggleButton value={1} className="flex-1">
                                Średnia
                            </ToggleButton>
                            <ToggleButton value={2} className="flex-1">
                                Wysoka
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
                <br /><hr /><br />
                <div className="w-full flex flex-col text-center">
                    <label className="text-2xl mb-2">Marnowanie jedzenia</label>
                    <div className="flex justify-center w-full">
                        <ToggleButtonGroup
                        title="waste.food_waste"
                        value={formData.waste.food_waste}
                        exclusive
                        onChange={handleChange}
                        className="flex bg-green w-11/12"
                        >
                            <ToggleButton value={0} className="flex-1">
                                Niskie
                            </ToggleButton>
                            <ToggleButton value={1} className="flex-1">
                                Średnie
                            </ToggleButton>
                            <ToggleButton value={2} className="flex-1">
                                Wysokie
                            </ToggleButton>
                            <ToggleButton value={3} className="flex-1">
                                Bardzo wysokie
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
                <br /><hr /><br />
                <div className="w-full flex flex-col text-center">
                    <label className="text-2xl mb-2">Użycie plastiku</label>
                    <div className="flex justify-center w-full">
                        <ToggleButtonGroup
                        title="waste.plastic_usage"
                        value={formData.waste.plastic_usage}
                        exclusive
                        onChange={handleChange}
                        className="flex bg-green w-11/12"
                        >
                            <ToggleButton value={0} className="flex-1">
                                Wysokie
                            </ToggleButton>
                            <ToggleButton value={1} className="flex-1">
                                Średnie
                            </ToggleButton>
                            <ToggleButton value={2} className="flex-1">
                                Niskie
                            </ToggleButton>
                            <ToggleButton value={3} className="flex-1">
                                Brak
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
                <br /><hr /><br />
                <div className="w-full flex flex-col text-center">
                    <label className="text-2xl mb-2">Spożycie mięsa</label>
                    <div className="flex justify-center w-full">
                        <ToggleButtonGroup
                        title="food.meat_consumption"
                        value={formData.food.meat_consumption}
                        exclusive
                        onChange={handleChange}
                        className="flex bg-green w-11/12"
                        >
                            <ToggleButton value={0} className="flex-1">
                                Bardzo wysokie
                            </ToggleButton>
                            <ToggleButton value={1} className="flex-1">
                                Wysokie
                            </ToggleButton>
                            <ToggleButton value={2} className="flex-1">
                                Średnie
                            </ToggleButton>
                            <ToggleButton value={3} className="flex-1">
                                Niskie
                            </ToggleButton>
                            <ToggleButton value={4} className="flex-1">
                                Brak
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
                <br /><hr /><br />
                <div className="w-full flex flex-col text-center">
                    <label className="text-2xl mb-2">Preferencje lokalnej żywności</label>
                    <div className="flex justify-center w-full">
                        <ToggleButtonGroup
                        title="food.local_food_preference"
                        value={formData.food.local_food_preference}
                        exclusive
                        onChange={handleChange}
                        className="flex bg-green w-11/12"
                        >
                            <ToggleButton value={0} className="flex-1">
                                Niskie
                            </ToggleButton>
                            <ToggleButton value={1} className="flex-1">
                                Średnie
                            </ToggleButton>
                            <ToggleButton value={2} className="flex-1">
                                Wysokie
                            </ToggleButton>
                            <ToggleButton value={3} className="flex-1">
                                Bardzo wysokie
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
                <br /><hr /><br />
                <div className="w-full flex flex-col text-center">
                    <label className="text-2xl mb-2">Czas oglądania filmów</label>
                    <div className="flex justify-center w-full">
                        <ToggleButtonGroup
                        title="leisure.movie_watch_time"
                        value={formData.leisure.movie_watch_time}
                        exclusive
                        onChange={handleChange}
                        className="flex bg-green w-11/12"
                        >
                            <ToggleButton value={0} className="flex-1">
                                0-1 godz.
                            </ToggleButton>
                            <ToggleButton value={1} className="flex-1">
                                1-2 godz.
                            </ToggleButton>
                            <ToggleButton value={2} className="flex-1">
                                2-3 godz.
                            </ToggleButton>
                            <ToggleButton value={3} className="flex-1">
                                3+ godz.
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
                <br /><hr /><br />
                <div className="w-full flex flex-col text-center mb-10">
                    <label className="text-2xl mb-2">Częstotliwość zakupów</label>
                    <div className="flex justify-center w-full">
                        <ToggleButtonGroup
                        title="leisure.shopping_frequency"
                        value={formData.leisure.shopping_frequency}
                        exclusive
                        onChange={handleChange}
                        className="flex bg-green w-11/12"
                        >
                            <ToggleButton value={0} className="flex-1">
                                Rzadko
                            </ToggleButton>
                            <ToggleButton value={1} className="flex-1">
                                Okazjonalnie
                            </ToggleButton>
                            <ToggleButton value={2} className="flex-1">
                                Często
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
            </form>

            
            <div className="flex-1">
                <div className="flex justify-center"><button onClick={handleSubmit} className="bg-green px-6 py-2 w-10/12 rounded h-20 mt-20 text-4xl text-black/70 hover:text-black hover:bg-green/90"><strong>OBLICZ ŚLAD WĘGLOWY</strong></button></div>
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
        </div>
    );
};

export default Calculator;