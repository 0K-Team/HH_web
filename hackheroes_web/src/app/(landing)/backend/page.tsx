import Header from "@/app/(landing)/Header";

export default function Home() {

    return (
        <div className="bg-[#1E1E1E] min-h-screen flex flex-col">
            <Header />
            <div className="flex-grow flex justify-center">
                <div className="max-w-4xl px-4 mt-4">
                    <h1 className="text-2xl font-bold mb-4">Ogólne</h1>
                    <ul className="list-disc list-inside mb-8">
                        <li>Backend został w zupełności napisany w nowoczesnym i rewolucyjnym języku <strong>TypeScript</strong>.</li>
                        <li>Do modułów oraz endpointów została użyta nowoczesna biblioteka <strong>ExpressJS</strong>.</li>
                        <li>Sporządzona została profesjonalna i kompletna dokumentacja endpointów w bibliotece <strong>Swagger</strong>, która pozwoliła naszym kolegom zajmującym się frontendem na łatwe korzystanie z endpointów oraz ich testowanie.</li>
                        <li>Serwer backend, jak i web, jest hostowany w osobnych kontenerach <strong>Docker</strong>, dla pełnej kompatybilności i unikania błędów. Hostowane są na dedykowanym serwerze, w celu maksymalnej kontroli nad projektem, oszczędności finansowych oraz niezależności od wielkich serwerowni.</li>
                        <li>Do przechowywania danych używamy przełomowej NO-SQL-owej bazy danych: <strong>MongoDB</strong> na platformie <strong>MongoDB Atlas</strong> z przechowywaniem danych na redundantnych serwerach, by zapewnić bezpieczeństwo danych.</li>
                    </ul>

                    <h1 className="text-2xl font-bold mb-4">Komponenty Backendu</h1>
                    <ul className="list-disc list-inside mb-8">
                        <li>
                            <strong>Logowanie:</strong> Zastosowany został <strong>PassportJS</strong> z implementacją <strong>JSON Web Token (JWT)</strong> oraz autorskim mechanizmem <strong>logowania się za pomocą kodu QR</strong> z naszej aplikacji mobilnej.
                        </li>
                        <li>
                            <strong>CDN:</strong> Hostowany dodatkowo dla redundancji również na <strong>Microsoft Azure Storage Accounts</strong> w celu uniknięcia usterek, połączony jest on z backendem bezpośrednim połączeniem dla maksymalnej wydajności.
                        </li>
                        <li>
                            <strong>AI:</strong> Wykorzystujemy rewolucyjny otwartoźródłowy <strong>model AI Lammma 3.0 70B</strong> do generacji spersonalizowanych sugestii pomagających zmniejszyć emisję CO2 w naszym codziennym życiu (w naszym kalkulatorze emisji CO2).
                        </li>
                        <li>
                            <strong>Mapy:</strong> Używamy uniwersalnej biblioteki <strong>OpenLayers</strong> i otwartoźródłowego źródła map: <strong>OpenStreetMap</strong>.
                        </li>
                        <li>
                            <strong>Email:</strong> Do wysyłania maili potwierdzających stworzenie konta lub usunięcie go używamy wysoko poważanej platformy<strong> Microsoft Azure Communications Services</strong>.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
