import LogInForm from "@/components/auth/LogIn";

export default function LogIn() {
    return (
        <div className="min-h-[997px] flex bg-[url('/branco.gif')]">

            {/* Imagem lateral com texto */}
            <div className="w-1/2 flex flex-col justify-end rounded-4xl">
                <div className="absolute text-white text-6xl font-bold p-5">
                    Welcome !!
                </div>
            </div>

            {/* Formulário */}
            <LogInForm />
        </div>
    )
}