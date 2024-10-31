import Link from "next/link";
import Image from 'next/image';
import logoLightTransparent from './logoLightTransparent.png';

const Login = () => {
    return (
        <>
            <section className="flex justify-center items-center bg-white-200 h-[100vh]">
                <div className="text-center bg-white-200 px-[15vh] py-[15vh] rounded-2xl ">
                   <div className="flex justify-center items-center">
                        <Image className="w-[15rem] h-[15rem] object-cover"
                            src={logoLightTransparent}
                            alt="Logo"
                            width={200}
                            height={200}
                        />
                    </div>
                    <Link href="/hackheroes_web/src/app/auth/(login)/google-login" className="block text-lg font-bold bg-green-400 p-4 rounded shadow-lg mb-7 hover:bg-green-200 hover:scale-105 transition-transform duration-300">Login with Google</Link>
                    <Link href="/hackheroes_web/src/app/auth/(login)/meta-login" className="block text-lg font-bold bg-green-400 p-4 rounded shadow-lg hover:bg-green-200 hover:scale-105 transition-transform duration-300">Login with Meta (Facebook)</Link>                </div>
            </section>
        </>
    );
};

export default Login;