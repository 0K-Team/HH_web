"use client";
import { useEffect, useState } from "react";
import ChoiceSlider from "./(component)/ChoiceSlider";
import Sidebar from "../dash/Sidebar";
import { fetchLoggedUser } from "../api/user";
import fetchCalculation from "../api/calc";
import Header from "../(landing)/Header";

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

    const [loggedIn, setLoggedIn] = useState(false);

    const handleChange = (name: string, path: string, value: number) => {
        const prev = formData;
        const obj = {};
        // @ts-expect-error any type allowed
        obj[name] = value;
        // @ts-expect-error any type allowed
        prev[path] = {...prev[path], ...obj};
        setFormData(prev);
    };

    const [result, setResult] = useState<CalculationResult | null>(null);
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await fetchCalculation(formData);
        setResult(result);
    };

    useEffect(() => {
        fetchLoggedUser().then((user) => {
            if (user) setLoggedIn(true);
            setLoggedIn(false);
        }).catch(() => {
            setLoggedIn(false);
        })
    }, [])

    return (
        <div className="bg-[#1E1E1E] min-h-screen w-full py-3">
            <Sidebar></Sidebar>
            <div className={`flex flex-col text-center gap-3 px-auto pt-3 ${loggedIn ? "pl-20" : ""}`}>
                <div className="flex flex-col">
                    <p className="font-bold text-lg">Transport</p>
                    <p className="text-sm">Jak często korzystasz z samochodu?</p>
                    <ChoiceSlider labels={["Rzadko", "Raz w tygodniu", "Kilka razy w tygodniu", "Codziennie"]} setter={handleChange} name="car_usage" path="transport" />
                    <p className="text-sm">Jaki rodzaj paliwa ma Twój samochód?</p>
                    <ChoiceSlider labels={["Benzyna", "Diesel", "Elektryczny", "Hybryda", "Inny"]} setter={handleChange} name="fuel_type" path="transport" />
                    <p className="text-sm">Ile kilometrów średnio pokonujesz samochodem w ciągu tygodnia?</p>
                    <ChoiceSlider labels={["0-50 km", "51-150 km", "151-300 km", "Powyżej 300 km"]} setter={handleChange} name="weekly_km" path="transport" />
                    <p className="text-sm">Jak często podróżujesz samolotem?</p>
                    <ChoiceSlider labels={["Nigdy", "1-2 razy w roku", "3-5 razy w roku", "Powyżej 5 razy w roku"]} setter={handleChange} name="flight_frequency" path="transport" />
                    <p className="text-sm">Czy używasz transportu publicznego (autobusy, pociągi)?</p>
                    <ChoiceSlider labels={["Nigdy", "Rzadko", "Kilka razy w tygodniu", "Codziennie"]} setter={handleChange} name="public_transport_usage" path="transport" />
                </div>
                <hr className="w-[80%] self-center border-green-green" />
                <div>
                    <p className="font-bold text-lg">Energia w domu</p>
                    <p className="text-sm">Jakie źródło energii używasz w swoim domu?</p>
                    <ChoiceSlider labels={["Węgiel", "Gaz", "Prąd z sieci", "OZE"]} setter={handleChange} name="energy_source" path="energy" />
                    <p className="text-sm">Jakie masz źródło ciepłej wody?</p>
                    <ChoiceSlider labels={["Elektryczność", "Gaz", "Węgiel", "OZE"]} setter={handleChange} name="water_heating_source" path="energy" />
                    <p className="text-sm">Średnie miesięczne zużycie energii elektrycznej (kWh)?</p>
                    <ChoiceSlider labels={["0-100 kWh", "101-200 kWh", "201-300 kWh", "Powyżej 300 kWh"]} setter={handleChange} name="weekly_kWh" path="energy" />
                    <p className="text-sm">Jak ocenisz efektywność energetyczną swojego domu?</p>
                    <ChoiceSlider labels={["Bardzo efektywny", "Średnio efektywny", "Niezbyt efektywny"]} setter={handleChange} name="energy_efficiency" path="energy" />
                </div>
                <hr className="w-[80%] self-center border-green-green" />
                <div>
                    <p className="font-bold text-lg">Woda</p>
                    <p className="text-sm">Jak długo średnio bierzesz prysznic?</p>
                    <ChoiceSlider labels={["Mniej niż 5 minut", "5-10 minut", "11-20 minut", "Powyżej 20 minut"]} setter={handleChange} name="shower_time" path="water" />
                    <p className="text-sm">Jak często kąpiesz się w wannie?</p>
                    <ChoiceSlider labels={["Codziennie", "Kilka razy w tygodniu", "Raz w tygodniu", "Rzadko"]} setter={handleChange} name="bathtub_usage" path="water" />
                </div>
                <hr className="w-[80%] self-center border-green-green" />
                <div>
                    <p className="font-bold text-lg">Odpady</p>
                    <p className="text-sm">Czy segregujesz odpady?</p>
                    <ChoiceSlider labels={["Tak", "Częściowo", "Nie"]} setter={handleChange} name="waste_segregation" path="waste" />
                    <p className="text-sm">Ile jedzenia marnujesz średnio w ciągu tygodnia?</p>
                    <ChoiceSlider labels={["0-500 g", "500 g - 1 kg", "1 - 2 kg", "Powyżej 2 kg"]} setter={handleChange} name="food_waste" path="waste" />
                    <p className="text-sm">Czy używasz plastikowych opakowań?</p>
                    <ChoiceSlider labels={["Często", "Czasami", "Rzadko", "Nigdy"]} setter={handleChange} name="plastic_usage" path="waste" />
                </div>
                <hr className="w-[80%] self-center border-green-green" />
                <div>
                    <p className="font-bold text-lg">Jedzenie</p>
                    <p className="text-sm">Jak często jesz produkty mięsne?</p>
                    <ChoiceSlider labels={["Codziennie", "Kilka razy w tygodniu", "Raz w tygodniu", "Rzadko", "Nigdy"]} setter={handleChange} name="meat_consumption" path="food" />
                    <p className="text-sm">Czy preferujesz produkty lokalne i sezonowe?</p>
                    <ChoiceSlider labels={["Zawsze", "Często", "Rzadko", "Nigdy"]} setter={handleChange} name="local_food_preference" path="food" />
                </div>
                <hr className="w-[80%] self-center border-green-green" />
                <div>
                    <p className="font-bold text-lg">Czas wolny</p>
                    <p className="text-sm">Ile godzin dziennie spędzasz oglądając filmy/seriale online?</p>
                    <ChoiceSlider labels={["Mniej niż godzinę", "1-2 godziny", "2-3 godziny", "Ponad 3 godziny"]} setter={handleChange} name="movie_watch_time" path="leisure" />
                    <p className="text-sm">Ile razy w miesiącu kupujesz nowe ubrania?</p>
                    <ChoiceSlider labels={["0-1 raz", "2-3 razy", "4-5 razy", "Ponad 5 razy"]} setter={handleChange} name="shopping_frequency" path="leisure" />
                </div>
                <button onClick={handleSubmit} className="w-[80%] py-2 rounded-lg bg-green-green text-[#1E1E1E] mx-auto">Prześlij</button>
                {result && <div className="text-center">
                    <p className="font-bold">Rekomendacje AI</p>
                    <p className="mx-auto prose dark:prose-invert">{result.AI_suggestion}</p>
                </div>}
            </div>
        </div>
    )
}

export default Calculator;