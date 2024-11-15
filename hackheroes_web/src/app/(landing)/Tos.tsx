import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Tos = () => {
    return (
        <>
            <Header />
            <div className="bg-gray-900 min-h-screen flex flex-col items-center text-white p-8">
                <div className="max-w-4xl w-full">
                    <h1 className="text-4xl font-bold mb-8">Warunki korzystania</h1>
                    <p className="mb-4">Data wejścia w życie: 15.11.2024</p>
    
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Wprowadzenie</h2>
                        <p>Witamy na stronie internetowej EcoHero (&#34;https://ecohero.q1000q.me&#34;). Korzystając z naszej strony, akceptujesz te Warunki korzystania (TOS). Prosimy o uważne przeczytanie poniższych warunków przed skorzystaniem z naszych usług.</p>
                    </section>
    
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Definicje</h2>
                        <p><strong>&#34;https://ecohero.q1000q.me&#34;</strong> oznacza stronę internetową EcoHero dostępną pod adresem https://ecohero.q1000q.me.</p>
                        <p><strong>&#34;Usługi&#34;</strong> oznaczają wszystkie usługi dostępne na stronie, w tym informacje ekologiczne, porady, produkty, artykuły i inne materiały.</p>
                        <p><strong>&#34;Użytkownik&#34;</strong> oznacza każdą osobę korzystającą z naszej strony.</p>
                    </section>
    
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Warunki korzystania</h2>
                        <p>Użytkownicy zgadzają się korzystać z usług strony wyłącznie w celach zgodnych z prawem i zgodnie z tymi warunkami.</p>
                        <ul className="list-disc list-inside ml-4">
                            <li>Użytkownicy nie mogą korzystać ze strony w sposób, który mógłby uszkodzić, wyłączyć, przeciążyć lub zakłócić działanie strony.</li>
                        </ul>
                    </section>
    
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Rejestracja i konto</h2>
                        <ul className="list-disc list-inside ml-4">
                            <li>Rejestrując się na stronie, Użytkownicy zgadzają się podać prawdziwe, dokładne, aktualne i kompletne informacje.</li>
                            <li>Użytkownicy są odpowiedzialni za wszystkie działania podejmowane przy użyciu ich konta.</li>
                        </ul>
                    </section>
    
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Ochrona własności intelektualnej</h2>
                        <p>Wszystkie treści na stronie (teksty, grafiki, loga, zdjęcia, filmy itp.) są chronione prawami autorskimi i innymi prawami własności intelektualnej. Użytkownicy nie mogą kopiować, modyfikować ani rozpowszechniać tych treści bez uprzedniej zgody właścicieli strony.</p>
                    </section>
    
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Ograniczenie odpowiedzialności</h2>
                        <p>EcoHero nie ponosi odpowiedzialności za jakiekolwiek szkody wynikające z korzystania ze strony, w tym błędy w treści, przerwy w dostępie do strony lub utratę danych.</p>
                    </section>
    
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Zmiany warunków</h2>
                        <p>EcoHero zastrzega sobie prawo do zmiany tych Warunków w dowolnym czasie. Zmienione Warunki zostaną opublikowane na stronie i wejdą w życie z chwilą ich publikacji.</p>
                    </section>
    
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Prawo właściwe</h2>
                        <p>Te Warunki są regulowane przez prawo [określ kraj lub jurysdykcję].</p>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Tos;