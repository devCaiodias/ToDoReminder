'use client';
import { useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';


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
        <>
            <div className='flex items-center justify-between'>
                <h1 className='font-extrabold text-3xl m-8 ml-20'>Tasks</h1>

                <div className='flex items-center justify-between gap-4 m-8'>
                    <Button className='rounded-full bg-white text-black hover:bg-[#f1f1f1] p-6' onClick={Logout}>Logout</Button>
                    <Button className='rounded-full bg-white text-black hover:bg-[#f1f1f1] p-6' onClick={() => router.push('/CreateTask')}>Create Task</Button>

                </div>
            </div>

            <header className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-7 p-4 rounded-lg m-8'   >
                <div className='flex flex-col justify-center gap-4 bg-white p-4 rounded-lg shadow-md'>
                    <div className='flex items-center justify-between p-1'>
                        <h2 className='text-3xl font-bold'>Title</h2>
                        <Button variant="link" className='text-[#38b6ff]'>Edit tasks</Button>
                    </div>
                    <p className='text-center font-fira font-bold'>status</p>
                    <div className='bg-[#f1f1f1] rounded-4xl'>
                        <div>
                            <p className='text-center p-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex pariatur quibusdam molestiae, fuga, id rerum voluptate quae minus consectetur labore nihil voluptates ipsa natus alias mollitia sequi nemo accusamus eligendi.</p>
                        </div>
                        <div className='flex items-center justify-between gap-4 p-4'>
                            <Button className='rounded-full bg-white text-black hover:bg-[#f1f1f1] p-6'>category</Button>
                            <Button className='rounded-full bg-white text-black hover:bg-[#f1f1f1] p-6'>25/08/2025 00:00</Button>

                        </div>

                    </div>

                </div>
                <div className='flex flex-col justify-center gap-4 bg-white p-4 rounded-lg shadow-md'>
                    <div className='flex items-center justify-between p-1'>
                        <h2 className='text-3xl font-bold'>Title</h2>
                        <Button variant="link" className='text-[#38b6ff]'>Edit tasks</Button>
                    </div>
                    <p className='text-center font-fira font-bold'>status</p>
                    <div className='bg-[#f1f1f1] rounded-4xl'>
                        <div>
                            <p className='text-center p-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex pariatur quibusdam molestiae, fuga, id rerum voluptate quae minus consectetur labore nihil voluptates ipsa natus alias mollitia sequi nemo accusamus eligendi.</p>
                        </div>
                        <div className='flex items-center justify-between gap-4 p-4'>
                            <Button className='rounded-full bg-white text-black hover:bg-[#f1f1f1] p-6'>category</Button>
                            <Button className='rounded-full bg-white text-black hover:bg-[#f1f1f1] p-6'>25/08/2025 00:00</Button>

                        </div>

                    </div>

                </div>
                <div className='flex flex-col justify-center gap-4 bg-white p-4 rounded-lg shadow-md'>
                    <div className='flex items-center justify-between p-1'>
                        <h2 className='text-3xl font-bold'>Title</h2>
                        <Button variant="link" className='text-[#38b6ff]'>Edit tasks</Button>
                    </div>
                    <p className='text-center font-fira font-bold'>status</p>
                    <div className='bg-[#f1f1f1] rounded-4xl'>
                        <div>
                            <p className='text-center p-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex pariatur quibusdam molestiae, fuga, id rerum voluptate quae minus consectetur labore nihil voluptates ipsa natus alias mollitia sequi nemo accusamus eligendi.</p>
                        </div>
                        <div className='flex items-center justify-between gap-4 p-4'>
                            <Button className='rounded-full bg-white text-black hover:bg-[#f1f1f1] p-6'>category</Button>
                            <Button className='rounded-full bg-white text-black hover:bg-[#f1f1f1] p-6'>25/08/2025 00:00</Button>

                        </div>

                    </div>

                </div>
            </header>
        </>
    )
}