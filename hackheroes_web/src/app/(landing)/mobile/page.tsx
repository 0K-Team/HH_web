import Header from "@/app/(landing)/Header";

export default function Home() {

    return (
        <div className="bg-[#1E1E1E] min-h-screen flex flex-col">
            <Header/>
            <div className="flex-grow flex justify-center">
                <div className="max-w-4xl px-4 mt-4">
                    <div className="space-y-6">
                        <img src="https://i.imgur.com/Q1W6Hbe.png" alt="Screen 1"
                             className="w-full h-auto rounded-lg border border-gray-300 shadow-lg"/>
                        <img src="https://i.imgur.com/3WOSpEx.png" alt="Screen 2"
                             className="w-full h-auto rounded-lg border border-gray-300 shadow-lg"/>
                        <img src="https://i.imgur.com/f62JeDA.png" alt="Screen 3"
                             className="w-full h-auto rounded-lg border border-gray-300 shadow-lg"/>
                        <img src="https://i.imgur.com/8gxRtkX.png" alt="Screen 4"
                             className="w-full h-auto rounded-lg border border-gray-300 shadow-lg"/>
                    </div>
                    <hr className={"my-4"}/>

                    <h2 className="text-2xl font-bold text-[#29FF77]">Aplikacja mobilna EcoHero</h2>
                    <p>
                        Front-end aplikacji mobilnej EcoHero został opracowany w języku <span
                        className="font-semibold">Dart</span> z wykorzystaniem frameworka <span
                        className="font-semibold">Flutter</span>, co umożliwia generowanie natywnych aplikacji na
                        platformy <span className="font-semibold">Android i iOS</span>.
                    </p>
                    <p>
                        W projekcie wdrożono zmodyfikowany model architektury <span className="font-semibold">Clean Architecture</span>,
                        inspirowany wzorcem <span className="font-semibold">Model-View-ViewModel (MVVM)</span>,
                        który kładzie nacisk na zasady inżynierii oprogramowania, takie jak <span
                        className="italic">separacja problemów</span>, <span
                        className="italic">odwrócenie zależności</span>,
                        oraz <span className="italic">zasada pojedynczej odpowiedzialności</span>.
                    </p>

                    <hr className={"my-4"}/>
                    <h3 className="text-lg font-semibold">Struktura aplikacji</h3>
                    <p>
                        Adaptacja klasycznego modelu Clean Architecture do środowiska mobilnego pozwoliła na
                        uproszczenie struktury
                        poprzez zastosowanie trzech głównych komponentów:
                        <span className="font-semibold"> Models</span>,
                        <span className="font-semibold"> Repositories</span>, oraz
                        <span className="font-semibold"> Data Sources</span>.
                    </p>
                    <p>
                        Tradycyjna struktura Clean Architecture składa się z trzech warstw:
                        <span className="font-semibold"> Data</span>,
                        <span className="font-semibold"> Domain</span>, oraz
                        <span className="font-semibold"> Presentation</span>,
                        w których rozmieszczone są następujące elementy:
                    </p>
                    <ul>
                        <li><span className="font-semibold"> Data Layer</span>: DataSources, Models, Repositories</li>
                        <li><span className="font-semibold"> Domain Layer</span>: Entities, UseCases, Repositories</li>
                        <li><span className="font-semibold"> Presentation Layer</span>: Blocs, Pages, Widgets</li>
                    </ul>
                    <p>
                        W naszej wersji modelu wygenerowany kod modelu eliminuje potrzebę definiowania odrębnych
                        <span className="font-semibold"> Entities</span>, a dla usprawnienia i przyspieszenia testowania,
                        zgodnie
                        z praktykami Agile, zrezygnowaliśmy z katalogu <span className="font-semibold">UseCases</span>,
                        co pozwala
                        na uproszczoną strukturę bez utraty czytelności i modularności.
                    </p>
                    <p>
                        Do realizacji specyficznych funkcji stosujemy następujące narzędzia:
                    </p>
                    <ul>
                        <li>
                            <span className="font-semibold">Freezed</span>: Używany do automatycznego generowania
                            niezmiennych modeli
                            danych z pełnym wsparciem dla copyWith, porównywania i serializacji, co zapewnia spójność
                            modeli.
                        </li>
                        <li>
                            <span className="font-semibold">Dio</span>: Zapewnia wydajną i konfigurowalną warstwę
                            komunikacji HTTP
                            z backendem, z możliwością łatwego zarządzania logowaniem, błędami oraz interceptorami.
                        </li>
                        <li>
                            <span className="font-semibold">BLoC (Business Logic Component)</span>: Architektura BLoC
                            odpowiada za
                            zarządzanie stanem aplikacji i logiczne oddzielenie procesów biznesowych od UI, zapewniając
                            reaktywność
                            i spójność w każdym stanie aplikacji.
                        </li>
                        <li>
                            <span className="font-semibold">GetIt</span>: Pełni rolę menedżera Dependency Injection,
                            umożliwiając
                            bezpieczne i wydajne wstrzykiwanie zależności na poziomie całej aplikacji.
                        </li>
                        <li>
                            <span className="font-semibold">GoRouter</span>: Realizuje nawigację pomiędzy ekranami,
                            zapewniając pełne
                            wsparcie dla dynamicznych tras i dostosowanie do specyficznych wymagań mobilnych, takich jak
                            głębokie linki.
                        </li>
                    </ul>

                    <hr className={"my-4"}/>
                    <h3 className="text-lg font-semibold">Moduły aplikacji</h3>
                    <p>Projekt podzielono na dwa główne moduły: <span
                        className="font-semibold">common</span> (zasoby współdzielone) oraz <span
                        className="font-semibold">features</span> (funkcjonalności aplikacji).</p>
                    <ul className="list-disc ml-6 space-y-2">
                        <li><span className="font-semibold">Auth:</span> Obsługa logowania przez Google oraz
                            możliwość logowania kodem QR na wersji webowej.
                        </li>
                        <li><span className="font-semibold">Blogs:</span> Publikowanie edukacyjnych treści
                            ekologicznych.
                        </li>
                        <li><span className="font-semibold">Daily Challenge:</span> Codzienne zadania proekologiczne
                            dla użytkowników.
                        </li>
                        <li><span className="font-semibold">Discounts:</span> Zniżki na produkty ekologiczne.</li>
                        <li><span className="font-semibold">Eco Calculator:</span> Kalkulator śladu węglowego z AI.
                        </li>
                        <li><span className="font-semibold">Events:</span> Informacje o wydarzeniach ekologicznych.
                        </li>
                        <li><span className="font-semibold">Maps:</span> Mapy ekologicznych miejsc.</li>
                        <li><span className="font-semibold">Posts:</span> Sekcja społecznościowa dla użytkowników.
                        </li>
                        <li><span className="font-semibold">Products:</span> Moduł produktów ekologicznych.</li>
                        <li><span className="font-semibold">Quizzes:</span> Edukacyjne quizy o ekologii.</li>
                        <li><span className="font-semibold">User:</span> Zarządzanie profilem użytkownika.</li>
                        <li><span className="font-semibold">Virtual Garden:</span> Interaktywna gra z
                            kolekcjonowaniem roślin.
                        </li>
                    </ul>

                    <hr className={"my-4"}/>

                </div>
            </div>
        </div>
    );
}
