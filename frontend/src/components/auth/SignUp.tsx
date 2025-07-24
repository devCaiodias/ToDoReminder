'use client';
import Link from "next/link";
import * as z from "zod"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const SignUpSchema = z.object({
    name: z.string().min(1, "Name is required"),
    username: z.string().min(1, "Username is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long")
})


export default function SignUpForm() {

    const router = useRouter()

    const form = useForm<z.infer<typeof SignUpSchema>>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            name: "",
            username: "",
            email: "",
            password: ""
        }
    })

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
                    <div>
                        <input
                            type="password"
                            placeholder="🔑 Password Confirme"
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

