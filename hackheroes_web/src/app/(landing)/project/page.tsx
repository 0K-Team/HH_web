import Header from "@/app/(landing)/Header";
import Footer from "@/app/(landing)/Footer";

export default function Home() {

    return (
        <div className="bg-[#1E1E1E] min-h-screen flex flex-col text-white">
            <Header/>
            <div className="flex-grow flex justify-center">
                <div className="max-w-4xl px-4 mt-4">
                    <h2 className="text-2xl font-bold text-[#29FF77]">EcoHero</h2>

                    <hr className={"my-4"}/>
                    <h3 className="text-lg font-semibold">Na jakie potrzeby/problem odpowiada Wasze rozwiązanie?</h3>
                    <br />
                    <p>EcoHero odpowiada na potrzebę zwiększania świadomości ekologicznej i motywowania do działań na rzecz ochrony środowiska. Problemem, który rozwiązuje, jest brak narzędzi wspierających użytkowników w redukcji śladu węglowego, wodnego i energetycznego w sposób spersonalizowany, atrakcyjny i angażujący. Platforma pomaga użytkownikom wprowadzać ekologiczne nawyki, edukując ich o wpływie codziennych działań na środowisko oraz wspierając lokalne i globalne inicjatywy proekologiczne.</p>

                    <hr className={"my-4"}/>
                    <h3 className="text-lg font-semibold">W jakich językach programowania, jakich technologiach powstała aplikacja/narzędzie</h3>
                    <br />
                    <ul className="list-disc list-inside mb-8">
                        <li>Typescript</li>
                        <li>ExpressJS</li>
                        <li>NextJS</li>
                        <li>React</li>
                        <li>Dart</li>
                        <li>Flutter</li>
                    </ul>

                    <hr className={"my-4"}/>
                    <h3 className="text-lg font-semibold">Opisz działanie Waszej aplikacji/narzędzia
                        W jaki sposób działa Wasza aplikacja? Co może dzięki niej osiągnąć użytkownik? Jaką ma
                        funkcjonalność?</h3>
                    <br />
                    <ul className="list-disc list-inside mb-8">
                        <li>Śledzenie aktywności ekologicznych: transport, zużycie energii, woda, odpady.</li>
                        <li>Kalkulatory śladu węglowego i wodnego.</li>
                        <li>Quizy i edukacja: system lekcji i codziennych wyzwań, w stylu Duolingo.</li>
                        <li>Mapa ekologiczna: zielone miejsca, jakość powietrza, wydarzenia ekologiczne.</li>
                        <li>Wyzwania lokalne i globalne: rywalizacja między użytkownikami lub społecznościami.</li>
                        <li>Funkcje społecznościowe: posty.</li>
                        <li>Analizy kosztów ekologicznych: porównanie opcji i oszczędności.</li>
                        <li>Wirtualny ogród użytkownika (mini-gra) z systemem punktów i roślin.</li>
                    </ul>

                    <hr className={"my-4"}/>
                    <h3 className="text-lg font-semibold">Jak widzicie dalszy rozwój Waszego rozwiązania?
                        W jaki sposób Wasz projekt mógłby zostać wdrożony lub rozwijany? Jacy partnerzy mogliby się
                        zaangażować w jego rozwój?
                    </h3>
                    <br />
                    <ul className="list-disc list-inside mb-8">
                        <li>Integracja z urządzeniami IoT (liczniki energii, czujniki wody).</li>
                        <li>Wdrożenie bardziej zaawansowanych algorytmów AI do analizy danych i predykcji.</li>
                        <li>Dodanie funkcji AR, np. interaktywne wizualizacje zmian klimatycznych w danym regionie.</li>
                        <li>Współpraca z partnerami:</li>
                        <ul className="list-disc list-inside ml-4">
                            <li>Organizacje ekologiczne (WWF, Greenpeace) i miasta.</li>
                            <li>Firmy produkujące urządzenia IoT i partnerzy oferujący zniżki na produkty ekologiczne.</li>
                        </ul>
                        <li>Nowe funkcje:</li>
                        <ul className="list-disc list-inside ml-4">
                            <li>Platforma wymiany przedmiotów.</li>
                            <li>Alerty dotyczące lokalnych zagrożeń ekologicznych.</li>
                        </ul>
                    </ul>

                    <hr className={"my-4"}/>
                    <h3 className="text-lg font-semibold">Jakie widzicie zagrożenia/ryzyka dla Waszego rozwiązania?
                        Opisz zdiagnozowane zagrożenia jak np. problemy technologiczne czy konieczność zaangażowania
                        innych podmiotów np. urząd miasta
                    </h3>
                    <br />
                    <p>
                        <strong>Technologiczne:</strong> Trudności z integracją różnych urządzeń IoT i skalowalnością infrastruktury.
                        <strong>Społeczne:</strong> Niski poziom zaangażowania użytkowników, jeśli funkcje nie będą wystarczająco atrakcyjne.
                        <strong>Partnerzy zewnętrzni:</strong> Zależność od współpracy z miastami, firmami i organizacjami.
                        <strong>Finansowe:</strong> Koszty utrzymania i rozwoju aplikacji mogą być wysokie na etapie rozwoju
                    </p>

                    <hr className={"my-4"}/>
                    <h3 className="text-lg font-semibold">Dlaczego akurat Wy powinniście wygrać?
                        Napisz, co wyróżnia Wasz pomysł lub jego realizacja np. wybór innowacyjnej technologii.
                    </h3>
                    <br />
                    <p className="mb-8">
                        EcoHero to nowatorskie rozwiązanie, które redefiniuje sposób podejścia do edukacji ekologicznej i działań prośrodowiskowych. Łączymy zaawansowane technologie, takie jak AI, kody QR, z unikalną mechaniką grywalizacji, tworząc aplikację, która nie tylko inspiruje, ale również umożliwia realny wpływ na środowisko lokalne i globalne. Nasza platforma wyróżnia się szerokim zakresem funkcjonalności, integrując edukację, motywację i współpracę społeczności w spójnym i intuicyjnym narzędziu. EcoHero to więcej niż aplikacja – to katalizator zmian, który wspiera użytkowników w budowaniu zrównoważonego stylu życia, jednocześnie podnosząc świadomość i angażując do wspólnego działania na rzecz ochrony planety.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
