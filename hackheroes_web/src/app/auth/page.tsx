import Link from "next/link";
import Image from 'next/image';
import logoTransparent from '../auth/(content)/logoTransparent.svg';

const Login = () => {
    return (
        <>
            <section className="flex justify-center items-center bg-[#1E1E1E] min-h-screen">
                <div className="absolute w-[55vh] h-[55vh] bg-[#29FF77] opacity-10 rounded-full top-[-5vh] right-[18%] blur-2xl"></div>
                <div className="absolute w-[40vh] h-[40vh] bg-[#29FF77] opacity-10 rounded-full bottom-2 left-2 blur-3xl"></div>
                <div className="absolute w-[55vh] h-[55vh] bg-[#29FF77] opacity-10 rounded-full bottom-[-5vh] right-2 blur-3xl"></div>

                <div className="text-center bg-[#2A2A2A] px-12 py-16 rounded-2xl border-4 border-[#29FF77] shadow-lg w-full max-w-md">
                    <div className="flex justify-center items-center mb-3">
                        <Image
                            className="w-[30vh] h-[25vh] object-cover"
                            src={logoTransparent}
                            alt="Logo"
                            width={192}
                            height={192}
                        />
                    </div>
                    <h2 className="text-white font-semibold text-2xl mb-8">
                        Zaloguj się używając <br/> jednego ze sposobów:
                    </h2>
                    <Link href="https://ecohero.q1000q.me/api/v1/auth/google" passHref={true} className="block text-lg font-semibold text-center text-black bg-[#29FF77] py-3 rounded-full mb-6 transition duration-300 ease-in-out transform hover:bg-[#22cc66] hover:scale-105 hover:text-white shadow-lg">
                        Google
                    </Link>

                    <Link href="https://ecohero.q1000q.me/api/v1/auth/facebook" passHref={true} className="block text-lg font-semibold text-center text-black bg-[#29FF77] py-3 rounded-full transition duration-300 ease-in-out transform hover:bg-[#22cc66] hover:scale-105 hover:text-white shadow-lg">
                        Meta (Facebook)
                    </Link>
                </div>
            </section>

        </>
    );
};

export default Login;