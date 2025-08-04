
import SignUpForm from "@/components/auth/SignUp";

export default function SignUp() {

    return (
        <div className="sm:min-h-[997px] flex bg-none sm:bg-[url('/branco.gif')]">

            {/* Imagem lateral com texto */}
            <div className="sm:w-1/2 sm:flex sm:flex-col sm:justify-end sm:rounded-4xl">
            </div>

            {/* Formulário */}
            <SignUpForm />
        </div>
    )
}

// sm:w-auto sm:mx-28 flex flex-col justify-center items-center