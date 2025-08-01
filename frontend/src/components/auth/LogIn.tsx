'use client';
import Link from "next/link";
import * as z from "zod"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";

const LogInSchema = z.object({
    username: z.string().min(1, "Username is required"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
})

export default function LogInForm() {

    const router = useRouter()

    const {
        register: login,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<z.infer<typeof LogInSchema>>({
        resolver: zodResolver(LogInSchema),
        defaultValues: {
            username: "",
            password: ""
        }
    })

    const onSubmit = async (data: z.infer<typeof LogInSchema>) => {
        try {
            const res = await axios.post("http://localhost:8080/auth/login", data, {
                withCredentials: true,
            })
            reset()

            router.push("/Tasks")
            localStorage.setItem('token', res.data.token);
        } catch (err) {
            const error = err as AxiosError

            console.error("Error ao fazer login: ", error.response?.data || error.message)
        }
    }

    return (
        <>
            {/* Formulário */}
            <div className="w-1/2 flex flex-col justify-center p-8 bg-white rounded-bl-[100px] rounded-tl-[100px]">
                <div className='inline-block mb-8'>
                    <h2 className="text-7xl font-bold mx-28 my-12">Log in</h2>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-auto mx-28">
                    <div>
                        <input
                            {...login("username")}
                            type="text"
                            placeholder="👤 Username"
                            className="w-full p-3 rounded-full bg-gray-100 focus:outline-none"
                        />
                        {errors.username && <p className="text-red-500 text-sm ml-4">{errors.username.message}</p>}
                    </div>
                    <div>
                        <input
                            {...login("password")}
                            type="password"
                            placeholder="🔑 Password"
                            className="w-full p-3 rounded-full bg-gray-100 focus:outline-none"
                        />
                        {errors.password && <p className="text-red-500 text-sm ml-4">{errors.password.message}</p>}
                    </div>

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
                </form>
            </div>
        </>
    )
}