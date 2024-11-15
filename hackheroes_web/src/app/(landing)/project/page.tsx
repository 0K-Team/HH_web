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
                    <p>Backend projektu EcoHero został zbudowany w języku TypeScript z wykorzystaniem Express.js i MongoDB, hostowanego na platformie MongoDB Atlas. System bezpieczeństwa oparto na PassportJS z JWT oraz logowaniu przy użyciu kodu QR. Cała infrastruktura działa w kontenerach Docker, a dedykowana maszyna serwerowa zapewnia niezależność i pełną kontrolę nad środowiskiem. Wersja webowa, stworzona w TypeScript z użyciem Reacta i Next.js, korzysta z Tailwind CSS do elastycznego stylowania, co pozwala na szybkie dostosowanie interfejsu do potrzeb użytkownika. Aplikacja mobilna powstała w języku Dart z użyciem Fluttera i modelu Clean Architecture, a zarządzanie stanem realizuje architektura BLoC. Nawigację obsługuje GoRouter, Freezed generuje niezmienne modele danych, a Dio umożliwia komunikację z backendem. Projekt wzbogacono o funkcje takie jak AI z modelem Llama 3.0 do spersonalizowanych sugestii, OpenStreetMap i OpenLayers do obsługi map oraz Microsoft Azure Communication Services do wysyłania e-maili, co czyni go nowoczesnym narzędziem wspierającym zrównoważony styl życia. </p>

                    <hr className={"my-4"}/>
                    <h3 className="text-lg font-semibold">Opisz działanie Waszej aplikacji/narzędzia
                        W jaki sposób działa Wasza aplikacja? Co może dzięki niej osiągnąć użytkownik? Jaką ma
                        funkcjonalność?</h3>
                    <br />
                    <p>
                        Aplikacja angażuje użytkowników w codzienne działania proekologiczne, umożliwiając śledzenie aktywności związanych z transportem, energią, wodą i odpadami. Dzięki kalkulatorom śladu węglowego i wodnego oraz raportom z rekomendacjami pomaga w podejmowaniu świadomych decyzji. Edukację wspiera system quizów, wyzwań i lekcji, inspirowany formatem Duolingo. Użytkownicy mogą korzystać z map ekologicznych, które wskazują zielone miejsca, jakość powietrza i wydarzenia, oraz brać udział w lokalnych i globalnych wyzwaniach. Funkcje społecznościowe pozwalają na publikowanie postów, a analiza kosztów ekologicznych ułatwia porównanie opcji i oszczędności. Dodatkową motywację zapewnia wirtualny ogród, który użytkownicy rozwijają, zdobywając punkty za działania ekologiczne.
                    </p>

                    <hr className={"my-4"}/>
                    <h3 className="text-lg font-semibold">Jak widzicie dalszy rozwój Waszego rozwiązania?
                        W jaki sposób Wasz projekt mógłby zostać wdrożony lub rozwijany? Jacy partnerzy mogliby się
                        zaangażować w jego rozwój?
                    </h3>
                    <br />
                    <p>Dalszy rozwój naszego rozwiązania widzimy w integracji z urządzeniami IoT, takimi jak liczniki energii czy czujniki wody, co pozwoliłoby na automatyczne i dokładniejsze monitorowanie aktywności użytkowników. Planujemy również wdrożenie zaawansowanych algorytmów AI, które mogłyby lepiej analizować dane i przewidywać ekologiczne trendy, a także wprowadzenie funkcji AR, umożliwiających interaktywne wizualizacje zmian klimatycznych w określonych regionach. Współpraca z organizacjami ekologicznymi, takimi jak WWF czy Greenpeace, oraz z miastami mogłaby wspierać lokalne i globalne inicjatywy, a firmy produkujące urządzenia IoT oraz oferujące zniżki na produkty ekologiczne mogłyby wzbogacić projekt o nowe możliwości. Dodatkowo, chcemy rozwijać platformę o funkcje takie jak wymiana przedmiotów czy alerty o lokalnych zagrożeniach ekologicznych, co jeszcze bardziej zaangażuje użytkowników i poszerzy funkcjonalność aplikacji.</p>


                    <hr className={"my-4"}/>
                    <h3 className="text-lg font-semibold">Jakie widzicie zagrożenia/ryzyka dla Waszego rozwiązania?
                        Opisz zdiagnozowane zagrożenia jak np. problemy technologiczne czy konieczność zaangażowania
                        innych podmiotów np. urząd miasta
                    </h3>
                    <br />
                    <p>
                        Mamy kilka wyzwań, które musimy wziąć pod uwagę. Po stronie technologicznej pojawia się problem z integracją różnych urządzeń IoT i zapewnieniem skalowalności infrastruktury. Społecznie kluczowe będzie utrzymanie zaangażowania użytkowników, bo jeśli funkcje nie będą wystarczająco atrakcyjne, trudno będzie ich zainteresować na dłuższą metę. Jesteśmy też w dużym stopniu zależni od współpracy z partnerami zewnętrznymi, takimi jak miasta, firmy czy organizacje, co może wpływać na tempo rozwoju. Do tego dochodzi jeszcze kwestia finansów – koszty utrzymania i rozwoju aplikacji na początku mogą być naprawdę wysokie.
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
