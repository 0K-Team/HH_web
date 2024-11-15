import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Cookies = () => {
    return (
        <>
            <Header />
            <div className="bg-gray-900 min-h-screen flex flex-col items-center text-white p-8">
                <div className="max-w-4xl w-full">
                    <h1 className="text-4xl font-bold mb-8">Polityka Cookies</h1>
                    <p className="mb-4">Data wejścia w życie: 15.11.2024</p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Czym są pliki cookie?</h2>
                        <p>Pliki cookie to małe pliki tekstowe przechowywane na urządzeniu użytkownika podczas odwiedzin na stronie internetowej. Używamy plików cookie, aby poprawić funkcjonalność strony oraz dostosować ją do potrzeb użytkowników.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Rodzaje używanych plików cookie</h2>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>Niezbędne pliki cookie:</strong> Te pliki cookie są niezbędne do prawidłowego działania strony. Bez nich strona może nie działać poprawnie.</li>
                            <li><strong>Pliki cookie analityczne:</strong> Pomagają nam analizować sposób, w jaki użytkownicy korzystają ze strony, co pozwala na jej ulepszanie.</li>
                            <li><strong>Pliki cookie marketingowe:</strong> Używamy ich, aby dostarczać spersonalizowane reklamy i treści, które mogą Cię interesować.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Zarządzanie plikami cookie</h2>
                        <p>Użytkownicy mogą zarządzać ustawieniami plików cookie w swojej przeglądarce. Możesz zaakceptować wszystkie pliki cookie, zablokować je lub usunąć w ustawieniach przeglądarki. Należy jednak pamiętać, że wyłączenie niektórych plików cookie może wpłynąć na funkcjonowanie strony.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Zmiany w polityce cookies</h2>
                        <p>Możemy od czasu do czasu aktualizować naszą Politykę Cookies. O wszelkich zmianach będziemy informować użytkowników, publikując zaktualizowaną wersję na stronie <strong>https://ecohero.q1000q.me</strong>.</p>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Cookies;