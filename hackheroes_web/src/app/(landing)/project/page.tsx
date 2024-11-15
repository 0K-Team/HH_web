import Header from "@/app/(landing)/Header";
import Footer from "@/app/(landing)/Footer";

export default function Home() {

    return (
        <div className="bg-[#1E1E1E] min-h-screen flex flex-col">
            <Header/>
            <div className="flex-grow flex justify-center">
                <div className="max-w-4xl px-4 mt-4">
                    <h2 className="text-2xl font-bold text-[#29FF77]">EcoHero</h2>

                    <hr className={"my-4"}/>
                    <h3 className="text-lg font-semibold">Na jakie potrzeby/problem odpowiada Wasze rozwiązanie?</h3>
                    <p>W społeczeństwie jest widoczny problem nie tyle co braku zainteresowania ludzi w dobro planety, co ich niewiedzy w temacie ekologii. Nasza strona/aplikacja ma na celu pomóc takim ludziom zobaczyć </p>

                    <hr className={"my-4"}/>
                    <h3 className="text-lg font-semibold">W jakich językach programowania, jakich technologiach powstała
                        aplikacja/narzędzie</h3>

                    <hr className={"my-4"}/>
                    <h3 className="text-lg font-semibold">Opisz działanie Waszej aplikacji/narzędzia
                        W jaki sposób działa Wasza aplikacja? Co może dzięki niej osiągnąć użytkownik? Jaką ma
                        funkcjonalność?</h3>

                    <hr className={"my-4"}/>
                    <h3 className="text-lg font-semibold">Jak widzicie dalszy rozwój Waszego rozwiązania?
                        W jaki sposób Wasz projekt mógłby zostać wdrożony lub rozwijany? Jacy partnerzy mogliby się
                        zaangażować w jego rozwój?
                    </h3>

                    <hr className={"my-4"}/>
                    <h3 className="text-lg font-semibold">Jakie widzicie zagrożenia/ryzyka dla Waszego rozwiązania?
                        Opisz zdiagnozowane zagrożenia jak np. problemy technologiczne czy konieczność zaangażowania
                        innych podmiotów np. urząd miasta
                    </h3>

                    <hr className={"my-4"}/>
                    <h3 className="text-lg font-semibold">Dlaczego akurat Wy powinniście wygrać?
                        Napisz, co wyróżnia Wasz pomysł lub jego realizacja np. wybór innowacyjnej technologii.
                    </h3>
                </div>
            </div>
            <Footer />
        </div>
    );
}
