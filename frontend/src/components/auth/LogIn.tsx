'use client';
import Link from "next/link";
import * as z from "zod"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import Swal from "sweetalert2";

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
            await axios.post("https://todoreminder-3hsg.onrender.com/auth/login", data, {
                withCredentials: true,
            })
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login with success",
                showConfirmButton: false,
                timer: 1500
            });
            reset()
            router.push("/Tasks")

        } catch (err) {
            Swal.fire({
                title: "Error ao fazer login",
                icon: "error",
                timer: 1500,
                draggable: true
            });
        }
    }

    return (
        <>
            {/* Formulário */}
            <div className="w-full sm:w-1/2 flex flex-col justify-center h-screen sm:p-8 bg-white sm:rounded-bl-[100px] sm:rounded-tl-[100px]">
                <div className='inline-block sm:mb-8'>
                    <h2 className="text-center sm:inline text-7xl sm:text-7xl font-bold sm:mx-28 mb-14">Log in</h2>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:w-auto sm:mx-28 sm:mt-10 flex flex-col justify-center items-center sm:block">
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
                            className="w-64 sm:w-80 bg-black text-white py-3 rounded-full font-semibold"
                        >
                            Log in
                        </button>

                        <button
                            type="button"
                            className="w-64 sm:w-80 text-center bg-gray-100 text-black py-3 rounded-full font-semibold"
                        >
                            <Link href="/SignUp">Sign up</Link>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}