'use client'

import { useState } from "react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from "../ui/button";
import axios from "axios";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import Swal from "sweetalert2";

interface CreateTasksProps {
    onTaskCreated: () => void;
}

export default function CreateTasks({ onTaskCreated }: CreateTasksProps) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [category, setCategory] = useState('');
    const [status, setStatus] = useState('');

    const [open, setOpen] = useState(false);

    const handleCreateTasks = async () => {
        const token = localStorage.getItem('token');
        console.log(token)

        if (!token || token === 'undefined') {
            console.error('Token inválido. Faça login novamente.');
            return;
        }

        try {
            await axios.post('https://todoreminder-3hsg.onrender.com/tasks/createTasks', {
                title,
                description,
                dueDate,
                category,
                status
            }, {
                withCredentials: true
            });
            onTaskCreated();
            setTitle('');
            setDescription('');
            setDueDate('');
            setCategory('');
            setStatus('');
            setOpen(false);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Task Created",
                showConfirmButton: false,
                timer: 1500
            });


        } catch (error) {
            Swal.fire({
                title: "Erro ao criar tarefa",
                icon: "error",
                timer: 1500,
                draggable: true
            });
        }
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button className='rounded-full bg-white text-black hover:bg-[#f1f1f1] p-6'>
                    Create Task
                </Button>
            </SheetTrigger>
            <SheetContent className='w-[400px] sm:w-[540px] h-[500px] rounded-3xl mt-2'>
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
                        <Textarea
                            id="description"
                            placeholder="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="col-span-2 h-8"
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
                        <Select value={status} onValueChange={setStatus} >
                            <SelectTrigger className="w-full p-4 rounded-full bg-gray-100 focus:outline-none m-3">
                                <SelectValue placeholder="status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="pending">pending</SelectItem>
                                    <SelectItem value="completed">completed</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

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
