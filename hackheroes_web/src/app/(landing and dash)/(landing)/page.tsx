import Header from './Header';
import Banner from './Banner';

export default function Home() {
    return (
        <div className="bg-[#1E1E1E] min-h-screen flex flex-col">
            <Header />
            <div className="flex-1 flex items-center justify-center">
                <Banner />
            </div>
        </div>
    );
}
