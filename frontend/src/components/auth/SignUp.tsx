'use client';
import Link from "next/link";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";

const SignUpSchema = z.object({
    name: z.string().min(1, "Name is required"),
    username: z.string().min(1, "Username is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    passwordConfirme: z.string().min(6, "Confirm your password"),
}).refine((data) => data.password === data.passwordConfirme, {
    message: "Passwords do not match",
    path: ["passwordConfirme"],
});

export default function SignUpForm() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<z.infer<typeof SignUpSchema>>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            name: "",
            username: "",
            email: "",
            password: "",
            passwordConfirme: ""
        }
    });

    const onSubmit = async (data: z.infer<typeof SignUpSchema>) => {
        try {
            await axios.post("http://localhost:8080/auth/register", data, {
                withCredentials: true,
            })

            reset();

            router.push("/LogIn");
        } catch (err) {
            const error = err as AxiosError;
            console.error("Error ao registrar:", error.response?.data || error.message);
        }
    };

    return (
        <div className="w-full sm:w-1/2 flex flex-col sm:justify-center sm:p-8 bg-white sm:rounded-bl-[100px] sm:rounded-tl-[100px]">
            <div className='inline-block sm:mb-8'>
                <h2 className="text-center sm:inline text-5xl sm:text-7xl font-bold sm:mx-28 my-10">Sign up</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:w-auto sm:mx-28 sm:mt-10 flex flex-col justify-center items-center sm:block">
                <div>
                    <input
                        {...register("name")}
                        type="text"
                        placeholder="🧑🏻 Name"
                        className="w-full p-3 rounded-full bg-gray-100 focus:outline-none"
                    />
                    {errors.name && <p className="text-red-500 text-sm ml-4">{errors.name.message}</p>}
                </div>

                <div>
                    <input
                        {...register("username")}
                        type="text"
                        placeholder="👤 Username"
                        className="w-full p-3 rounded-full bg-gray-100 focus:outline-none"
                    />
                    {errors.username && <p className="text-red-500 text-sm ml-4">{errors.username.message}</p>}
                </div>

                <div>
                    <input
                        {...register("email")}
                        type="email"
                        placeholder="📧 Email"
                        className="sm:w-full p-3 rounded-full bg-gray-100 focus:outline-none"
                    />
                    {errors.email && <p className="text-red-500 text-sm ml-4">{errors.email.message}</p>}
                </div>

                <div>
                    <input
                        {...register("password")}
                        type="password"
                        placeholder="🔑 Password"
                        className="sm:w-full p-3 rounded-full bg-gray-100 focus:outline-none"
                    />
                    {errors.password && <p className="text-red-500 text-sm ml-4">{errors.password.message}</p>}
                </div>

                <div>
                    <input
                        {...register("passwordConfirme")}
                        type="password"
                        placeholder="🔑 Confirm Password"
                        className="sm:w-full p-3 rounded-full bg-gray-100 focus:outline-none"
                    />
                    {errors.passwordConfirme && <p className="text-red-500 text-sm ml-4">{errors.passwordConfirme.message}</p>}
                </div>

                <div className="flex flex-col items-center space-y-4 mt-8">
                    <button
                        type="submit"
                        className="w-64 sm:w-80 bg-black text-white py-3 rounded-full font-semibold"
                    >
                        Sign up
                    </button>

                    <Link href="/LogIn" className="w-64 sm:w-80 text-center bg-gray-100 text-black py-3 rounded-full font-semibold">
                        Log in
                    </Link>
                </div>
            </form>
        </div>
    );
}
