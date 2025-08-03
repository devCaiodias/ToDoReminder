'use client'

import { useState } from "react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from "../ui/button";
import axios from "axios";

export default function CreateTasks() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [category, setCategory] = useState('');
    const [status, setStatus] = useState('');

    const handleCreateTasks = async () => {
        const token = localStorage.getItem('token');
        console.log(token)

        if (!token || token === 'undefined') {
            console.error('Token inválido. Faça login novamente.');
            return;
        }

        try {
            const res = await axios.post('http://localhost:8080/tasks/createTasks', {
                title,
                description,
                dueDate,
                category,
                status
            }, {
                withCredentials: true
            });

            console.log('Tarefa criada:', res.data);
            // opcional: limpar campos após sucesso
            setTitle('');
            setDescription('');
            setDueDate('');
            setCategory('');
            setStatus('');
        } catch (error) {
            console.error('Erro ao criar tarefa:', error);
        }
    };

    return (
        <Sheet>
            <SheetTrigger>
                <Button className='rounded-full bg-white text-black hover:bg-[#f1f1f1] p-6'>
                    Create Task
                </Button>
            </SheetTrigger>
            <SheetContent className='w-[400px] sm:w-[540px] h-[500px] rounded-3xl mr-2 mt-2'>
                <SheetHeader>
                    <SheetTitle className='text-4xl'>Create Task</SheetTitle>
                    <SheetDescription className='p-6 flex flex-col items-center justify-center'>
                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-3 rounded-full bg-gray-100 focus:outline-none m-3"
                        />
                        <input
                            type="text"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-3 rounded-full bg-gray-100 focus:outline-none m-3"
                        />
                        <input
                            type="datetime-local"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                            className="w-full p-3 rounded-full bg-gray-100 focus:outline-none m-3"
                        />
                        <input
                            type="text"
                            placeholder="Category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full p-3 rounded-full bg-gray-100 focus:outline-none m-3"
                        />
                        <input
                            type="text"
                            placeholder="Status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full p-3 rounded-full bg-gray-100 focus:outline-none m-3"
                        />

                        <button
                            type="button"
                            onClick={handleCreateTasks}
                            className="w-30 bg-black text-white py-3 rounded-full font-semibold"
                        >
                            Create Tasks
                        </button>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}
