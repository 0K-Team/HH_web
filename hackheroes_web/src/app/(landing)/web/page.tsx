import Header from "@/app/(landing)/Header";

export default function Home() {

    return (
        <div className="bg-[#1E1E1E] min-h-screen flex flex-col">
            <Header />
            <div className="flex-grow flex justify-center">
                <div className="max-w-4xl px-4 mt-4">
                    <p className="text-white text-lg leading-relaxed">
                        Technologia:
                        Front-end strony Eco Hero został opracowany w języku JavaScript z użyciem frameworku React oraz Next.js, co umożliwia tworzenie dynamicznych i wydajnych interfejsów użytkownika. Stylizację zapewnia Tailwind CSS, pozwalając na szybkie i elastyczne projektowanie.

                        Struktura aplikacji:
                        - Warstwa Data
                        DataSources: Odpowiadają za komunikację z zewnętrznymi źródłami danych, takimi jak API czy lokalne bazy danych.
                        Models: Reprezentują dane aplikacji. Dzięki użyciu narzędzia Freezed, modele są niezmienne, wspierają operacje copyWith, porównywanie oraz serializację.
                        Repositories: Abstrakcyjna warstwa, która łączy DataSources z resztą aplikacji, zapewniając jednolity interfejs do zarządzania danymi.

                        - Warstwa Domain
                        Entities: W tradycyjnym modelu Clean Architecture, Entities reprezentują podstawowe obiekty biznesowe. W tym projekcie, wygenerowane modele eliminują potrzebę definiowania odrębnych Entities.
                        Repositories: Interfejsy, które definiują kontrakty dla operacji na danych.
                        UseCases: W tym projekcie zrezygnowano z katalogu UseCases, co upraszcza strukturę i przyspiesza testowanie zgodnie z praktykami Agile.

                        - Warstwa Presentation
                        Blocs: Zarządzają stanem aplikacji i oddzielają logikę biznesową od interfejsu użytkownika, zapewniając reaktywność i spójność.
                        Pages: Reprezentują ekrany aplikacji.
                        Widgets: Komponenty interfejsu użytkownika, które mogą być wielokrotnie używane w różnych częściach aplikacji.
                        Narzędzia używane w projekcie
                        Freezed: Automatycznie generuje niezmienne modele danych, wspierając operacje copyWith, porównywanie oraz serializację.
                        Dio: Zapewnia wydajną i konfigurowalną warstwę komunikacji HTTP z backendem, z możliwością zarządzania logowaniem, błędami oraz interceptorami.
                        BLoC (Business Logic Component): Architektura BLoC zarządza stanem aplikacji i oddziela logikę biznesową od UI.
                        GetIt: Menedżer Dependency Injection, umożliwiający bezpieczne i wydajne wstrzykiwanie zależności.
                        GoRouter: Realizuje nawigację pomiędzy ekranami, wspierając dynamiczne trasy i dostosowanie do specyficznych wymagań mobilnych, takich jak głębokie linki.

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
