import Header from "@/app/(landing)/Header";

export default function Home() {

    return (
        <div className="bg-[#1E1E1E] min-h-screen flex flex-col">
            <Header />
            <div className="flex-grow flex justify-center">
                <div className="max-w-4xl px-4 mt-4">
                    <p className="text-white text-lg leading-relaxed">
                        Technologia:
                        Front-end strony Eco Hero został opracowany w języku TypeScript z użyciem frameworku React oraz Next.js, co umożliwia tworzenie dynamicznych i wydajnych interfejsów użytkownika. Stylizację zapewnia Tailwind CSS, pozwalając na szybkie i elastyczne projektowanie.
                    </p>
                    <p className="text-white text-lg leading-relaxed">
                        Moduły apikacji webowej:
                        - Auth:
                        Obsługuje uwierzytelnianie użytkowników przez Google oraz logowanie kodem QR dla wersji webowej.
                        - Blogs:
                        Umożliwia użytkownikom publikowanie edukacyjnych treści o ekologii.
                        - Eco Calculator:
                        Kalkulator śladu węglowego zasilany przez AI.
                        - Posts:
                        Sekcja społecznościowa dla użytkowników do dzielenia się postami.
                        - Products:
                        Zarządza produktami ekologicznymi.
                        - Quizzes:
                        Zapewnia edukacyjne quizy o ekologii.
                        - User:
                        Zarządza profilami użytkowników.
                        - Virtual Garden:
                        Interaktywna gra, w której użytkownicy mogą kolekcjonować i zarządzać wirtualnymi roślinami.
                    </p>
                </div>
            </div>
        </div>
    );
}
