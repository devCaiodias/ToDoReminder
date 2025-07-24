
// const SignUpSchema = z.object({
//     name: z.string({
//         error: 'Name is required'
//     }),
//     username: z.string({
//         error: "Username is required"
//     }),
//     email: z.string({
//         error: "Email is required"
//     }).email({
//         message: "Must be valid email"
//     }),
//     password: z.string({
//         error: "Password is required"
//     }).min(6, {
//         message: "Password must have at least 6 characters"
//     }).max(12, {
//         message: "Password must have at least 12 characters"
//     }),
//     passwordConfirme: z.string({
//         error: "PasswordConfirme is required"
//     }),
// })

import SignUpForm from "@/components/auth/SignUp";
import Link from "next/link";

export default function SignUp() {
    // const form = useForm<z.infer<typeof SignUpSchema>>({
    //     resolver: zodResolver(SignUpSchema),
    //     defaultValues: {
    //         email: "",
    //         password: "",

    //     }
    // })

    return (
        <div className="min-h-[997px] flex bg-[url('/branco.gif')]">

            {/* Imagem lateral com texto */}
            <div className="w-1/2 flex flex-col justify-end rounded-4xl">
                <div className="absolute text-white text-6xl font-bold p-5">
                    Welcome !!
                </div>
            </div>

            {/* Formulário */}
            <SignUpForm />
        </div>
    )
}

