import LogInForm from "@/components/auth/LogIn";

export default function LogIn() {
    return (
        <div className="sm:min-h-[997px] flex bg-none sm:bg-[url('/branco.gif')]">

            <div className="sm:w-1/2 sm:flex sm:flex-col sm:justify-end sm:rounded-4xl">
                <div className="hidden sm:block absolute text-white text-6xl font-bold p-5">
                    Welcome !!
                </div>
            </div>

            <LogInForm />
        </div>
    )
}