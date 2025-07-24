
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

import Link from "next/link";

export default function SignUpForm() {
    // const form = useForm<z.infer<typeof SignUpSchema>>({
    //     resolver: zodResolver(SignUpSchema),
    //     defaultValues: {
    //         email: "",
    //         password: "",

    //     }
    // })

    return (
        <>
            {/* Formulário */}
            <div className="w-1/2 flex flex-col justify-center p-8 bg-white rounded-bl-[100px] rounded-tl-[100px]">
                <div className='inline-block mb-8'>
                    <h2 className="text-7xl font-bold mx-28 my-12">Sign up</h2>
                </div>

                <form className="space-y-4 w-auto mx-28">
                    <div>
                        <input
                            type="text"
                            placeholder="🧑🏻 Name"
                            className="w-full p-3 rounded-full bg-gray-100 focus:outline-none"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="👤 Username"
                            className="w-full p-3 rounded-full bg-gray-100 focus:outline-none"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="📧 Email"
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
                        Sign up
                    </button>

                    <button
                        type="button"
                        className="w-80 cursor-pointer bg-gray-100 text-black py-3 rounded-full font-semibold"
                    >
                        <Link href="/LogIn">Log in</Link>
                    </button>
                </div>
            </div>
        </>
    )
}

