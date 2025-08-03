'use client';

import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import CreateTasks from '@/components/componenstTasks/create_Tasks';

interface Task {
    _id: string;
    title: string;
    description: string;
    dueDate: string;
    status: string;
    category: string;
}

export default function Tasks() {
    const router = useRouter();
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await axios.get('http://localhost:8080/check-auth', { withCredentials: true });
                const res = await axios.get('http://localhost:8080/tasks/list', { withCredentials: true });
                setTasks(res.data);
            } catch (err) {
                console.error('Erro de autenticação ou busca de tarefas', err);
                router.push('/LogIn');
            }
        };

        fetchData();
    }, []);

    async function Logout() {
        try {
            await axios.post("http://localhost:8080/auth/logout", {}, { withCredentials: true });
            router.push("/LogIn");
        } catch (err) {
            const error = err as AxiosError;
            console.error("Erro ao fazer logout", error.response?.data || error.message);
        }
    }

    return (
        <>
            <div className='flex items-center justify-between'>
                <h1 className='font-extrabold text-3xl m-8 ml-20'>Tasks</h1>
                <div className='flex items-center justify-between gap-4 m-8'>
                    <Button onClick={Logout} className='rounded-full bg-white text-black hover:bg-[#f1f1f1] p-6'>Logout</Button>
                    <CreateTasks />
                </div>
            </div>

            <section className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-7 p-4 rounded-lg m-8'>
                {tasks.map((task) => (
                    <article key={task._id} className='flex flex-col justify-center gap-4 bg-white p-4 rounded-lg shadow-md'>
                        <div className='flex items-center justify-between p-1'>
                            <h2 className='text-3xl font-bold'>{task.title}</h2>
                            <Button variant="link" className='text-[#38b6ff]'>Editar</Button>
                        </div>
                        <p className='text-center font-bold uppercase'>{task.status}</p>
                        <div className='bg-[#f1f1f1] rounded-4xl'>
                            <p className='text-center p-8'>{task.description}</p>
                            <div className='flex items-center justify-between gap-4 p-4'>
                                <Button className='rounded-full bg-white text-black hover:bg-[#f1f1f1] p-6'>
                                    {task.category}
                                </Button>
                                <Button className='rounded-full bg-white text-black hover:bg-[#f1f1f1] p-6'>
                                    {new Intl.DateTimeFormat('pt-BR', {
                                        dateStyle: 'short',
                                        timeStyle: 'short'
                                    }).format(new Date(task.dueDate))}
                                </Button>
                            </div>
                        </div>
                    </article>
                ))}
            </section>
        </>
    );
}
