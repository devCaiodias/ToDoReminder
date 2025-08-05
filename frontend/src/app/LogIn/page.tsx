import LogInForm from "@/components/auth/LogIn";

export default function LogIn() {
    return (
        <div className="min-h-screen flex md:bg-none xl:bg-[url('/branco.gif')] md:bg-cover">

            <div className="xl:w-1/2 xl:flex xl:flex-col xl:justify-end xl:rounded-4xl">
                <div className="hidden xl:block absolute text-white text-6xl font-bold p-5 ">
                    Welcome !!
                </div>
            </div>

            <LogInForm />
        </div>
    )
}