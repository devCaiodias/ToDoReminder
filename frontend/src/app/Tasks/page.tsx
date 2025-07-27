'use client';
import { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';


export default function Tasks() {
    
    const router = useRouter();

    useEffect(() => {
        axios.get('http://localhost:8080/check-auth', { withCredentials: true })
            .catch(() => {
                router.push('/LogIn')
            });
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-8">Tasks Page</h1>
            <p className="text-lg">This is the tasks page content.</p>
        </div>
    )
}