import Header from "@/app/(landing)/Header";

export default function Home() {

    return (
        <div className="bg-[#1E1E1E] min-h-screen flex flex-col">
            <Header />
            <div className="flex-grow flex justify-center">
                <div className="max-w-4xl px-4 mt-4">
                    <p className="text-white text-lg leading-relaxed">
                        Opis backendu
                    </p>
                </div>
            </div>
        </div>
    );
}
