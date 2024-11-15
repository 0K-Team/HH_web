import Header from "@/app/(landing)/Header";

export default function Home() {

    return (
        <div className="bg-[#1E1E1E] min-h-screen flex flex-col">
            <Header />
            <div className="flex-grow flex justify-center">
                <div className="max-w-4xl px-4 mt-4">
                    <p className="text-white text-lg leading-relaxed mb-4">
                        <strong>Technologia:</strong>
                    </p>
                    <p className="text-white text-lg leading-relaxed mb-4">
                        Front-end strony Eco Hero został opracowany w języku TypeScript z użyciem frameworku React oraz
                        Next.js, co umożliwia tworzenie dynamicznych i wydajnych interfejsów użytkownika. Stylizację
                        zapewnia Tailwind CSS, pozwalając na szybkie i elastyczne projektowanie.
                    </p>
                    <p className="text-white text-lg leading-relaxed">
                        <strong>Moduły aplikacji webowej:</strong>
                    </p>
                    <ul className="text-white text-lg leading-relaxed list-disc list-inside mb-4">
                        <li><strong>Auth:</strong> Obsługuje uwierzytelnianie użytkowników przez Google oraz logowanie
                            kodem QR dla wersji webowej.
                        </li>
                        <li><strong>Blogs:</strong> Umożliwia użytkownikom publikowanie edukacyjnych treści o ekologii.
                        </li>
                        <li><strong>Eco Calculator:</strong> Kalkulator śladu węglowego zasilany przez AI.</li>
                        <li><strong>Posts:</strong> Sekcja społecznościowa dla użytkowników do dzielenia się postami.
                        </li>
                        <li><strong>Products:</strong> Zarządza produktami ekologicznymi.</li>
                        <li><strong>Quizzes:</strong> Zapewnia edukacyjne quizy o ekologii.</li>
                        <li><strong>User:</strong> Zarządza profilami użytkowników.</li>
                        <li><strong>Virtual Garden:</strong> Interaktywna gra, w której użytkownicy mogą kolekcjonować i
                            zarządzać wirtualnymi roślinami.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
