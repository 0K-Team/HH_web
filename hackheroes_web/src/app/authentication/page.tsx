import Link from "next/link";

const Login = () => {
    return (
        <>
            <section className="flex justify-center items-center bg-green-500 h-[100vh]">
                <div className="text-center bg-white px-[10vh] py-[15vh] rounded-2xl ">
                    <Link href="/authentication/google-login" className="block text-lg font-bold bg-green-400 p-4 rounded shadow-lg mb-7 hover:bg-green-200 hover:scale-105 transition-transform duration-300">Login with Google</Link>
                    <Link href="/authentication/meta-login" className="block text-lg font-bold bg-green-400 p-4 rounded shadow-lg hover:bg-green-200 hover:scale-105 transition-transform duration-300">Login with Meta (Facebook)</Link>                </div>
            </section>
        </>
    );
};

export default Login;