import Link from "next/link";

export default function LogInForm() {
    return (
            <>
            {/* Formulário */}
            <div className="w-1/2 flex flex-col justify-center p-8 bg-white rounded-bl-[100px] rounded-tl-[100px]">
                <div className='inline-block mb-8'>
                    <h2 className="text-7xl font-bold mx-28 my-12">Log in</h2>
                </div>

                <form className="space-y-4 w-auto mx-28">
                    <div>
                        <input
                            type="text"
                            placeholder="👤 Username"
                            className="w-full p-3 rounded-full bg-gray-100 focus:outline-none"
                            />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="🔑 Password"
                            className="w-full p-3 rounded-full bg-gray-100 focus:outline-none"
                        />
                    </div>

                </form>
                    <div className="flex flex-col items-center space-y-4 mt-8">

                        <button
                            type="submit"
                            className="w-80 bg-black text-white py-3 rounded-full font-semibold"
                            >
                            Log in
                        </button>

                        <button
                            type="button"
                            className="w-80 bg-gray-100 text-black py-3 rounded-full font-semibold"
                            >
                            <Link href="/SignUp">Sign up</Link>
                        </button>
                    </div>
            </div>
                                </>
    )
}