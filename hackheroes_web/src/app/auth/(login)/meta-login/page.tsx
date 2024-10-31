import Link from "next/link";

const Login = () => {
    return (
        <>
            <section className="flex justify-center items-center bg-green-500 h-[100vh]">
                <div className="text-center bg-white px-[8vh] py-[13vh] rounded-2xl block text-lg font-bold ">
                    <h1 className="text-4xl">Meta authentication page</h1>
                    <Link href="/auth" className="text-4xl p">&lt;</Link>

                </div>
            </section>
        </>
    );
};

export default Login;