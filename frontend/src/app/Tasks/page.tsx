'use client';
import { useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';


export default function Tasks() {
    
    const router = useRouter();

    useEffect(() => {
        axios.get('http://localhost:8080/check-auth', { withCredentials: true })
            .catch(() => {
                router.push('/LogIn')
            });
    }, []);

    async function Logout() {
        try {
            await axios.post("http://localhost:8080/auth/logout", {}, { withCredentials: true });
            
            router.push("/LogIn")
            
        } catch (err) {
            const error = err as AxiosError;
            console.error("Error ao logout ", error.response?.data || error.message)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-8">Tasks Page</h1>
            <p className="text-lg">This is the tasks page content.</p>

            <button type="submit" onClick={Logout} className='bg-amber-300 text-black p-5 my-4 cursor-pointer rounded-3xl'>Logout</button>
        </div>
    )
}