import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Privacy = () => {
    return (
        <>
            <Header />
            <div className="bg-gray-900 min-h-screen flex flex-col items-center text-white p-8">
                <div className="max-w-4xl w-full">
                    <h1 className="text-4xl font-bold mb-8">Polityka Prywatności</h1>
                    <p className="mb-4">Data wejścia w życie: 15.11.2024</p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Wstęp</h2>
                        <p>EcoHero szanuje prywatność swoich użytkowników. Niniejsza Polityka Prywatności wyjaśnia, w jaki sposób zbieramy, przetwarzamy i przechowujemy dane osobowe użytkowników.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Dane osobowe</h2>
                        <p>Zbieramy dane osobowe, takie jak imię, nazwisko, adres e-mail, dane kontaktowe, które użytkownik dobrowolnie udostępnia podczas rejestracji lub kontaktu z nami.</p>
                        <p>Możemy zbierać również dane techniczne, takie jak adres IP, typ przeglądarki i urządzenia, data i godzina wizyty na stronie <strong>https://ecohero.q1000q.me</strong>, cookies.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Cele przetwarzania danych</h2>
                        <p>Twoje dane osobowe są przetwarzane w celu:</p>
                        <ul className="list-disc list-inside ml-4">
                            <li>Świadczenia usług oferowanych na stronie <strong>https://ecohero.q1000q.me</strong>,</li>
                            <li>Komunikacji z użytkownikami,</li>
                            <li>Personalizacji doświadczeń użytkowników na stronie,</li>
                            <li>Przesyłania newsletterów (jeśli użytkownik wyraził zgodę),</li>
                            <li>Analizy i poprawy funkcjonowania strony.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Udostępnianie danych</h2>
                        <p>Twoje dane osobowe nie będą udostępniane osobom trzecim bez Twojej zgody, chyba że jest to wymagane przez przepisy prawa.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Bezpieczeństwo danych</h2>
                        <p>EcoHero podejmuje wszelkie niezbędne środki w celu ochrony Twoich danych przed nieautoryzowanym dostępem, modyfikacją, ujawnieniem lub zniszczeniem.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Prawa użytkowników</h2>
                        <p>Użytkownicy mają prawo do:</p>
                        <ul className="list-disc list-inside ml-4">
                            <li>Dostępu do swoich danych osobowych,</li>
                            <li>Sprostowania, usunięcia lub ograniczenia przetwarzania swoich danych,</li>
                            <li>Przenoszenia swoich danych,</li>
                            <li>Wniesienia skargi do organu nadzorczego.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Zmiany w Polityce Prywatności</h2>
                        <p>Zastrzegamy sobie prawo do zmiany Polityki Prywatności w dowolnym momencie. Zmieniona Polityka będzie publikowana na stronie <strong>https://ecohero.q1000q.me</strong> i wchodzi w życie z chwilą jej opublikowania.</p>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Privacy;